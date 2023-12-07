/*
const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
} )
*/



const cows = 9; 

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no cows on the farm');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));

//------prueba----------------------------------------
const tiempoEnviado = 3000;
const mensajeEnviado = '¡Hola, mundo!';
function delay(tiempo, mensaje) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tiempo === 2000) {
        return resolve(mensaje);
      } else {
        return reject();
      }
    }, tiempo);
  });
}

delay(tiempoEnviado, mensajeEnviado).then((mensajeRecibido) => {
  console.log(mensajeRecibido);
}).catch(() => {
  console.log('Error');
});