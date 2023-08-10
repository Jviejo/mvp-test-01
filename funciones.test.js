const { suma, resta, isPar, getArray } = require('./funciones');

test('adds 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('resta 5 - 2 to equal 3', () => {
    expect(resta(5, 2)).toBe(3);
});

test('test if 5 not isPar', () => {
    expect(isPar(5)).toBe(false);
});

test('test if 6 isPar', () => {
    expect(isPar(6)).toBe(true);
}); 


test("test if getArray nos devuelve 1,2,3", () => {
    expect(getArray(1, 3)).toStrictEqual([1, 2, 3]);
});

test('test comprobar  a < b y b < c es true', () => {
    expect(comprobar(2, 70, 30).toBe(true))
})

test('test comprobar a < b y b < c es false', () => {
    expect(comprobar(2, 70, 1).toBe(true));
})