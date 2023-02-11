import * as selector from "./constants.js";
import * as modalFunctions from "./utils.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./constants.js";

selector.profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  selector.profileName.textContent = selector.nameInput.value;
  selector.profileJob.textContent = selector.jobInput.value;

  modalFunctions.closeModal(selector.profileModalDisplay);
}
selector.formList.forEach((formElement) => {
  const newValidation = new FormValidator(
    formElement,
    validationConfig
  );
  newValidation.enableValidation(validationConfig.inputSelector, formElement);
});
