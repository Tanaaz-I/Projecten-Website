
// Mobile nav
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger) {
  burger.addEventListener('click', () => nav.classList.toggle('open'));
}

// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Mouse parallax for the hero preview
const prev = document.querySelector('.preview');
if (prev) {
  prev.addEventListener('mousemove', (e)=>{
    const r = prev.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    prev.style.transform = `translateY(${y*6}px) rotateX(${y*3}deg) rotateY(${x*-3}deg)`;
  });
  prev.addEventListener('mouseleave', ()=>{
    prev.style.transform = '';
  });
}

// Set year
const y = document.querySelector('#year');
if (y) y.textContent = new Date().getFullYear();
