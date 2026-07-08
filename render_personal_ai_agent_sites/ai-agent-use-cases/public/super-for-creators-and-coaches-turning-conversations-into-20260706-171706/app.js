(function(){
  try {
    if (!window.gsap) {
      var s = document.createElement('script');
      s.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
      s.onload = init;
      document.head.appendChild(s);
    } else { init(); }
    function init(){
      if (!window.gsap) return;
      gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8 });
      gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.1 });
      gsap.utils.toArray('.bento-item').forEach(function(el){
        gsap.from(el, { scrollTrigger: el, y: 24, opacity: 0, duration: 0.6 });
      });
    }
  } catch(e){}
})();