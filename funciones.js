function resta(a, b) {

}
function suma(a, b) {

}

function isPar(a) {

}

function getArray(inicio, fin) {
    var array = []
    for (var i = inicio; i < fin; i++) {
        array.push(i);
    }
    console.log(array)
    return array;
}



module.exports = {
    suma, resta, isPar, getArray
}