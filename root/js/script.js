const inputLine = document.querySelector('.input-line');
const hiddenInput = document.getElementById('hidden-input');
const typedText = document.getElementById('typed-text');
const terminalWrapper = document.querySelector('.terminal-wrapper');

// Fokus ke input saat klik
inputLine.addEventListener('click', () => {
  hiddenInput.focus();
});

// Tampilkan teks yang diketik
hiddenInput.addEventListener('input', () => {
  typedText.textContent = hiddenInput.value;
});

// Fokus otomatis dan pusatkan box saat load
window.addEventListener('load', () => {
  hiddenInput.focus();

  const rect = terminalWrapper.getBoundingClientRect();
  const centerX = window.innerWidth / 2 - rect.width / 2;
  const centerY = window.innerHeight / 2 - rect.height / 2;

  terminalWrapper.style.left = `${centerX}px`;
  terminalWrapper.style.top = `${centerY}px`;
});

// ==== DRAG FUNCTION ====
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

terminalWrapper.addEventListener('mousedown', (e) => {
  if (!e.target.closest('.terminal-title') && !e.target.closest('.menu-bar')) return;

  const rect = terminalWrapper.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  isDragging = true;
  terminalWrapper.classList.add('dragging');

  e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const newX = e.clientX - offsetX;
  const newY = e.clientY - offsetY;

  terminalWrapper.style.left = `${newX}px`;
  terminalWrapper.style.top = `${newY}px`;
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    terminalWrapper.classList.remove('dragging');
  }
});
