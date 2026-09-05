let sprite = [];
let greenHill;
let hillAbajo;
let posX, posY;
let posXF, posYF;
let anchoTile;
let altoTile; 
let animar = 0;
let estado = 1;
let contador = 0;
let velocidad = 3;

function preload() {
  for (let i = 0; i < 55; i++) {
    sprite[i] = loadImage("data/" + i + ".png");
  }
  greenHill = loadImage("data/56.png");
  hillAbajo = loadImage("data/57.png");
}

function setup() {
  createCanvas(800, 600);
  posX = width / 10;
  posY = 370;
  posXF = 0;
  posYF = 200;
  anchoTile = hillAbajo.width;
  altoTile = hillAbajo.height;
}

function draw() {
  background(9, 133, 158);
  contador++;

  // ESTADO 1
  
  if (estado === 1) {
    animarAccion(38, 48);

    if (contador >= 180) {
      estado++;     // pase
      contador = 0; // reinicio
    }
  } 
  
  // ESTADO 2
  
  else if (estado === 2) {
    animarAccion(49, 52);
    if (animar >= 51) {
      posY -= 5; 
    }
    if (contador >= 40) {
      estado++;     
      contador = 0; 
    }
  }
  // ESTADO 3
  
  else if (estado === 3) {
    animar = 52; 
    posX += 1;
    posY += 1.5;
    if (contador >= 60) {
      estado++;     
      contador = 0;
      animar = 12;  
    }
  }
  
  // ESTADO 4
  
  else if (estado === 4) {
    animarCorrer(12, 30, 37);
    posY = 360;
    posX += velocidad;
    if (posX > width) {
      posX = -10;
      velocidad = calcularSiguienteVelocidad(velocidad, 0.5);
    }
  } 
  
// fondo
  image(greenHill, posXF, posYF, 800);

  for (let x = 0; x < width; x += anchoTile) {
    for (let y = posYF + 254; y < height; y += altoTile) {
      image(hillAbajo, x, y);
    }
  }
  
  image(sprite[animar], posX, posY); // sprites
}

// Función que retorna un valor
function calcularSiguienteVelocidad(velActual, incremento) {
  return velActual + incremento;
}

// Funcion  que no retorna valor
function animarAccion(frameInicio, frameFin) {
  if (animar < frameInicio || animar > frameFin) {
    animar = frameInicio;
  }
  
  if (frameCount % 12 === 0) {
    animar++;
    if (animar > frameFin) {
      animar = frameInicio; 
    }
  }
} 
//funcion que no retorna valo utilizada cuando corre (cambia la velocidad del incremento de frames)
function animarCorrer(frameInicio, frameBucle, frameFin) {
  if (animar < frameInicio || animar > frameFin) {
    animar = frameInicio;
  }

  if (frameCount % 6 === 0) {
    if (animar === frameFin) {
      animar = frameBucle; 
    } else {
      animar++;            
    }
  }
}

// Reinicia el programa 
function keyPressed() {
  if (key === 'r' || key === 'R') {
    estado = 1;
    contador = 0;
    animar = 0;
    velocidad = 3;
    posX = width / 10;
    posY = 370;
  }
}
