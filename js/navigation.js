document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        sections.forEach(section => section.classList.remove("active"));
        const targetId = this.getAttribute("data-target");
        document.getElementById(targetId).classList.add("active");
      });
    });
  });
  