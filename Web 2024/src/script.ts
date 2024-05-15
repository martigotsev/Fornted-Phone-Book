// Дефиниране на интерфейс за контактната информация
interface ContactInfo {
  name: string;
  description: string;
  phone: string;
  workPhone: string;
  city: string;
  email: string;
  image: string;
}
// Примерни данни за контакт
const contact: ContactInfo = {
  name: "Мартин Гоцев",
  description: "Студент",
  phone: "0889087459",
  workPhone: "0910/93676",
  city: "Мездра",
  email: "martingotsev9@gmail.com",
  image:"images/Martin.jpg"
};
// Функция за показване на контактната информация в HTML
function displayContactInfo(contact: ContactInfo): void {
  const profileNameElement = document.querySelector('.profile-name') as HTMLElement;
  const profileDescriptionElement = document.querySelector('.profile-description') as HTMLElement;
  const phoneElement = document.querySelector('.profile-detail[data-info="Телефон:"]') as HTMLElement;
  const workPhoneElement = document.querySelector('.profile-detail[data-info="Служебен:"]') as HTMLElement;
  const cityElement = document.querySelector('.profile-detail[data-info="Град:"]') as HTMLElement;
  const emailElement = document.querySelector('.profile-detail[data-info="Имейл:"]') as HTMLElement;
  const imageElement = document.querySelector('.contact-profile img') as HTMLImageElement;
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
