// SUBERCASEAUX EN EL RIO
//Juan Mendoza Tamalet y Mateo Bautista Rodriguez
//
// Clases que vamos a necesitar:
//  - Barco:   jugador. En proceso
//  - Roca:    obstaculo que baja por el rio. Por hacer
//  - Escudo:  power-up que baja por el rio. Por hacer
//  - Boton:   boton clickeable (iniciar, reiniciar, creditos, volver). En proceso
//  - Juego:   es la clase principal, manejo pantallas, listas y colisiones. En proceso
//  - Sonidos: por hacer
let juego;
 
function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}
 
function draw() {
  juego.actualizar();
  juego.dibujar();
}

function mousePressed() {
  juego.click();
}

function keyPressed() {
  if (key === "r" || key === "R") {
    juego.volverAlInicio();
  }
}
