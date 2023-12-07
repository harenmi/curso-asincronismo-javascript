// Ejemplo 1
function sum(num1, num2) {
    console.log('ejecutando funcion sum');
    return num1 + num2;
}

function calc(num1, num2, callback) {
    console.log('ejecutando funcion calc');
    return callback(num1, num2);
}

console.log(calc(2, 3, sum));


// Ejemplo 2
setTimeout(function() {
    console.log('Hola Javascript');
}, 2000);

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Harold')


/* 
function execCallback(callback) {
    setTimeout(callback, 2000);
}

function myFunc () {
    console.log('Ejecuta un callback con 2s de demora');
}

execCallback(myFunc); */
