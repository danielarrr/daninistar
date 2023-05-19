document.addEventListener("DOMContentLoaded", function() {
  const hoverTriggers = document.querySelectorAll(".hover-trigger");

  hoverTriggers.forEach(function(trigger) {
    const imageSrc = trigger.dataset.imageSrc;
    const hoverImage = document.createElement("img");
    hoverImage.classList.add("hover-image");
    hoverImage.src = imageSrc;

    trigger.addEventListener("mouseover", function() {
      const columnDiv = document.querySelector(".column");
      const imageContainer = document.createElement("div");
      imageContainer.id = "image-container";
      imageContainer.appendChild(hoverImage);

      columnDiv.parentNode.insertBefore(imageContainer, columnDiv.nextSibling);
      imageContainer.style.position = "absolute";
      imageContainer.style.top = "300px";
      imageContainer.style.right = "250px";
    });

    trigger.addEventListener("mouseout", function() {
      const imageContainer = document.querySelector("#image-container");
      if (imageContainer) {
        imageContainer.remove();
      }
    });
  });
});
