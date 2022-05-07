// ----------------navbar------------------------
const navbarToggler = document.querySelector('[data-navbar-toggler]');
const mobileNavbarToggler = document.querySelector('[data-mobile-navbar-toggle]');
const navbarNav = document.querySelector('[data-navbar-nav]');
const body = document.querySelector('body');
const moblieNavLinks = document.querySelectorAll('[data-mobile-nav-links');

navbarToggler.addEventListener('click', ()=>{
    body.classList.add('mobile-menu-open');
});
mobileNavbarToggler.addEventListener('click', ()=>{
    body.classList.remove('mobile-menu-open');
});
moblieNavLinks.forEach((link) =>{
  link.addEventListener('click', () =>{
    body.classList.remove('mobile-menu-open');
  })
});
// ----------------parallax-------------------
const parallaxShapes = document.querySelectorAll('[data-parallax-shape]');

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('[data-parallax-shape]').forEach((shift) => {
    const position = shift.getAttribute("data-value");
    const x = (window.innerWidth - e.pageX * position) / 90;
    const y = (window.innerHeight - e.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
//-------------------dark and light mode btn------------------------
const darkModeBtn = document.querySelector('[data-dark-mode-btn]');
const webNavLogo = document.querySelector('[data-website-nav-logo');
const webFooterLogo = document.querySelector('[data-website-footer-logo');

darkModeBtn.addEventListener('click', () =>{
    darkModeBtn.classList.toggle('light_mode_active');

    if(darkModeBtn.classList.contains('light_mode_active')){
      body.classList.add('light_mode');
      webNavLogo.src='./img/Untitled-4.png';
      webFooterLogo.src='./img/Untitled-4.png';
    }else{
      body.classList.remove('light_mode');
      webNavLogo.src='./img/Untitled-3.png';
      webFooterLogo.src='./img/Untitled-3.png';
    }
});
//-------------------------animation on scroll-----------------------
AOS.init({
  once: true,
  duration: 2000
});