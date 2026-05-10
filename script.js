// Particles
const pc = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.top = Math.random() * 100 + '%';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDelay = Math.random() * 5 + 's';
  const s = Math.random() * 4 + 2;
  p.style.width = s + 'px'; p.style.height = s + 'px';
  pc.appendChild(p);
}

// Clock
function tick() {
  const d = new Date();
  document.getElementById('clock').textContent =
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}
tick(); setInterval(tick, 1000);

// Windows
const overlay = document.getElementById('overlay');
function openWindow(name) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
  const w = document.getElementById('win-' + name);
  if (w) { w.classList.add('active'); overlay.classList.add('active'); }
  document.getElementById('startMenu').classList.remove('active');
  document.getElementById('startBtn').classList.remove('active');
}
function closeAll() {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
  overlay.classList.remove('active');
}
document.querySelectorAll('[data-window]').forEach(b =>
  b.addEventListener('click', () => openWindow(b.dataset.window))
);
document.querySelectorAll('[data-close]').forEach(b =>
  b.addEventListener('click', closeAll)
);
overlay.addEventListener('click', closeAll);

// Start menu
const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');
startBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  startMenu.classList.toggle('active');
  startBtn.classList.toggle('active');
});
document.addEventListener('click', (e) => {
  if (!startMenu.contains(e.target) && e.target !== startBtn) {
    startMenu.classList.remove('active');
    startBtn.classList.remove('active');
  }
});
