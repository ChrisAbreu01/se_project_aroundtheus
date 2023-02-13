import * as selector from "./constants.js";
import * as modalFunctions from "./utils.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./constants.js";
import { Card, initialCards } from "./card.js";
selector.profileFormElement.addEventListener("submit", handleProfileFormSubmit);
selector.cardFormElement.addEventListener("submit", handleCardFormSubmit);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    selector.profileName.textContent = selector.nameInput.value;
    selector.profileJob.textContent = selector.jobInput.value;

    modalFunctions.closeModal(selector.profileModalDisplay);
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = new Card(
        selector.cardTitleInput.value,
        selector.cardUrlInput.value
    );

    const _newCardElement = newCard.generateCard();
    selector.cardsContainer.prepend(_newCardElement);
    selector.cardFormElement.reset();
    closeModal(selector.cardModalDisplay);
}
selector.formList.forEach((formElement) => {
    const _buttonElement = formElement.querySelector(".form__submit");
    const newValidation = new FormValidator(formElement, validationConfig);
    newValidation._toggleButtonState(
        [selector.cardTitleInput, selector.cardUrlInput],
        _buttonElement,
        validationConfig.inactiveButtonClass
    );
    newValidation.enableValidation();
});
initialCards.forEach((cardData) => {
    const card = new Card(cardData.name, cardData.link);
    const cardElement = card.generateCard();
    selector.cardsContainer.prepend(cardElement);
});