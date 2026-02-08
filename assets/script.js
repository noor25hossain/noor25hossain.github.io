// Smooth scroll for same-page anchors
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

// Optional: highlight active nav link on scroll (only for sections on index)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', ()=>{
  let cur = null;
  sections.forEach(s=>{
    const top = s.getBoundingClientRect().top;
    if(top <= 120) cur = s.id;
  });
  if(!cur) return;
  navLinks.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#'+cur);
  });
});
