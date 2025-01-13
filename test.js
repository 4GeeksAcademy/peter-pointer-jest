test("One dollar should be 157,53 yens", function() {

    // Importo la funcion desde app.js
    const {fromDollarToYen} = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(1);

    // Si 1 dolar son 157,53 yenes entonces 1 dolar debe ser (1 * 157,53)
    const expected = 1 * 157.53;

     // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(157.53); 
});

test("One euro should be 1.07 dollars", function() {

    // Importo la funcion desde app.js
    const {fromEuroToDollar} = require('./app.js');

    // Uso la función como debe ser usada
    const euro = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    
     // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One yen should be 0.0052 pounds", function() {

    // Importo la funcion desde app.js
    const {fromYenToPound} = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromYenToPound(1);
   
    const expected = 1 * 0.0052;

     // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBe(0.0052);
});