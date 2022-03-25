/**
 * Sera nuestro archivo donde vamos a almancenar las paticiones
 */

// Una buena practica es tener la URL del api en una variable
//y ponerla en mayúscula
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=200";
//

// podemos crear una funcion generica la cual se encargue de hacer una peticion
// como parametro vamos a recibir la URL que puede ser la que lista o la
// que nos el detalle
// * url sera el parametro que reciba la url hacia donde se hara la peticion
// * url = BASE_URL Significa que si url esta vacio, es decir cuando llamemos
// * a la funcion no le pasamos el valor por defecto sera BASE_URL
// url tomara el valor de BASE_URL
// getDataFromPokemon();

// url toma el valor https://link.com
// getDataFromPokemon("https://link.com");
//cuando getDataFrom Pokemenon esta vacio cogera a BASE_URL,
// pero si entre parentesis le pondo alguna url, leera esa url
export const getDataFromPokemon=async(url = BASE_URL)=> {

  try {
      const response=await fetch(url);
      const data=await response.json();
      return data;
  } catch (error) {
    console.log(error.message);
  }
}