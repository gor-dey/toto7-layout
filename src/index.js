import "./index.html";
import "./index.scss";

// SWIPER MOBILE WINNERS START
new Swiper(".swiper", {
  slidesPerView: 2.4,
  spaceBetween: 5,
});
// SWIPER MOBILE WINNERS END

const swiperValue = document.getElementsByClassName("swiper--ticket");
const innerWidthNow = window.innerWidth;
//* console.log(innerWidthNow);
//* console.log(swiperValue);

// target.addEventListener(type, listener[, options]);

// SWIPER MOBILE TICKET START
if (innerWidthNow >= 768) {
  swiperValue.classList.remove("swiper--ticket--js");
}

// if (innerWidthNow >= 768) {
//   swiperValue.classList.add("swiper--ticket--js");
// }

new Swiper(".swiper--ticket--js", {
  slidesPerView: 1.5,
  spaceBetween: 5,
});
// SWIPER MOBILE TICKET END

// ENTER START
const buttonEnter = document.getElementById("header__enter");
const pannelEnter = document.querySelector(".enter");
console.log(pannelEnter);
buttonEnter.onclick = () => {
  buttonEnter.classList.toggle("js_header__button--checked");
  pannelEnter.classList.toggle("js-enter--appearance");
};
// ENTER END

// registration START
const buttonRegistration = document.getElementById("header__registration");
const pannelRegistration = document.querySelector(".registration");
console.log(pannelRegistration);
buttonRegistration.onclick = () => {
  buttonRegistration.classList.toggle("js_header__button--checked");
  pannelRegistration.classList.toggle("js-registration--appearance");
};
// registration END
