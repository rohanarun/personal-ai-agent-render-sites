(function () {
  "use strict";

  var progress = document.querySelector(".reading-progress");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateProgress() {
    if (!progress) return;
    var available = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = available > 0 ? window.scrollY / available : 0;
    progress.style.width = Math.min(100, Math.max(0, ratio * 100)) + "%";
  }

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

  if (reducedMotion || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".site-nav", { y: -28, opacity: 0, duration: 0.75, ease: "power3.out" });
  gsap.from(".hero-copy > *", { y: 36, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });
  gsap.fromTo(
    ".hero-media",
    { scale: 0.82, opacity: 0.4 },
    {
      scale: 1,
      opacity: 1,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top 92%", end: "bottom 36%", scrub: true }
    }
  );
  gsap.to(".marquee-track", { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
  gsap.utils.toArray(".fact-card").forEach(function (card, index) {
    gsap.from(card, {
      y: 42,
      opacity: 0,
      duration: 0.75,
      delay: index * 0.03,
      scrollTrigger: { trigger: card, start: "top 88%" }
    });
  });
  if (window.innerWidth > 980) {
    ScrollTrigger.create({
      trigger: ".article-layout",
      start: "top 112px",
      end: "bottom 78%",
      pin: ".article-rail",
      pinSpacing: false
    });
  }
})();
