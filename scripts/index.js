const initialCards = [
  {
    name: "Yosemite valley",
    link: "./images/yosemity.jpg",
  },
  {
    name: "Lake Louise",
    link: "./images/lakelois.jpg",
  },
  {
    name: "Bald Mountains",
    link: "./images/baldmountains.jpg",
  },
  {
    name: "Latemar",
    link: "./images/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "./images/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "./images/lagodeibraes.jpg",
  },
];

const profileModalBoxOpen = document.querySelector(".profile__edit-space");
const profileModalBoxClose = document.querySelector(".modal__close-button");
const cardModalBoxOpen = document.querySelector(".profile__edit-button");
const cardModalBoxClose = document.querySelector(".card__modal-close-button");
const cardModalDisplay = document.querySelector(".card");
const profileModalDisplay = document.querySelector(".modal");
const cardsContainer = document.querySelector(".elements");
const cardTemplate = document
  .querySelector("#elements-template")
  .content.querySelector(".elements__element");
const profileFormElement = document.querySelector(".modal__form");
const cardFormElement = document.querySelector(".card__modal-form");
const nameInput = document.querySelector(".modal__input-1");
const jobInput = document.querySelector(".modal__input-2");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__subtitle");
const cardTitleInput = document.querySelector(".card__modal-input-1");
const cardUrlInput = document.querySelector(".card__modal-input-2");
const imageModalClose = document.querySelector(".popup__close");
const imageView = document.querySelector(".popup");

function openModal(modal) {
  modal.classList.add("modal_box_opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_box_opened");
}
profileModalBoxOpen.addEventListener("click", () => {
  openModal(profileModalDisplay);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
profileModalBoxClose.addEventListener("click", () => {
  closeModal(profileModalDisplay);
});
cardModalBoxOpen.addEventListener("click", () => {
  openModal(cardModalDisplay);
});
cardModalBoxClose.addEventListener("click", () => {
  closeModal(cardModalDisplay);
});
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeModal(profileModalDisplay);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".elements__img");
  const cardTitle = cardElement.querySelector(".elements__title");
  const cardLikeButton = cardElement.querySelector(".elements__like-button");
  const deleteCard = cardElement.querySelector(".element__delete-button");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  cardImage.addEventListener("click", () => {
    handlePreviewPicture(data);
  });
  cardLikeButton.addEventListener("click", () =>
    cardLikeButton.classList.toggle("elements__like-button-black")
  );
  deleteCard.addEventListener("click", function () {
    const listItem = deleteCard.closest(".elements__element");
    listItem.remove();
  });
  return cardElement;
}
const imageElement = document.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption");

function handlePreviewPicture(data) {
  imageElement.src = data.link;
  imageElement.alt = data.name;
  imageCaption.textContent = data.name;
  openModal(imageView);
}
imageModalClose.addEventListener("click", () => {
  closeModal(imageView);
});
function generateCards() {
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardsContainer.prepend(cardElement);
  });
}
generateCards();

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardElement = getCardElement({
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  });
  cardsContainer.prepend(cardElement);
  cardFormElement.reset();
  closeModal(cardModalDisplay);
}

cardFormElement.addEventListener("submit", handleCardFormSubmit);

const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");
const showInputError = (formElement, inputElement, errorMessage) => {
  // Find the error message element inside the very function
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // The rest remains unchanged
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  // Find the error message element
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // The rest remains unchanged
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
}; 
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // The parameter of showInputError() is now a form,
    // which contains a field to be checked
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // The same for hideInputError(), Its parameter is now a form,
    // which contains a field to be checked
    hideInputError(formElement, inputElement);
  }
}; 

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

const setEventListeners = (formElement) => {
  // Find all fields inside the form, and
  // make an array from them using the Array.from() method
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));

  // Iterate over the resulting array
  inputList.forEach((inputElement) => {
    // add the input event handler to each field
    inputElement.addEventListener("input", () => {
      // Call the isValid() function inside the callback,
      // and pass the form and the element to be checked to it
      isValid(formElement, inputElement)
    });
  });
}; 
const enableValidation = () => {
  // It will find all forms with the specified class in DOM, and
  // make an array from them using the Array.from() method
  const formList = Array.from(document.querySelectorAll(".form"));

  // Iterate over the resulting array
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancel default behavior for each form
      evt.preventDefault();
    });

    // Call the setEventListeners() function for each form,
    // taking a form element as an argument
    setEventListeners(formElement);
  });
};

// Call the function
enableValidation(); 