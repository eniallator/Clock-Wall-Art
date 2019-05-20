const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function run() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    requestAnimationFrame(run)
}

run()
