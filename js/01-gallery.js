import { galleryItems } from "./gallery-items.js";

const refGallery = document.querySelector(".gallery");
let instance = "";

// ---- create gallery
const createGalleryElements = ObjArr => {
	const ElemArr = ObjArr.map(({ preview, original, description }) => {
		return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
	});

	insertGalleryElements(ElemArr);
};

const insertGalleryElements = ElemArr => {
	refGallery.innerHTML = ElemArr.join("");
};

// ---- events, handlers

const keyDownEscapeHandler = e => {
	if (e.code !== "Escape") {
		return;
	}

	instance.close();

	window.removeEventListener("keydown", keyDownEscapeHandler);
};

const imgClickHandler = e => {
	if (e.target.tagName !== "IMG") {
		return;
	}

	e.preventDefault();

	instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600" >
`);

	instance.show();

	window.addEventListener("keydown", keyDownEscapeHandler);
};

refGallery.addEventListener("click", imgClickHandler);

//  ---- initialization
createGalleryElements(galleryItems);
