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

  const instance = basicLightbox.create(
    ` <div class="modal"> <img src="${evt.target.dataset.source}" alt="Big Pictures"/> </div> `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscapeButton);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscapeButton);
      },
    }
  );
  instance.show();

  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
    console.log(evt.code);
  }

  //   const instance = basicLightbox.create(
  //     `
  //     <img src="${evt.target.dataset.source}" width="800" height="600">
  // `
  //   );
  //   instance.show();

  //   document.addEventListener("keydown", (evt) => {
  //     if (evt.code === "Escape") {
  //       instance.close();
  //     }

  //     console.log(evt.code);
  //   });
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
