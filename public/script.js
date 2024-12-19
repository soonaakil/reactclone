document.addEventListener('DOMContentLoaded', function() {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;

      // Toggle the clicked accordion section
      if (content.style.maxHeight) {
        content.style.maxHeight = null;  // Close if already open
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Open the section smoothly
      }

      // Close all other accordion sections
      const allContents = document.querySelectorAll('.accordion-content');
      allContents.forEach(item => {
        if (item !== content) {
          item.style.maxHeight = null; // Close other sections
        }
      });
    });
  });
});
