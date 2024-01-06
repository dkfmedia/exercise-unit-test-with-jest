console.log('Hello World');
const sum = ( a , b ) => { 
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 144.64; 
    return valueInYen;
}

const fromYenToPound = function (valueInYen) { 
    let valueInPound = valueInYen * 0.0054;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};