document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-slider img");
    let currentIndex = 0;
  
    function showImage(index) {
      // hide all images
      images.forEach(image => {
          if (image.classList.contains("active")){
              image.classList.remove("active");
          }
      });
  
      // show the image at the given index
      images[index].classList.add("active");
      currentIndex = index;
    }
  
    function nextImage() {
      // go to the next image
      if (currentIndex === images.length - 1) {
          showImage(0);
      } else {
          showImage(currentIndex + 1);
      }
    }
  
    function previousImage() {
      // go to the previous image
      if (currentIndex === 0) {
          showImage(images.length - 1);
      } else {
          showImage(currentIndex - 1);
      }
    }
  
    // add event listeners to the arrow buttons
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
  
    arrowLeft.addEventListener("click", previousImage);
    arrowRight.addEventListener("click", nextImage);
  });
  