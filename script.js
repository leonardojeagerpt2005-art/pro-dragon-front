// Animación al hacer scroll
const elementos = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

// Interacción botón
function transformar() {
  const texto = document.getElementById("texto");
  texto.innerHTML = "🔥 ¡Super Saiyajin Activado! 🔥";
  texto.style.color = "yellow";
  texto.style.fontSize = "2rem";
  texto.style.transition = "0.5s";
}