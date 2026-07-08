const revealItems = document.querySelectorAll('.tile, .accordion article, .guide section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.dataset.visible = 'true';
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = `translateY(${20 + (index % 4) * 6}px)`;
  item.style.transition = 'opacity 720ms ease, transform 720ms ease';
  revealObserver.observe(item);
});

document.addEventListener('scroll', () => {
  revealItems.forEach((item) => {
    if (item.dataset.visible === 'true') {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}, { passive: true });
