// Integrantes: Mateo Rodríguez y Juan Mendoza Tamalet

let pantallaActual = 0;

// arreglo con los textos
let textos = [
  "El Desierto, de Horacio Quiroga\nEl desierto es una historia sobre la soledad, la enfermedad y la implacable lucha de un hombre por proteger a sus hijos en medio de la selva.", 
  "Tras la muerte de su esposa, Subercasaux vive solo en un rancho en la selva misionera junto a sus dos hijos pequeños.", 
  "El clima húmedo y los piques se propagan. La infección en su pie empeora y, sin poder descansar, la herida se agrava.", 
  "Las lluvias aíslan el rancho. Necesita ayuda médica urgente para tratar la infección, pero salir es una locura.", 
  "¿Que hacer?", // 4
  "A pesar del mal tiempo, decide salir. La lluvia, el viento y la corriente dificultan el viaje. Tras horas de esfuerzo, no consigue lo que necesita.", 
  "Al día siguiente, despierta con escalofríos. El dolor en el pie ha desaparecido de golpe, pero siente que las fuerzas le fallan de manera extraña.", 
  "¿Cómo priorizar las pocas fuerzas que le quedan?", 
  "Se arrastra hasta la cocina y logra dejarles algo de comida a sus hijos, gastando sus últimas reservas de energía.", 
  "Da unos pasos fuera de la cama, pero el veneno del pie no le permite seguir camino, provocando un derrumbe casi instantáneo.", 
  "El veneno se expande por su cuerpo y lo deja postrado. Delira y pierde la conciencia.", 
  "Con poca fuerza, intenta levantarse, pero cae. Sabe que ya no puede hacer más.", 
  "¿De qué forma usa el poco tiempo de vida que le queda a Subercasaux?", 
  "Subercasaux fallece, dejando a los niños solos. Con conocimientos muy básicos.\n[FINAL VERDADERO 1]", 
  "Subercasaux fallece, dejando a los niños solos. Con conocimientos muy básicos, por lo que estos tendrán que tomar sus propias decisiones.", 
  "¿Qué camino deciden tomar los niños?", 
  "Luego de racionar las provisiones durante unos días, los niños quedan muy débiles por la poca ingesta.", 
  "Una lluvia intensa arrasó con el terreno, dejando la casa con muchas goteras, pérdidas y demasiada humedad.", 
  "Los niños deberán tomar una decisión muy compleja.", 
  "Logran frenar el avance del diluvio, pero nadie los socorre a tiempo. Fallecen de inanición.\n[FINAL VERDADERO 2]", 
  "Un grupo de ambientalistas se percatan que son dos niños. Estos son adoptados por una pareja del grupo.\n[FINAL VERDADERO 3]", 
  "Los niños salen a la selva en busca de refugio y ayuda, enfrentándose solos al peligro.", 
  "Tras caminar desorientados bajo la tormenta, encuentran finalmente el campamento y son rescatados." 
];


let pantallas = [
  [ 0, "Comenzar", 1, "", null ],                                    
  [ 1, "Continuar", 2, "", null ],                                    
  [ 2, "Continuar", 3, "", null ],                                    
  [ 3, "Continuar", 4, "", null ],                                    
  [ 4, "A. Salir en canoa", 5, "B. Quedarse en rancho", 6 ],          
  [ 5, "Continuar", 6, "", null ],                                    
  [ 6, "Continuar", 7, "", null ],                                    
  [ 7, "A. Preparar comida", 8, "B. Buscar ayuda", 9 ],                
  [ 8, "Continuar", 10, "", null ],                                  
  [ 9, "Continuar", 10, "", null ],                                    
  [ 10, "Continuar", 11, "", null ],                                  
  [ 11, "Continuar", 12, "", null ],                                   
  [ 12, "A. Enseñar a hijos", 13, "B. Mandar a buscar ayuda", 14 ],    
  [ 13, "Reiniciar", 0, "", null ],                                   
  [ 14, "Continuar", 15, "", null ],                                  
  [ 15, "A. Resistir provisiones", 16, "B. Salir a buscar ayuda", 21 ],
  [ 16, "Continuar", 17, "", null ],                                  
  [ 17, "Continuar", 18, "", null ],                                   
  [ 18, "A. Tapar goteras", 19, "B. Señales de humo", 20 ],            
  [ 19, "Reiniciar", 0, "", null ],                                   
  [ 20, "Reiniciar", 0, "", null ],                                   
  [ 21, "Continuar", 22, "", null ],                                   
  [ 22, "Reiniciar", 0, "", null ]                                     
];

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(25);

  let p = pantallas[pantallaActual];
  let idTexto = p[0];
  let btn1 = p[1];
  let btn2 = p[3];

  // Caja de texto 
  fill(15, 20, 30);
  stroke(100);
  strokeWeight(2);
  rect(0, 337.5, 800, 112.5);

  // texto 
  noStroke();
  fill(255);
  textSize(13);
  text(textos[idTexto], 20, 345, 760, 45);

  // botones 
  if (btn2 !== "") {
    dibujarBoton(btn1, 210, 415, 320, 35);
    dibujarBoton(btn2, 590, 415, 320, 35);
  } else if (btn1 !== "") {
    dibujarBoton(btn1, 400, 415, 220, 35);
  }
}

function dibujarBoton(txt, x, y, ancho, alto) {
  if (mouseX > x - ancho/2 && mouseX < x + ancho/2 && mouseY > y - alto/2 && mouseY < y + alto/2) {
    fill(70, 100, 160);
  } else {
    fill(40, 50, 75);
  }

  stroke(255);
  strokeWeight(1);
  rectMode(CENTER);
  rect(x, y, ancho, alto, 5);
  rectMode(CORNER);

  noStroke();
  fill(255);
  textSize(12);
  text(txt, x, y);
}

function mousePressed() {
  let p = pantallas[pantallaActual];
  let irA1 = p[2];
  let btn2 = p[3];
  let irA2 = p[4];

  if (btn2 !== "") {
    if (mouseX > 50 && mouseX < 370 && mouseY > 397 && mouseY < 432) {
      pantallaActual = irA1;
    }
    if (mouseX > 430 && mouseX < 750 && mouseY > 397 && mouseY < 432) {
      pantallaActual = irA2;
    }
  } else {
    if (mouseX > 290 && mouseX < 510 && mouseY > 397 && mouseY < 432) {
      pantallaActual = irA1;
    }
  }
}
