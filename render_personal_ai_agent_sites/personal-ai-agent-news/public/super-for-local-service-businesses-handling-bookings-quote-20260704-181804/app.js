(function(){
  try {
    if (!window.gsap) return;
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
    gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
    gsap.from('.media-frame', { y: 30, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });
    gsap.utils.toArray('.compare-card, .bento-item').forEach(function(el){
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 80%' },
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    });
  } catch (e) {
    /* animations optional */
  }
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
