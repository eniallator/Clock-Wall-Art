class Clock {
    constructor(x, y, radius, bigHandAngle = 0, smallHandAngle = 0) {
        this.x = x
        this.y = y
        this.radius = radius
        this.bigHandAngle = bigHandAngle
        this.smallHandAngle = smallHandAngle
    }

    _drawHand(ctx, length, angle, width) {
        const endX = this.x + length * Math.sin(angle)
        const endY = this.y + length * Math.cos(angle)

        ctx.lineWidth = width
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(this.x, this.y, width / 2, 0, 2 * Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(endX, endY, width / 2, 0, 2 * Math.PI)
        ctx.fill()
    }

    draw(ctx) {
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()

        ctx.strokeStyle = 'black'
        ctx.lineWidth = this.radius / 9
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.stroke()

        ctx.fillStyle = 'black'
        this._drawHand(ctx, this.radius * 0.6, this.smallHandAngle, this.radius / 9)
        this._drawHand(ctx, this.radius * 0.8, this.bigHandAngle, this.radius / 11)
    }
}
