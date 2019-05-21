const MaxAngle = 2 ** 3

const charToAngles = {
    '\\': { big: 5, small: 1 },
    '/': { big: 3, small: 7 },
    '(': { big: 3, small: 1 },
    ')': { big: 7, small: 5 },
    '^': { big: 7, small: 1 },
    v: { big: 5, small: 3 },
    _: { big: 2, small: 6 },
    '-': { big: 2, small: 6 },
    '|': { big: 4, small: 0 }
}

for (let char of Object.keys(charToAngles)) {
    for (let hand of Object.keys(charToAngles[char])) {
        charToAngles[char][hand] *= (1 / MaxAngle) * 2 * Math.PI
    }
}
