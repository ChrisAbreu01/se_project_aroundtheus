import * as selector from "./Constants.js";
import * as modalFunctions from "./Utils.js";
import {PopupWithForm} from "./PopupWithForm.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./Constants.js";
import { Card, initialCards} from "./Card.js";
import { Section } from "./Section.js";
// selector.profileFormElement.addEventListener("submit", handleProfileFormSubmit);
// selector.cardFormElement.addEventListener("submit", handleCardFormSubmit);
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    selector.profileName.textContent = selector.nameInput.value;
    selector.profileJob.textContent = selector.jobInput.value;
    selector.profileFormElement.reset();
    profileFormValidation.toggleButtonState();
    this.close();
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = new Card(
        selector.cardTitleInput.value,
        selector.cardUrlInput.value,
        selector.cardSelector
    );

    const newCardElement = newCard.generateCard();
     selector.cardsContainer.prepend(newCardElement);
    selector.cardFormElement.reset();
    cardFormValidation.toggleButtonState();
    this.close();
}

const profileFormValidation = new FormValidator(
    selector.profileFormElement,
    validationConfig
);
profileFormValidation.toggleButtonState();
profileFormValidation.enableValidation();
const cardFormValidation = new FormValidator(
    selector.cardFormElement,
    validationConfig
);
cardFormValidation.toggleButtonState();
cardFormValidation.enableValidation();

const cardList = new Section({
    items: initialCards
  }, selector.cardsContainer);
  
  cardList.renderItems(); 
  
  const newCardPopup = new PopupWithForm("#card", handleCardFormSubmit); 
  selector.cardModalBoxOpen.addEventListener("click", () => {
    newCardPopup.open();
  });
  newCardPopup.setEventListeners();
  const newProfilePopup = new PopupWithForm("#profile__modal",handleProfileFormSubmit);
  selector.profileModalBoxOpen.addEventListener("click", () => {
    newProfilePopup.open();
  selector.nameInput.value = selector.profileName.textContent;
  selector.jobInput.value = selector.profileJob.textContent;
});
  newProfilePopup.setEventListeners();