import { closeModal, openModal } from "./utils.js";
import * as selector from "./constants.js";
export const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg",
    },
];
export class Card {
    constructor(text, image) {
        this._image = image;
        this._text = text;
        this._element = document
            .querySelector("#elements-template")
            .content.querySelector(".elements__element")
            .cloneNode(true);
        this.cardImage = this._element.querySelector(".elements__img");
        this.cardFormElement = document.querySelector("#card__modal-form");
        this.cardLikeButton = this._element.querySelector(".elements__like-button");
        this.deleteCardButton = this._element.querySelector(
            ".element__delete-button"
        );
    }

    _handlePreviewPicture(link, name) {
        selector.imageElement.src = link;
        selector.imageElement.alt = name;
        selector.imageCaption.textContent = name;
        openModal(selector.imageView);
    }
    _setEventListeners() {
        this.cardImage.addEventListener("click", () => {
            this._handlePreviewPicture(this._image, this._text);
        });
        this.cardLikeButton.addEventListener("click", () =>
            this.cardLikeButton.classList.toggle("elements__like-button-black")
        );
        this.deleteCardButton.addEventListener("click", function() {
            const listItem = this.deleteCardButton.closest(".elements__element");
            listItem.remove();
        });
    }
    generateCard() {
        this.cardImage.src = this._image;
        this._element.querySelector(".elements__title").textContent = this._text;
        this._setEventListeners();
        return this._element;
    }
}