const { suma, resta, isPar, getArray, comprobar } = require('./funciones');

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

test('test comprobar  a < b y b < c es false', () => {
    expect(comprobar(2, 70, 30)).toBe(false)
})

test('test comprobar 2 < 70 y 70 < 100 es true', () => {
    expect(comprobar(2, 70, 100)).toBe(true);
})

test('calcularImporte ', () => {
    except(calculoImporte(2, 70, 10)).toBe(140 - 14)
})

test('filtroNumeroPares ', () => {
    except(calculoImporte([2, 70, 10, 1])).toStrictEqual([2, 70, 10]);
})

test('sumaArray', () => {
    except(calculoImporte([2, 70, 10, 1])).toBe(83);
})

test('mediaArray', () => {
    except(calculoImporte([0, 70, 9, 1])).toBe(20);
})

test('mayorArray', () => {
    except(calculoImporte([0, 70, 9, 1])).toBe(70);
})

test('menorArray', () => {
    except(calculoImporte([0, 70, 9, 1])).toBe(0);
})