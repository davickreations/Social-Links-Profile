document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".socail-links a");
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
  
        // Remove the active class from all links
        links.forEach(link => {
          link.classList.remove("active");
        });
  
        // Add the active class to the clicked link
        this.classList.add("active");
      });
    });
  });
  