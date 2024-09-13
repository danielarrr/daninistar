        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null; 
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
          });
        }


document.addEventListener('DOMContentLoaded', function() {
  // Select all carousel triggers
  var carouselTriggers = document.querySelectorAll('.carousel-trigger');

  // Open the modal when a carousel trigger is clicked
  carouselTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      var carouselId = this.getAttribute('data-carousel');
      var carouselModal = document.getElementById(carouselId);
      if (carouselModal) {
        carouselModal.style.display = 'flex';
        showImage(carouselModal, 0); // Show the first image
      }
    });
  });

  // Close the modal when clicking outside the carousel content
  document.querySelectorAll('.carousel-modal').forEach(modal => {
    modal.addEventListener('click', function(event) {
      if (event.target === this) {
        closeCarousel(this);
      }
    });
  });

  // Function to close the carousel
  function closeCarousel(modal) {
    modal.style.display = 'none';
    var carouselItems = modal.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => item.classList.remove('active'));
  }

  // Show image function
  function showImage(modal, index) {
    var carouselItems = modal.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  // Next and Previous buttons functionality
  document.querySelectorAll('.carousel-prev, .carousel-next').forEach(button => {
    button.addEventListener('click', function() {
      var modal = this.closest('.carousel-modal');
      var carouselItems = modal.querySelectorAll('.carousel-item');
      var currentImageIndex = Array.from(carouselItems).findIndex(item => item.classList.contains('active'));

      if (this.classList.contains('carousel-prev')) {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : carouselItems.length - 1;
      } else {
        currentImageIndex = (currentImageIndex < carouselItems.length - 1) ? currentImageIndex + 1 : 0;
      }
      showImage(modal, currentImageIndex);
    });
  });
});


