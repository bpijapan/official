const header = document.querySelector('.site-header');
const video = document.getElementById('heroVideo');
const soundToggle = document.getElementById('soundToggle');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 28);
});

document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal-on-load').forEach((el) => el.classList.add('is-visible'));
  });
});

if (soundToggle && video) {
  soundToggle.addEventListener('click', async () => {
    if (video.muted) {
      video.muted = false;
      video.currentTime = 0;
      try { await video.play(); } catch (e) {}
      soundToggle.textContent = '音声OFF';
    } else {
      video.muted = true;
      soundToggle.textContent = '音ありで再生';
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
