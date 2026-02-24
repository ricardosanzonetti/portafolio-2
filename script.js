// ===== MATRIX =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(1);

let matrixOpacity = 0.05; // fuerte al inicio

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0," + matrixOpacity + ")";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

// ===== TYPING FUNCTION =====
function typeText(element, text, speed, callback) {
  let i = 0;
  element.innerHTML = "";
  element.classList.add("typing-cursor");

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      setTimeout(callback, 800);
    }
  }

  typing();
}

// ===== SECUENCIA =====
const welcomeEl = document.getElementById("welcome");
const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const roleEl = document.getElementById("role");

// 1️⃣ WELCOME
typeText(welcomeEl, "WELCOME", 120, () => {

  setTimeout(() => {

    // Oculta intro
    intro.style.display = "none";

    // Muestra hero
    hero.style.display = "flex";

    // Matrix más sutil
    matrixOpacity = 0.20;

    // Escribe nombre + rol
    typeText(roleEl, "Ricardo Gómez, Software Developer", 90);

  }, 1500);

});