class Barco {
  // Por ahora va a ser un cuadrado, mas adelante agregaremos mas cosas
  constructor() {
    this.tam = 30;
    this.x = width / 2;
    this.y = height - 50;
    this.vel = 6;
    this.tieneEscudo = false;
  }

  dibujar() {
    push();
    rectMode(CENTER);
    // si tiene escudo, se dibuja un aro amarillo alrededor
    if (this.tieneEscudo) {
      noFill();
      stroke(255, 220, 0);
      strokeWeight(4);
      rect(this.x, this.y, this.tam + 14, this.tam + 14);
    }
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
