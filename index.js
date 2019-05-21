const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

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
            let angles = { big: 0, small: 0 }
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
        }
    }
    return clocks
}

let clocks = init(`        ________________
      _/                \\_
     /  ______            \\
    /              _____   \\
   /     (@)        (@)     \\
  |                          |
  |                          |
  |        ________          |
   \\     _         \\        /
    \\   / \\        ___     /
     \\_/  (___-----   )  _/
    /          ____--- _/
   (          /_______/
    \\________/`)

function draw() {
    ctx.fillStyle = '#808080'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let row of clocks) {
        for (let clock of row) {
            clock.draw(ctx)
        }
    }
}

draw()
