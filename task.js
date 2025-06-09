const boxes = document.querySelectorAll('.bundle-box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => {
      b.classList.remove('active');
      b.querySelector('.bundle-header').setAttribute('aria-expanded', 'false');
    });
    box.classList.add('active');
    box.querySelector('input[type="radio"]').checked = true;
    box.querySelector('.bundle-header').setAttribute('aria-expanded', 'true');
  });
});
