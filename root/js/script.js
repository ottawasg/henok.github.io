const inputLine = document.querySelector('.input-line');
const hiddenInput = document.getElementById('hidden-input');
const typedText = document.getElementById('typed-text');
const terminalWrapper = document.querySelector('.terminal-wrapper');

// Fokuskan input saat klik area input-line
inputLine.addEventListener('click', () => {
  hiddenInput.focus();
});

// Update teks saat diketik
hiddenInput.addEventListener('input', () => {
  typedText.textContent = hiddenInput.value;
});

// Fokus otomatis saat halaman dimuat
window.addEventListener('load', () => {
  hiddenInput.focus();
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
