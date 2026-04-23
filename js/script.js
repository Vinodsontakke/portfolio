




document.querySelector('.hire-me').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const contactSection = document.querySelector('.contact');
  const contactSectionOffsetTop = contactSection.offsetTop;
  
  // Smooth scroll to the contact section
  window.scrollTo({
      top: contactSectionOffsetTop,
      behavior: 'smooth'
  });
});



