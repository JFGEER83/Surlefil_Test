window.addEventListener('scroll', function(){
  let header = document.querySelector("header")
  if(this.window.scrollY>250){
    header.classList.add("scroll-active")
  }
  else{
    header.classList.remove("scroll-active");
  }
});  