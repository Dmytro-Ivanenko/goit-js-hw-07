import { galleryItems } from "./gallery-items.js";

const refGallery = document.querySelector(".gallery");

// ---- create gallery
const createGalleryElements = ObjArr => {
	const ElemArr = ObjArr.map(({ preview, original, description }) => {
		return `<a class="gallery__item" href=${original}>
				<img class="gallery__image" src=${preview} alt= ${description}  />
			</a>`;
	});

	insertGalleryElements(ElemArr);
};

const insertGalleryElements = ElemArr => {
	refGallery.innerHTML = ElemArr.join("");
};

// ---- initialization

createGalleryElements(galleryItems);

new SimpleLightbox(".gallery a", {
	captions: true,
	captionDelay: 250,
	captionPosition: "bottom",
	captionsData: "alt",
});
