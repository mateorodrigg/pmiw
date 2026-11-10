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
