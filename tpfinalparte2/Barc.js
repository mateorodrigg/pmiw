class Barco {
  // Por ahora va a ser un cuadrado mas adelante agregaremos mas cosas
  constructor() {
    this.tam = 30;
    this.x = width / 2;
    this.y = height - 50;
    this.vel = 6;
  }
 
  dibujar() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(139, 69, 19); 
    rect(this.x, this.y, this.tam, this.tam);
    pop();
  }
 
  moverIzquierda() {
    if (this.x > this.tam / 2) {
      this.x -= this.vel;
    }
  }
 
  moverDerecha() {
    if (this.x < width - this.tam / 2) {
      this.x += this.vel;
    }
  }
}
