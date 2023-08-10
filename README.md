# Ejemplos para hacer funciones y pasarle test

Los test son importantes en la programacion, aunque no se usan demasiado.

La idea de este proyecto es introducirse al mundo de los test.

En el proyecto hay un fichero llamado funciones.js y otro llamado funciones.test.js

En el package.json, tenemos instalado el modulo jest, libreria de testing de facebook.

Hay una suites de test que tiene 5 test que todos fallan.

El programador tiene que arreglarlos, haciendo los cambios en el fichero funciones.js

Para ejecutar los test desde la terminal haremos 

```
run dev test
```

nos saldra al final. Es farrajose de leer, pero hay que ir interpretanto el contenido


```txt
> mvp-test-01@1.0.0 test
> jest

  console.log
    [ 1, 2 ]

      at log (funciones.js:17:13)

 FAIL  ./funciones.test.js
  ✕ adds 1 + 2 to equal 3 (1 ms)
  ✕ resta 5 - 2 to equal 3 (1 ms)
  ✕ test if 5 not isPar
  ✕ test if 6 isPar (1 ms)
  ✕ test if getArray nos devuelve 1,2,3 (10 ms)

  ● adds 1 + 2 to equal 3

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: undefined

      2 |
      3 | test('adds 1 + 2 to equal 3', () => {
    > 4 |     expect(suma(1, 2)).toBe(3);
        |                        ^
      5 | });
      6 |
      7 | test('resta 5 - 2 to equal 3', () => {

      at Object.toBe (funciones.test.js:4:24)

  ● resta 5 - 2 to equal 3

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: undefined

       6 |
       7 | test('resta 5 - 2 to equal 3', () => {
    >  8 |     expect(resta(5, 2)).toBe(3);
         |                         ^
       9 | });
      10 |
      11 | test('test if 5 not isPar', () => {

      at Object.toBe (funciones.test.js:8:25)

  ● test if 5 not isPar

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: undefined

      10 |
      11 | test('test if 5 not isPar', () => {
    > 12 |     expect(isPar(5)).toBe(false);
         |                      ^
      13 | });
      14 |
      15 | test('test if 6 isPar', () => {

      at Object.toBe (funciones.test.js:12:22)

  ● test if 6 isPar

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: undefined

      14 |
      15 | test('test if 6 isPar', () => {
    > 16 |     expect(isPar(6)).toBe(true);
         |                      ^
      17 | });
      18 |
      19 | test('test if getArray nos devuelve 1,2,3', () => {

      at Object.toBe (funciones.test.js:16:22)

  ● test if getArray nos devuelve 1,2,3

    expect(received).toStrictEqual(expected) // deep equality

    - Expected  - 1
    + Received  + 0

      Array [
        1,
        2,
    -   3,
      ]

      18 |
      19 | test('test if getArray nos devuelve 1,2,3', () => {
    > 20 |     expect(getArray(1, 3)).toStrictEqual([1,2,3]);
         |                            ^
      21 | });

      at Object.toStrictEqual (funciones.test.js:20:28)

Test Suites: 1 failed, 1 total
Tests:       5 failed, 5 total
Snapshots:   0 total
Time:        0.188 s, estimated 1 s
Ran all test suites.
```



