const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23)
})

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test('One dollar should be 144.64 yen', () => {
     const yen = fromDollarToYen(3);
     expect(fromDollarToYen(3)).toBe(433.91999999999996);
    })

test ('One pound should be 0.054 yen', () =>  {
    const pound = fromYenToPound(3);
    expect(fromYenToPound(3)).toBeCloseTo(0.012)
})