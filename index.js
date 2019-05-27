const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const acceptedChars = document.getElementById('accepted-chars')
acceptedChars.innerHTML = 'Accepted characters are: ' + Object.keys(charToAngles).join('')

canvas.width = window.innerWidth * 0.99
canvas.height = window.innerHeight * 0.9

function getMaxwidth(lines) {
    let maxWidth = 0
    for (let line of lines) {
        maxWidth = Math.max(maxWidth, line.length)
    }
    return maxWidth
}

function init(textArtToParse) {
    const clocks = []
    const lines = textArtToParse.split('\n')
    const maxWidth = getMaxwidth(lines)
    const clockSize = Math.floor(Math.min(canvas.width / maxWidth, canvas.height / lines.length))

    for (let y = 0; y < lines.length; y++) {
        clocks[y] = []
        const chars = lines[y].split('')
        for (let x = 0; x < maxWidth; x++) {
            let angles = {}
            if (charToAngles[chars[x]]) {
                angles = charToAngles[chars[x]]
            }

            clocks[y][x] = new Clock(
                clockSize / 2 + x * clockSize,
                clockSize / 2 + y * clockSize,
                clockSize / 2 - clockSize / 20,
                angles.big,
                angles.small
            )
            clocks[y][x].visible = angles.big !== undefined
        }
    }
    return clocks
}

function draw() {
    ctx.fillStyle = '#808080'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const artInput = document.getElementById('art-input')
    const clocks = init(artInput.value)

    for (let row of clocks) {
        for (let clock of row) {
            clock.draw(ctx)
        }
    }
}

draw()
