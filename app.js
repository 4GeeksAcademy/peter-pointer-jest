// Funciones flecha

const fromDollarToYen = (a) => {
    return a * 157.53
}

const fromEuroToDollar = (a) => {
    return a * 1.07
}

const fromYenToPound = (a) => {
    return a * 0.0052
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};