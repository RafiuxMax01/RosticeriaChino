const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Control del menú hamburguesa
burger.addEventListener('click', () => {
  navLinks.style.display =
    navLinks.style.display === 'block' ? 'none' : 'block';
});

// Cerrar menú al hacer clic en un enlace (móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navLinks.style.display = 'none';
    }
  });
});

/* LÓGICA DEL MODAL */
const paquetes = document.querySelectorAll('.paquete');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeModal = document.getElementById('close-modal');

paquetes.forEach(paquete => {
  paquete.addEventListener('click', () => {
    modalTitle.textContent = paquete.dataset.title;
    modalText.textContent = paquete.dataset.info;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});