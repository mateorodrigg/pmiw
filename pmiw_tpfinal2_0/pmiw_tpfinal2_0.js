// Integrantes: Mateo Rodríguez y Juan Mendoza Tamalet
// Trabajo Práctico: El Desierto, de Horacio Quiroga 

let estado = 0;
let textos = [];

// Variables de animación de texto
let opacidad = 0;
let posXText = 80;
let posYText = 20;

function preload() {
  textos = loadStrings("textos.txt");
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(25);

  actualizarAnimacion();


  if (estado >= 0 && estado <= 21) {
    dibujarPantalla(estado);
  }
}

function dibujarPantalla(numEstado) {
  mostrarCajaYTexto(numEstado);
  crearBoton(numEstado);
}


function obtenerTextoBotonA(numEstado) {
  if (numEstado == 0) {
    return "Comenzar";
  } else if (numEstado == 5) {
    return "A. Salir en la canoa desafiando el clima";
  } else if (numEstado == 8) {
    return "A. Intentar preparar comida para sus hijos";
  } else if (numEstado == 13) {
    return "A. Enseñar a protegerse y comunicarse el uno con el otro";
  } else if (numEstado == 16) {
    return "A. Quedarse y racionar";
  } else if (numEstado == 19) {
    return "A. Tapar las goteras con envases de plastico";
  } else if (numEstado == 14 || numEstado == 20 || numEstado == 21) {
    return "Reiniciar";
  } else {
    return "Continuar";
  }
}

function obtenerTextoBotonB(numEstado) {
  if (numEstado == 5) {
    return "B. Quedarse en el rancho a cuidar a los niños";
  } else if (numEstado == 8) {
    return "B. Intentar buscar ayuda para no morir y no dejarlos solos";
  } else if (numEstado == 13) {
    return "B. Mandar a sus hijos a buscar ayuda";
  } else if (numEstado == 16) {
    return "B. Salir a la selva a buscar alguien que los refugie";
  } else if (numEstado == 19) {
    return "B. Utilizar los envases para hacer señales de humo";
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
    fill(70, 100, 160);
  } else {
    fill(40, 50, 75);
  }

  stroke(255);
  strokeWeight(1);
  rectMode(CENTER);
  rect(x, y, ancho, alto, 5);

  noStroke();
  fill(255);
  textSize(12);
  textAlign(CENTER, CENTER);
  text(txt, x, y);
}

function colisionBoton(x, y, ancho, alto) {
  return (mouseX > x - ancho / 2 && mouseX < x + ancho / 2 &&
          mouseY > y - alto / 2 && mouseY < y + alto / 2);
}


function mostrarCajaYTexto(numEstado) {
  let baseY = 280;
  let baseX = 0;

  stroke(100);
  strokeWeight(2);
  fill(15, 20, 30);
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


  if (estado >= 0 && estado <= 4) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado++;
    }
  } 
  // decision 1
  else if (estado == 5) {
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 6; // A: Salir en la canoa
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 7; // B: Quedarse en el rancho
    }
  } 

  else if (estado == 6) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 7;
    }
  }
  else if (estado == 7) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 8;
    }
  }
  // decision 2
  else if (estado == 8) {
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 9;  // a
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 10; // b
    }
  } 

  else if (estado == 9 || estado == 10) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 11;
    }
  } 
  else if (estado == 11 || estado == 12) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado++;
    }
  } 
  // decision 3
  else if (estado == 13) {
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 14; // a
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 15; // b
    }
  } 
  // final 1 
  else if (estado == 14) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 0;
    }
  } 
  // nenes
  else if (estado == 15) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 16;
    }
  } 
  // decision 4
  else if (estado == 16) {
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 17; // a
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 21; // b
    }
  } 
  
  else if (estado == 17 || estado == 18) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado++;
    }
  } 
  // decision 5
  else if (estado == 19) {
    if (colisionBoton(210, 415, 320, 30)) {
      estado = 20; 
    } else if (colisionBoton(590, 415, 320, 30)) {
      estado = 21; 
    }
  } 
  // finales 2 y 3
  else if (estado == 20 || estado == 21) {
    if (colisionBoton(400, 415, 220, 30)) {
      estado = 0;
    }
  }

  // reinicio de animacion
  if (estado !== estadoAnterior) {
    opacidad = 0;
    let tipoAnim = estado % 4;
    if (tipoAnim === 0 || tipoAnim === 2) {
      posYText = 20;
      posXText = 0;
    } else {
      posXText = 80;
      posYText = 0;
    }
  }
}
