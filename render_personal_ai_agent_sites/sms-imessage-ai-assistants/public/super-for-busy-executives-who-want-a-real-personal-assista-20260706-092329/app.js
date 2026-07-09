(function(){
  try {
    if(!window.gsap) return;
    gsap.registerPlugin(window.ScrollTrigger || {});
    gsap.from('.hero h1',{y:20,opacity:0,duration:.8,ease:'power3.out'});
    gsap.from('.hero-sub',{y:20,opacity:0,duration:.8,delay:.1,ease:'power3.out'});
    gsap.utils.toArray('.compare-card').forEach(function(card){
      gsap.from(card,{scrollTrigger:{trigger:card,start:'top 80%'},y:24,opacity:0,duration:.6,ease:'power3.out'});
    });
  } catch(e) {}
})();