const elements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  elements.forEach(el => {
    const speed = el.dataset.speed;
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
