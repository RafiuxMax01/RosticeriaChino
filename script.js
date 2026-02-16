const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.style.display =
    navLinks.style.display === 'block' ? 'none' : 'block';
});

/* MODAL */
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

modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
