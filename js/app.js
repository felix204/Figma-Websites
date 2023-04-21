const imgHolders = document.querySelectorAll(".image-holder");

imgHolders.forEach((image) => {
  image.addEventListener("mouseover", () => {
    const img = image.querySelector("img");
    const imageHeight = image.offsetHeight;
    const height = img.height - imageHeight;
    img.style.top = "-" + height + "px";
  });

  image.addEventListener("mouseout", () => {
    const img = image.querySelector("img");
    img.style.top = 0;
  });
});
