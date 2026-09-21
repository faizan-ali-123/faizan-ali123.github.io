const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>navLinks.classList.remove("open"));
});
const sections=[...document.querySelectorAll("main section")];
const links=[...document.querySelectorAll(".nav-links a")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>observer.observe(section));
