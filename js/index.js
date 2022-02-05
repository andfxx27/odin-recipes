"use strict";

const masonryListContainer = document.getElementById("masonry-list-container");

let currentHeight = 0;
const displayMasonryList = () => {
  // Hard coded images' count
  for (let i = 1; i <= 6; i++) {
    const randomWidth = Math.ceil(Math.random() * 200 + 200);
    console.log(randomWidth);

    // Prepare the image element
    let src = `./images/${i}.jpeg`;
    const img = document.createElement("img");
    img.classList = "masonry-img";
    img.src = src;

    // Append the image to the masonry list container
    masonryListContainer.appendChild(img);
  }
};

displayMasonryList();
