const initialCards = [{
        name: "Yosemite valley",
        link: "./images/yosemity.jpg"
    },
    {
        name: "Lake Louise",
        link: "./images/lakelois.jpg"
    },
    {
        name: "Bald Mountains",
        link: "./images/baldmountains.jpg"
    },
    {
        name: "Latemar",
        link: "./images/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "./images/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "./images/lagodeibraes.jpg"
    }
];

const profileModalBoxOpen = document.querySelector('.profile__edit-space');
const profileModalBoxClose = document.querySelector('.modal_close-button');
const modalDisplay = document.querySelector(".modal_box");
const cardsContainer = document.querySelector(".elements");

const cardTemplate = document.querySelector("#elements-template").content.querySelector('.elements__element');
const profileFormElement = document.querySelector(".modal_form");
const saveProfileButton = profileFormElement.querySelector(".modal_sumit-button");


const nameInput = document.querySelector(".modal_input-1");
const jobInput = document.querySelector(".modal_input-2");


const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__subtitle");



function openModal() {
    modalDisplay.classList.add("modal_box_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}

function closeModal() {
    modalDisplay.classList.remove("modal_box_opened");
}
profileModalBoxOpen.addEventListener("click", openModal);
profileModalBoxClose.addEventListener("click", closeModal);



function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = (nameInput.value);
    profileJob.textContent = (jobInput.value);

    closeModal()
}
saveProfileButton.addEventListener('click', handleProfileFormSubmit);
profileFormElement.addEventListener('submit',handleProfileFormSubmit )
function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".elements__img");
    const cardTitle = cardElement.querySelector(".elements__title");
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    return cardElement;


}
initialCards.forEach(cardData => {
    const cardElement = getCardElement(cardData);
    cardsContainer.append(cardElement);
})