import * as selector from "./Constants.js";
import * as modalFunctions from "./Utils.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./Constants.js";
import { Card, initialCards} from "./Card.js";
import { Section } from "./Section.js";
selector.profileFormElement.addEventListener("submit", handleProfileFormSubmit);
selector.cardFormElement.addEventListener("submit", handleCardFormSubmit);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    selector.profileName.textContent = selector.nameInput.value;
    selector.profileJob.textContent = selector.jobInput.value;
    selector.profileFormElement.reset();
    profileFormValidation.toggleButtonState();
    modalFunctions.closeModal(selector.profileModalDisplay);
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = new Card(
        selector.cardTitleInput.value,
        selector.cardUrlInput.value,
        selector.cardSelector
    );

    const _newCardElement = newCard.generateCard();
    selector.cardsContainer.prepend(_newCardElement);
    selector.cardFormElement.reset();
    cardFormValidation.toggleButtonState();
    modalFunctions.closeModal(selector.cardModalDisplay);
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
// initialCards.forEach((cardData) => {
//     const card = new Card(cardData.name, cardData.link, selector.cardSelector);
//     const cardElement = card.generateCard();
//     selector.cardsContainer.prepend(cardElement);
// });