//Crear componente desde cero:
//Antes era obligatorio importar react, pero desde version 17 ya no hace falta
//import React from"react";
//*El primer paso para definir un componente es definir su nombre.
//*El nombre de un componente siempre debe iniciar en mayúscula
//* El componete es una funcion por ende podemos crearlo como function o arrow function:
//*La funcion PrimerComponente, retornara una vista
//*En react se usa return(), para indicar que lo que este dentro de los parentesis sera
//* el objeto visual que vamos a retornar, React solo puede retornar un componente a la vez.
const PrimerComponente=()=>{
return (
  <div>
    <h1>Hola Mundo</h1>
    <div>
      <h4> desde el componente</h4>
    </div>
  </div>
);

};
//*Luego de crear el comp lo exportaremos, este archivo unicamente exporta 01 componente
export default PrimerComponente;