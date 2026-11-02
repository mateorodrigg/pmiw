class Juego {
  constructor() {
    this.estado = "inicio";
    this.barco = new Barco();
 
    // el tiempo lo contamos por frames
    this.duracion = 30 * 60; // los segundos
    this.frames = 0;         // frames 
  }
 
  actualizar() {
    if (this.estado !== "jugando") {
      return;
    }
 
    this.frames++;
    if (this.frames >= this.duracion) {
      this.estado = "final";
      return;
    }
 
    // movimiento del barco
    if (keyIsDown(LEFT_ARROW)) { 
      this.barco.moverIzquierda();
    }
    if (keyIsDown(RIGHT_ARROW)) { 
      this.barco.moverDerecha();
    }
  }
 
dibujar() {
  background(30, 90, 160);
  textAlign(LEFT, BASELINE);
  if (this.estado === "inicio") {
    this.dibujarInicio();
  } else if (this.estado === "jugando") {
    this.barco.dibujar();
    this.dibujarTimer();
  } else {
    this.dibujarFinal();
  }
}

dibujarInicio() {
  fill(255);
  textSize(40);
  text("SUBERCASEAUX EN EL RIO", 125, 120);
 
  //Boton
  if (mouseX > 300 && mouseX < 500 && mouseY > 250 && mouseY < 310) {
    fill(255, 150, 0); // hover
  } else {
    fill(255, 220, 0); //estado normal
  }
  rect(300, 250, 200, 60);
  fill(0);
  textSize(30);
  text("JUGAR", 360, 290);
}

click() {
  if (this.estado === "inicio") {
    if (mouseX > 300 && mouseX < 500 && mouseY > 250 && mouseY < 310) {
      this.estado = "jugando";
    }
  }
}

dibujarTimer() {
  let segundos = int((this.duracion - this.frames) / 60) + 1;
  fill(255);
  textSize(20);
  text("Tiempo: " + segundos, 15, 30);
}
 
dibujarFinal() {
  background(0);
  fill(0, 180, 0);
  textAlign(CENTER, CENTER);
  textSize(50);
  text("¡GANASTE!", width / 2, height / 2);
  fill(255);
  textSize(20);
  text("Apretá R para volver al inicio", width / 2, height / 2 + 60);
}

volverAlInicio() {
  if (this.estado === "final") {
    this.barco = new Barco();
    this.frames = 0;
    this.estado = "inicio";
  }
}
}
