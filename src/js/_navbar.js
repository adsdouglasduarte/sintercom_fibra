const nav = document.querySelector('.nav__geral');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

console.log('Navbar sroll carregada com sucesso.');
