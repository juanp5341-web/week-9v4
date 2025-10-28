// Mark JS-enabled to allow CSS fade-ins (but keep content visible without JS)
document.documentElement.classList.add('js');

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll (enhancement)
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();
