import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const cardsContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);

cardsContainer.insertAdjacentHTML("beforeend", cardsMarkup);

cardsContainer.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target.nodeName);

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  cardsContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function createGalleryCards(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
    </div>`;
    })
    .join("");
}
