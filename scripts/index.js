let initialCards = [{
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

let modalBoxOpen = document.querySelector('.profile__edit-space');
let modalBoxClose = document.querySelector('.modal_close-button');
let modalDisplay = document.querySelector(".modal_box");
let modalLabelDefault1 = document.querySelector(".modallabel1");
let modalLabelDefault2 = document.querySelector(".modallabel2");
let profileTitle = document.querySelector(".profile__name").textContent;
let profileSubtitle = document.querySelector(".profile__subtitle").textContent;
let cardElementSelector = document.querySelector(".elements");
console.log(cardElementSelector);
const cardTemplate = document.querySelector("#elements-template").content.querySelector('.elements__element');
console.log(cardTemplate);

function Opener() {
    modalDisplay.setAttribute("style", "display:flex");
    modalLabelDefault1.textContent = profileTitle;
    modalLabelDefault2.textContent = profileSubtitle;
}

function closer() {
    modalDisplay.setAttribute("style", "display:none");
}
modalBoxOpen.addEventListener("click", Opener);
modalBoxClose.addEventListener("click", closer);


const profileFormElement = document.querySelector(".modal_form");
const formElement = document.querySelector(".modal_sumit-button");


const nameInput = document.querySelector(".modal_input-1");
const jobInput = document.querySelector(".modal_input-2");


const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__subtitle");

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = (document.querySelector('.modal_input-1').value);
    profileJob.textContent = (document.querySelector('.modal_input-2').value);

    closer();
}
formElement.addEventListener('click', handleProfileFormSubmit);

function getCardElement(data) {
    let cardElement = cardTemplate.cloneNode(true);
    console.log(cardElement);
    let cardImage = cardElement.querySelector(".elements__img");
    let cardTitle = cardElement.querySelector(".elements__title");
    console.log(cardImage);
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;
    console.log(cardTitle);
    console.log(cardElement);
    return cardElement;


}
for (let i = 0; i < initialCards.length; i++) {
    const item = initialCards[i];
    console.log(item);
    const cardElement = getCardElement(item);
    cardElementSelector.append(cardElement);
}