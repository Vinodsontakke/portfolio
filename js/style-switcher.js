// =========================  toggle style switcher =================//
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
  document.querySelector(".style-switcher").classList.toggle("open")
})
// hide style switcher on scroll 
window.addEventListener('scroll',()=>{
  if( document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open")
  }
})
/*====================  teme color =================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
  alternateStyles.forEach((style)=>{
    if(color === style.getAttribute("title"))
    {
      style.removeAttribute("disabled")
    }
    else
    {
      style.setAttribute("disabled","true")
    }
  })
}
/*====================  teme light and dark mode  =================*/
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click",()=>{
//   dayNight.querySelector("i").classList.toggle.add("fa-sun");
//   dayNight.querySelector("i").classList.toggle.add("fa-moon");
//   document.body.classList.toggle("dark");
// })
// window.addEventListener("load",()=>{
//   if(document.body.classList.contains("dark"))
//   {
//     dayNight.querySelector("i").classList.add("fa-sun")
//   }
//   else
//   {
//     dayNight.querySelector("i").classList.add("fa-moon")
//   }
// })
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.remove("fa-moon"); // Remove the moon icon if it's not dark mode
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
    dayNight.querySelector("i").classList.remove("fa-sun"); // Remove the sun icon if it's not dark mode
  }
});
//=================================   =============/
document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
