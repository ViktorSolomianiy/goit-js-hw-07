import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const cardsContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);

cardsContainer.insertAdjacentHTML("beforeend", cardsMarkup);

cardsContainer.addEventListener("click", onClick);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionsDelay: 250,
});

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target.nodeName);
}

function createGalleryCards(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>`;
    })
    .join("");
}
