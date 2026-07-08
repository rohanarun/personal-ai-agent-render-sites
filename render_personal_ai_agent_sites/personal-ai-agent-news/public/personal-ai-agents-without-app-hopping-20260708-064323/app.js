const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.18 });

cards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = `translateY(${24 + index * 4}px)`;
  card.style.transition = 'opacity 700ms ease, transform 700ms ease, background 500ms ease';
  observer.observe(card);
});
