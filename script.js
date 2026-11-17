// Ejercicio 3.1.2.

const canvas = document.getElementById("miCanvas");
const contexto = canvas.getContext("2d");

// Ejercicio 3.1.3. Dibujando figuras geométricas
// Dibujar un rectángulo 
contexto.fillStyle = "blue";
contexto.fillRect(50, 50, 120, 70);

// Dibujar un círculo 
contexto.beginPath();
contexto.arc(250, 85, 35, 0, Math.PI * 2);
contexto.fillStyle = "orange";
contexto.fill();

// Dibujar una línea
contexto.beginPath();
contexto.moveTo(350, 50);
contexto.lineTo(450, 120);
contexto.strokeStyle = "pink";
contexto.lineWidth = 4;
contexto.stroke();

// Ejercicio 3.1.4 Incorporando texto 
contexto.fillStyle = "darkgreen";
contexto.font = "24px Verdana";
contexto.fillText("Vivero Blanquita", 50, 200);

// Colocando mi nombre 
contexto.fillStyle = "darkgreen";
contexto.font = "24px Verdana";
contexto.fillText("Yazmin Reyes López", 50, 230);

// Ejercicio 3.1.5. Modificando un gráfico
contexto.fillStyle = "purple";
contexto.fillRect(50, 50, 120, 70);

// 6. Práctica principal: Una planta en crecimiento
// 1. Obtener el Canvas y preparar el contexto
const canvasPlanta = document.getElementById("canvasPlanta");
const ctx = canvasPlanta.getContext("2d");

// 2. Función para dibujar la planta
function dibujarPlanta(tiempo) {
    // Limpiar el dibujo anterior
    ctx.clearRect(0, 0, 600, 300);
    // Dibujar el sol
    let radioSol = 25 + Math.sin(tiempo / 500) * 5;
    ctx.beginPath();
    ctx.arc(100, 100, radioSol, 0, Math.PI * 2);
    ctx.fillStyle = "orange";
    ctx.fill();

    // Dibujar la maceta
    ctx.fillStyle = "#b77fc1";
    ctx.fillRect(240, 210, 120, 60);
    // Dibujar el borde de la maceta
    ctx.fillStyle = "#5d138b";
    ctx.fillRect(230, 205, 140, 12);
    // Dibujar el tallo
    ctx.beginPath();
    ctx.moveTo(300, 210);
    ctx.lineTo(300, 105);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 7;
    ctx.stroke();
    // Dibujar una hoja izquierda
    ctx.beginPath();
    ctx.ellipse(275, 150, 25, 12, -0.5, 0, Math.PI * 2);
    ctx.fillStyle = "#4caf50";
    ctx.fill();
    // Dibujar una hoja derecha
    ctx.beginPath();
    ctx.ellipse(325, 125, 25, 12, 0.5, 0, Math.PI * 2);
    ctx.fillStyle = "#2e8b57";
    ctx.fill();
    // Dibujar el texto
    ctx.fillStyle = "#38245c";
    ctx.font = "22px Arial";
    ctx.fillText("Vivero Yazcecita", 30, 45);
    ctx.font = "16px Arial";
    ctx.fillText("Cuidamos el crecimiento de tus plantitas <3", 30, 75);

    // Solicitar el siguiente cuadro de animación 
    requestAnimationFrame(dibujarPlanta);
}

// 3. Iniciar la animación 

requestAnimationFrame(dibujarPlanta);

// RETO INDIVIDUAL
// 1. Obtener el Canvas y preparar el contexto
const canvasArbol = document.getElementById("canvasArbol");
const contex = canvasArbol.getContext("2d");

// 2. Función para dibujar el árbol
function dibujarArbol(tiempo) {
    // Limpiar el dibujo anterior
    contex.clearRect(0, 0, 600, 300);
    //animación
    let viento = Math.sin(tiempo / 500) * 4;
    // Dibujar el sol
    let radioSol = 25 + Math.sin(tiempo / 500) * 5;
    contex.beginPath();
    contex.arc(520, 60, radioSol, 0, Math.PI * 2);
    contex.fillStyle = "orange";
    contex.fill();

    // Dibujar el piso
    contex.fillStyle = "#808080";
    contex.fillRect(10, 205, 580, 90);

    // Dibujar la maceta
    contex.fillStyle = "#b77fc1";
    contex.fillRect(240, 210, 140, 85);
    // Dibujar el borde de la maceta
    contex.fillStyle = "#5d138b";
    contex.fillRect(230, 205, 160, 14);
    // Dibujar el tallo
    contex.beginPath();
    contex.moveTo(305, 210);
    contex.lineTo(305, 100);
    contex.strokeStyle = "rgb(69, 48, 48)";
    contex.lineWidth = 35;
    contex.stroke();

    // Dibujar una hoja 
    contex.beginPath();
    contex.arc(250 + viento, 75, 35, 0, Math.PI * 2);
    contex.fillStyle = "#2f533f";
    contex.fill();
    // Dibujar una hoja 
    contex.beginPath();
    contex.arc(230 + viento, 76, 15, 0, Math.PI * 2);
    contex.fillStyle = "#5b7e63";
    contex.fill();
    // Dibujar una hoja
    contex.beginPath();
    contex.arc(305 + viento, 65, 35, 0, Math.PI * 2);
    contex.fillStyle = "#329741";
    contex.fill();
    // Dibujar una hoja 
    contex.beginPath();
    contex.arc(310 + viento, 68, 15, 0, Math.PI * 2);
    contex.fillStyle = "#5b7e63";
    contex.fill();
    // Dibujar 3era hoja 
    contex.beginPath();
    contex.arc(350 + viento, 75, 35, 0, Math.PI * 2);
    contex.fillStyle = "#2f533f";
    contex.fill();
    // Dibujar una hoja 
    contex.beginPath();
    contex.arc(373 + viento, 80, 15, 0, Math.PI * 2);
    contex.fillStyle = "#5b7e63";
    contex.fill();
    // Dibujar 4ta hoja 
    contex.beginPath();
    contex.arc(200 + viento, 105, 35, 0, Math.PI * 2);
    contex.fillStyle = "#2f533f";
    contex.fill();
    // Dibujar una hoja 
    contex.beginPath();
    contex.arc(210 + viento, 115, 15, 0, Math.PI * 2);
    contex.fillStyle = "#5b7e63";
    contex.fill();
    // Dibujar 5ta hoja 
    contex.beginPath();
    contex.arc(250 + viento, 105, 35, 0, Math.PI * 2);
    contex.fillStyle = "#329741";
    contex.fill();
    // Dibujar una hoja 
    contex.beginPath();
    contex.arc(255 + viento, 105, 15, 0, Math.PI * 2);
    contex.fillStyle = "#5b7e63";
    contex.fill();

    // Dibujar 6ta hoja 
    contex.beginPath();
    contex.arc(300 + viento, 105, 35, 0, Math.PI * 2);
    contex.fillStyle = "#2f533f";
    contex.fill();
    // Dibujar una hoja 
    contex.beginPath();
    contex.arc(305 + viento, 105, 15, 0, Math.PI * 2);
    contex.fillStyle = "#5b7e63";
    contex.fill();
    // Dibujar 7tima hoja 
    contex.beginPath();
    contex.arc(350 + viento, 105, 35, 0, Math.PI * 2);
    contex.fillStyle = "#329741";
    contex.fill();
    // Dibujar una hoja 
    contex.beginPath();
    contex.arc(362 + viento, 100, 15, 0, Math.PI * 2);
    contex.fillStyle = "#5b7e63";
    contex.fill();
    // Dibujar 8tava
    contex.beginPath();
    contex.arc(400 + viento, 105, 35, 0, Math.PI * 2);
    contex.fillStyle = "#2f533f";
    contex.fill();
    // Dibujar 9na
    contex.beginPath();
    contex.arc(240 + viento, 135, 35, 0, Math.PI * 2);
    contex.fillStyle = "#2f533f";
    contex.fill();
    // Dibujar 10
    contex.beginPath();
    contex.arc(290 + viento, 135, 35, 0, Math.PI * 2);
    contex.fillStyle = "#329741";
    contex.fill();
    // Dibujar 11
    contex.beginPath();
    contex.arc(330 + viento, 135, 35, 0, Math.PI * 2);
    contex.fillStyle = "#2f533f";
    contex.fill();
    // Dibujar 12
    contex.beginPath();
    contex.arc(370 + viento, 135, 35, 0, Math.PI * 2);
    contex.fillStyle = "#329741";
    contex.fill();
    // HOJAS TIRADAS
    contex.beginPath();
    contex.ellipse(500, 275, 20, 10, -0.10, 0, Math.PI * 2);
    contex.fillStyle = "#329741";
    contex.fill();
    // HOJAS TIRADAS
    contex.beginPath();
    contex.ellipse(470, 270, 20, 10, 0.15, 0, Math.PI * 2);
    contex.fillStyle = "#2f533f";
    contex.fill();
    // HOJA FLOTANDO
    contex.beginPath();
    contex.ellipse(465, 150, 20, 10, 0.35, 0, Math.PI * 2);
    contex.fillStyle = "#5b7e63";
    contex.fill();
    // Dibujar el texto
    contex.fillStyle = "#38245c";
    contex.font = "22px Arial";
    contex.fillText("Vivero Yazcecita", 30, 45);
    contex.font = "16px Arial";
    contex.fillText("Cuidamos el", 30, 75);
    contex.fillText("crecimiento de tus", 30, 95);
    contex.fillText("arbolitos <3", 30, 115);

    // Solicitar el siguiente cuadro de animación 
    requestAnimationFrame(dibujarArbol);
}

// 3. Iniciar la animación 

requestAnimationFrame(dibujarArbol);