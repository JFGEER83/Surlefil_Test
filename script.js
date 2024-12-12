// Scroll Effect
window.addEventListener('scroll', function(){
  let header = document.querySelector("header")
  if(this.window.scrollY>250){
    header.classList.add("scroll-active")
  }
  else{
    header.classList.remove("scroll-active");
  }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', 
                nav.classList.contains('active'));
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav && nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Prevent FOUC (Flash of Unstyled Content)
document.documentElement.classList.add('js-loaded');