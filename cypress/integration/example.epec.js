// para poder evitar el erro de cy is not defined vamos a definir a cy como global




/* global cy */

// Este archivo sera el que contenga nuestras pruebas
// Para poder iniciar una prueba necesitamos darle un titulo
// en este caso usamos describe para darle un titulo
describe("Mi primera prueba con cypress", () => {
    // dentro de nuestro arrow function vamos a escribir las pruebas
    // que haremos ejemplo
    it("prueba home pokemon", () => {
      // aca vamos a verificar si es que nuestro home funciona o no
      //cy => cypress
      // Esto va a entrar a localhost:3000 y decirno si funciona o no
      cy.visit("https://codigo13-react-tan.vercel.app/");
      
      cy.contains("Pokedex");

      cy.contains("Detalle del pokemon").click();

      cy.contains("Habilidades");
      cy.contains("Cerrar").click();
    });

    //Prueba para banderas:
    it ("pruebas para banderas",()=>{
        cy.visit ("https://codigo13-react-tan.vercel.app/flags");
        cy.wait (5000).then(()=>{
         cy.get("input:first").type("peru");   
         cy.contains("Republic of Peru").click();
         cy.contains("Lima");
        })
        
    })
//Prueba para youtube:
it ("pruebas para youtube",()=>{
    cy.visit ("https://codigo13-react-tan.vercel.app/youtube");
    cy.wait (5000).then(()=>{
     
     
     cy.contains("hola");
    })
        
})   
it("prueba de login", () => {
    cy.visit("https://codigo13-react-tan.vercel.app/login");
    // ahora vamos a ver de que otra podemos acceder a los inputs
    // usando el name del inputs podemos encontrar uno especifico y
    // poder escribir en el
    cy.get('[name="email"]').type("pepe@gmail.com");
    cy.get('[name="password"]').type("123456");
    cy.contains("Iniciar Session").click();
    cy.url().should("include", "/youtube/administrador");
    // primero deben abrir el modal y luego hacer que escriba en cada input
    // finalmente darle click al boton Crear
    cy.contains("Crear Pelicula").click();
    cy.get('[name="name"]').type("Hombre araña 2");
    cy.get('[name="director"]').type("Julio Araujo");
    cy.get('[name="gender"]').type("dc");
    cy.get('[name="video_link"]').type("www.google.com");
    cy.get('[name="wallpaper"]').type("www.google.com");
    cy.get(".btn-crear-movie").click();
    cy.contains("Hombre araña 2");
    // Eliminar la ultima pelicula que hemos agregado
    // recurden que estamos accediente al ultimo boton porque estamos usando .last()
    cy.get(".delete-button").last().click();
    cy.contains("OK").click();
  });
});