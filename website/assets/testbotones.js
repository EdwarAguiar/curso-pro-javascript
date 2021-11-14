//Dandole funcionalidad a los botones
//const btns = document.getElementsByClassName("call-to-action");

//btns.forEach( boton => {
    //boton.onclick = () => alert("Nunca pares de aprender!");
//});

// Entonces, ese codigo da error xq 
// Uncaught TypeError: btns.forEach is not a function

// btns.forEach es un "NodeList"
// Los "NodeList" se parecen a los arreglos, pero no del todo.
// // Los "NodeList" tienen la propiedad length, pero hasta alli, y hace que tengan ciertas funcionalidades del array

//Solucion

const btns = document.getElementsByClassName("call-to-action");

Array.prototype.forEach.call(btns, boton => {
    boton.onclick = () => alert("Nunca pares de aprender!");
});








