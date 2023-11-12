const sub = require('../routes/sub')

test('sub 3 - 2 to equals 1', () => {
    expect(sub(3, 2)).toBe(1)
})
