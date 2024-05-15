"use strict";
// Примерни данни за контакт
const contact = {
    name: "Мартин Гоцев",
    description: "Студент",
    phone: "0889087459",
    workPhone: "0910/93676",
    city: "Мездра",
    email: "martingotsev9@gmail.com",
    image: "images/Martin.jpg"
};
// Функция за показване на контактната информация в HTML
function displayContactInfo(contact) {
    const profileNameElement = document.querySelector('.profile-name');
    const profileDescriptionElement = document.querySelector('.profile-description');
    const phoneElement = document.querySelector('.profile-detail[data-info="Телефон:"]');
    const workPhoneElement = document.querySelector('.profile-detail[data-info="Служебен:"]');
    const cityElement = document.querySelector('.profile-detail[data-info="Град:"]');
    const emailElement = document.querySelector('.profile-detail[data-info="Имейл:"]');
    const imageElement = document.querySelector('.contact-profile img');
    profileNameElement.textContent = `Име: ${contact.name}`;
    profileDescriptionElement.textContent = `Описание: ${contact.description}`;
    phoneElement.textContent = `Телефон: ${contact.phone}`;
    workPhoneElement.textContent = `Служебен: ${contact.workPhone}`;
    cityElement.textContent = `Град: ${contact.city}`;
    emailElement.textContent = `Имейл: ${contact.email}`;
    imageElement.src = contact.image;
}
// Извикване на функцията за показване на контактната информация в HTML
displayContactInfo(contact);
//# sourceMappingURL=script.js.map