class Juego {
  constructor() {
    this.estado = "inicio";
    this.barco = new Barco();
    this.escudo = new Escudo();

    // el tiempo lo contamos por frames
    this.duracion = 30 * 60; // los segundos
    this.frames = 0;         // frames

    this.cantRocas = 6;
    this.crearRocas();

    // un boton para cada pantalla
    this.btnJugar = new Boton("JUGAR", 300, 250, 200, 60);
    this.btnVolverGanaste = new Boton("VOLVER AL INICIO", 250, 260, 300, 60);
    this.btnVolverPerdiste = new Boton("VOLVER AL INICIO", 250, 260, 300, 60);
  }

  crearRocas() {
    this.rocas = [];
    for (let i = 0; i < this.cantRocas; i++) {
      this.rocas[i] = new Roca();
    }
  }

 actualizar() {
  if (this.estado === "jugando") {
    this.frames++;

    if (this.frames >= this.duracion) {
      this.estado = "final";
    } else {
      // movimiento del barco
      if (keyIsDown(LEFT_ARROW)) {
        this.barco.moverIzquierda();
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.barco.moverDerecha();
      }

      // movimiento de las rocas y colision
      for (let i = 0; i < this.cantRocas; i++) {
        this.rocas[i].caer(this.barco);
        if (this.rocas[i].chocaCon(this.barco)) {
          if (this.barco.tieneEscudo) {
            // el escudo absorbe UN impacto y se pierde
            this.barco.tieneEscudo = false;
            this.rocas[i].volverAArrancar(this.barco);
          } else {
            this.estado = "perdio";
          }
        }
      }

      // movimiento del escudo
      this.escudo.caer();
      if (this.escudo.chocaCon(this.barco)) {
        this.barco.tieneEscudo = true;
        this.escudo.volverAArrancar();
      }
    }
  }
}

  dibujar() {
    background(30, 90, 160);
    textAlign(LEFT, BASELINE);
    if (this.estado === "inicio") {
      this.dibujarInicio();
    } else if (this.estado === "jugando") {
      for (let i = 0; i < this.cantRocas; i++) {
        this.rocas[i].dibujar();
      }
      this.escudo.dibujar();
      this.barco.dibujar();
      this.dibujarTimer();
      this.dibujarIndicadorEscudo();
    } else if (this.estado === "final") {
      this.dibujarFinal();
    } else {
      this.dibujarPerdio();
    }
  }

  dibujarInicio() {
    fill(255);
    textSize(40);
    text("SUBERCASEAUX EN EL RIO", 125, 120);
    this.btnJugar.dibujar();
  }

  click() {
    if (this.estado === "inicio" && this.btnJugar.mouseEncima()) {
      this.estado = "jugando";
    } else if (this.estado === "final" && this.btnVolverGanaste.mouseEncima()) {
      this.volverAlInicio();
    } else if (this.estado === "perdio" && this.btnVolverPerdiste.mouseEncima()) {
      this.volverAlInicio();
    }
  }

  dibujarTimer() {
    let segundos = int((this.duracion - this.frames) / 60) + 1;
    fill(255);
    textSize(20);
    text("Tiempo: " + segundos, 15, 30);
  }

  dibujarIndicadorEscudo() {
    textSize(20);
    textAlign(RIGHT, BASELINE);
    if (this.barco.tieneEscudo) {
      fill(255, 220, 0);
      text("Escudo: SI", width - 15, 30);
    } else {
      fill(255);
      text("Escudo: NO", width - 15, 30);
    }
  }

  dibujarFinal() {
    background(0);
    fill(0, 180, 0);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("¡GANASTE!", width / 2, height / 2 - 40);
    this.btnVolverGanaste.dibujar();
  }

  dibujarPerdio() {
    background(0);
    fill(200, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("PERDISTE", width / 2, height / 2 - 40);
    this.btnVolverPerdiste.dibujar();
  }

  volverAlInicio() {
    if (this.estado === "final" || this.estado === "perdio") {
      this.barco = new Barco();
      this.escudo = new Escudo();
      this.frames = 0;
      this.crearRocas();
      this.estado = "inicio";
    }
  }
}
