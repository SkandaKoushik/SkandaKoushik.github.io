document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".card-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    prevButton.addEventListener("click", function() {
      container.scrollBy(-325, 0); // Adjust scroll amount as needed
    });
  
    nextButton.addEventListener("click", function() {
      container.scrollBy(325, 0); // Adjust scroll amount as needed
    });
  });

  
function openPancakePage() {
    window.location.href = "pancake.html";
}