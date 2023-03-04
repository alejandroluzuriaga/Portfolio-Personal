const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerButtonOpened = document.querySelector('.hamburger-button-close');
const navOptions = document.querySelector('.header-optionWrapper');

hamburgerButton.addEventListener("click", () =>{
    hamburgerButton.classList.remove("header-button-active");
    hamburgerButton.classList.add("header-button-disabled");
    hamburgerButtonOpened.classList.remove("header-button-disabled");
    hamburgerButtonOpened.classList.add("header-button-active");
    navOptions.classList.add("active-menu");
});

hamburgerButtonOpened.addEventListener("click", ()=>{
    hamburgerButtonOpened.classList.remove("header-button-active");
    hamburgerButtonOpened.classList.add("header-button-disabled");
    hamburgerButton.classList.remove("header-button-disabled");
    hamburgerButton.classList.add(".header-button-active");
    navOptions.classList.remove("active-menu");
})