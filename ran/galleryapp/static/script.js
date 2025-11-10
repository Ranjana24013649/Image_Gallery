const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalTextContent = document.getElementById('modalTextContent');
const closeModal = document.getElementById('closeModal');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title');
    const info = item.getAttribute('data-info');
    modalTextContent.innerHTML = `
      <h2>${title}</h2>
      <p>${info}</p>
    `;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalTextContent.innerHTML = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalTextContent.innerHTML = '';
  }
});