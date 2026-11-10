// SUBERCASEAUX EN EL RIO
//Juan Mendoza Tamalet y Mateo Bautista Rodriguez
//
// Clases que vamos a necesitar:
//  - Barco:   jugador. En proceso
  //  - Roca:    obstaculo que baja por el rio. En proceso
//  - Escudo:  power-up que baja por el rio. En proceso
//  - Boton:   boton clickeable (iniciar, reiniciar, creditos, volver). En proceso
//  - Juego:   es la clase principal, manejo pantallas, listas y colisiones. En proceso
//  - Sonidos y sprites: por hacer

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
