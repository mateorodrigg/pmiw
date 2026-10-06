// Integrantes: Mateo Rodríguez y Juan Mendoza Tamalet
// Trabajo practico: El Desierto, de Horacio Quiroga 

let estado = 0;
let textos = [];
let imagenes = []; 


let opacidad = 0;
let posXText = 80;
let posYText = 20;

function preload() {
  textos = loadStrings("textos.txt");
  

  for (let i = 0; i < 20; i++) {
    imagenes[i] = loadImage("data/pantalla" + i + ".png"); 
  }
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(25);

  actualizarAnimacion();

  if (estado >= 0 && estado <= 20) {
    dibujarPantalla(estado);
  }
}

function dibujarPantalla(numEstado) {
  let indiceImagen = obtenerIndiceImagen(numEstado);

  if (imagenes[indiceImagen] && imagenes[indiceImagen].width > 0) {
    image(imagenes[indiceImagen], 0, 0, width, height);
  }

  mostrarCajaYTexto(numEstado);
  crearBoton(numEstado);
}


function obtenerIndiceImagen(numEstado) {
  if (numEstado == 0) {
    return 0; // portada
  } else if (numEstado == 1) {
    return 1; 
  } else if (numEstado == 2) {
    return 2; // infeccion
  } else if (numEstado == 3) {
    return 3; // aislado
  } else if (numEstado == 4) {
    return 4; // decision
  } else if (numEstado == 5) {
    return 5; 
  } else if (numEstado == 6) {
    return 6; 
  } else if (numEstado == 7) {
    return 7; // decision
  } else if (numEstado == 8) {
    return 8; 
  } else if (numEstado == 9) {
    return 9; 
  } else if (numEstado == 10) {
    return 10; 
  } else if (numEstado == 11) {
    return 11; 
  } else if (numEstado == 12) {
    return 12; // decision
  } else if (numEstado == 13) {
    return 13; // final 1
  } else if (numEstado == 14) {
    return 13; 
  } else if (numEstado == 15) {
    return 14; // decision
  } else if (numEstado == 16) {
    return 15; 
  } else if (numEstado == 17) {
    return 16; 
  } else if (numEstado == 18) {
    return 17; // decision
  } else if (numEstado == 19) {
    return 18; // final 2
  } else if (numEstado == 20) {
    return 19; // final 3
  } else {
    return 0;
  }
}

function obtenerTextoBotonA(numEstado) {
  if (numEstado == 0) {
    return "Comenzar";
  } else if (numEstado == 4) {
    return "A. Salir en la canoa desafiando el clima";
  } else if (numEstado == 7) {
    return "A. Intentar preparar comida para sus hijos";
  } else if (numEstado == 12) {
    return "A. Enseñar a protegerse y comunicarse";
  } else if (numEstado == 15) {
    return "A. Resistir con las provisiones restantes";
  } else if (numEstado == 18) {
    return "A. Tapar las goteras con envases plásticos";
  } else if (numEstado == 13 || numEstado == 19 || numEstado == 20) {
    return "Reiniciar"; // finales
  } else {
    return "Continuar";
  }
}

function obtenerTextoBotonB(numEstado) {
  if (numEstado == 4) {
    return "B. Quedarse en el rancho a cuidar a los niños";
  } else if (numEstado == 7) {
    return "B. Intentar buscar ayuda con los vecinos";
  } else if (numEstado == 12) {
    return "B. Mandar a sus hijos a buscar ayuda";
  } else if (numEstado == 15) {
    return "B. Salir a buscar ayuda o refugio";
  } else if (numEstado == 18) {
    return "B. Utilizar los envases para señales de humo";
  } else {
    return "";
  }
}

function crearBoton(numEstado) {
  let btn1 = obtenerTextoBotonA(numEstado);
  let btn2 = obtenerTextoBotonB(numEstado);

  if (btn2 !== "") {
    dibujarBotonIndividual(btn1, 210, 415, 320, 30);
    dibujarBotonIndividual(btn2, 590, 415, 320, 30);
  } else if (btn1 !== "") {
    dibujarBotonIndividual(btn1, 400, 415, 220, 30);
  }
}

function dibujarBotonIndividual(txt, x, y, ancho, alto) {
  if (colisionBoton(x, y, ancho, alto)) {
    fill(70, 100, 160, 220); 
  } else {
    fill(15, 20, 30, 200);   
  }

  stroke(100, 200); 
  strokeWeight(1.5);
  rectMode(CENTER);
  rect(x, y, ancho, alto, 5);

  noStroke();
  fill(255);
  textSize(12);
  textAlign(CENTER, CENTER);
  text(txt, x, y);
}

function colisionBoton(x, y, ancho, alto) {
  if (mouseX > x - ancho / 2 && mouseX < x + ancho / 2 &&
      mouseY > y - alto / 2 && mouseY < y + alto / 2) {
    return true;
  } else {
    return false;
  }
}

function mostrarCajaYTexto(numEstado) {
  let baseY = 280;
  let baseX = 0;

  stroke(100, 200);
  strokeWeight(2);
  fill(15, 20, 30, 210); 
  rectMode(CORNER);
  rect(baseX + posXText, baseY + posYText, 800, 110);

  let tx = 30 + baseX + posXText;
  let ty = 295 + baseY + posYText - 280;
  let mensaje = textos[numEstado] || "";

  dibujarTextoConSombra(mensaje, tx, ty, 740, 80);
}

function actualizarAnimacion() {
  if (opacidad < 255) {
    opacidad += 15;
    if (opacidad > 255) opacidad = 255;
  }

  if (posXText > 0) {
    posXText -= 4;
    if (posXText < 0) posXText = 0;
  }

  if (posYText > 0) {
    posYText -= 1;
    if (posYText < 0) posYText = 0;
  }
}

function dibujarTextoConSombra(cadena, x, y, ancho, alto) {
  noStroke();
  textSize(14);
  textLeading(22);
  textAlign(LEFT, TOP);

  fill(0, opacidad);
  text(cadena, x + 2, y, ancho, alto);
  text(cadena, x - 2, y, ancho, alto);
  text(cadena, x, y + 2, ancho, alto);
  text(cadena, x, y - 2, ancho, alto);

  fill(255, opacidad);
  text(cadena, x, y, ancho, alto);
}

function mousePressed() {
  let estadoAnterior = estado;

  if (estado >= 0 && estado <= 3) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado++;
    }
  } 
  else if (estado == 4) {
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 5; // a
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 6; // b
    }
  } 
  else if (estado == 5) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 6; 
    }
  }
  else if (estado == 6) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 7;
    }
  }
  else if (estado == 7) {
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 8;  // a
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 9;  // b
    }
  } 
  else if (estado == 8) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 10;
    }
  }
  else if (estado == 9) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 10;
    }
  }
  else if (estado == 10) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 11;
    }
  }
  else if (estado == 11) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 12;
    }
  }
  else if (estado == 12) {
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 13; // a
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 14; // b
    }
  } 
  else if (estado == 13) { 
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 0;
    }
  }
  else if (estado == 14) { 
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 15;
    }
  }
  else if (estado == 15) { 
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 16; // a
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 20; // b
    }
  } 
  else if (estado == 16) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 17;
    }
  }
  else if (estado == 17) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 18;
    }
  }
  else if (estado == 18) { 
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 19; 
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 20; 
    }
  } 
  else if (estado == 19 || estado == 20) { 
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 0;
    }
  }

  if (estado !== estadoAnterior) {
    opacidad = 0;
    posXText = 80;
    posYText = 20;
  }
}
