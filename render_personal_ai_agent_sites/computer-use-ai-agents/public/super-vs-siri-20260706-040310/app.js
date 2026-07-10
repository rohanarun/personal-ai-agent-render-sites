(function(){
  try {
    if (!window.gsap) return;
    gsap.registerPlugin(window.ScrollTrigger || {});
    gsap.from('.hero h1', { y: 24, opacity: 0, duration: .8, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 24, opacity: 0, duration: .8, delay: .1, ease: 'power3.out' });
    gsap.utils.toArray('.compare-card').forEach(function(card){
      gsap.from(card, { scrollTrigger: { trigger: card, start: 'top 80%' }, y: 20, opacity: 0, duration: .6, ease: 'power3.out' });
    });
  } catch (e) {}
})();

/* super-agent-page-refresh:start */
(function () {
  const refreshSections = Array.from(document.querySelectorAll('.super-refresh'));
  if (!refreshSections.length) return;
  if (window.gsap) {
    refreshSections.forEach((section) => {
      const image = section.querySelector('.super-refresh__image');
      const headings = section.querySelectorAll('.super-refresh__article h2');
      window.gsap.fromTo(section, { opacity: 0.75, y: 48 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: window.ScrollTrigger ? { trigger: section, start: 'top 80%' } : undefined });
      if (image) window.gsap.fromTo(image, { scale: 0.92 }, { scale: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: window.ScrollTrigger ? { trigger: image, start: 'top 82%', scrub: true } : undefined });
      headings.forEach((heading) => window.gsap.fromTo(heading, { opacity: 0.2 }, { opacity: 1, duration: 0.8, scrollTrigger: window.ScrollTrigger ? { trigger: heading, start: 'top 86%', scrub: true } : undefined }));
    });
  }
})();
/* super-agent-page-refresh:end */
