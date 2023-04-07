/* notification for index page */
function wipNotification() {
    alert("This website is a work in progress!");
}

//checking that the variable is not null, since the element only exists on index page
let indexPage = document.getElementById("index-page");
if (indexPage != null) {
    indexPage.addEventListener("load", wipNotification());
}

/* color picker */
function palette1setter() {
    let defaultPage = document.querySelector(":root");
    defaultPage.style.setProperty("--bg-color", "#F2F2F2");
    defaultPage.style.setProperty("--text-color", "#082645");
    defaultPage.style.setProperty("--secondary-bg-color", "#d6d2d2" );
    defaultPage.style.setProperty("--hero-bg-color", "#484853");
}

function palette2setter() {
    let defaultPage = document.querySelector(":root");
    defaultPage.style.setProperty("--bg-color", "#D2E5F3");
    defaultPage.style.setProperty("--text-color", "#363536");
    defaultPage.style.setProperty("--secondary-bg-color", "#95BDDA" );
    defaultPage.style.setProperty("--hero-bg-color", "#6d606d");
}

function palette3setter() {
    let defaultPage = document.querySelector(":root");
    defaultPage.style.setProperty("--bg-color", "#F5EFFF");
    defaultPage.style.setProperty("--text-color", "#453B58");
    defaultPage.style.setProperty("--secondary-bg-color", "#b1acd5" );
    defaultPage.style.setProperty("--hero-bg-color", "#6C637B");
}

//variable declarations
const palette1 = document.getElementById('palette1');
const palette2 = document.getElementById('palette2');
const palette3 = document.getElementById('palette3');

//checking that the variable is not null
//colors are changed when button is clicked
if (palette1 != null) {
    palette1.addEventListener("click", palette1setter);
}
if (palette2 != null) {
    palette2.addEventListener("click", palette2setter);
}
if (palette3 != null) {
    palette3.addEventListener("click", palette3setter);
}

/* event handler */
//checking if the email is valid or not using regex pattern to include @
function checkForm(event) {
    let emailValid = false;
    let emailElement = document.getElementById("email");
    let pattern = /^\S+@\S+$/;
    emailValid = pattern.test(emailElement.value);
    if (!emailValid) {
        alert("Your email is not valid!");
        event.preventDefault();
    }
}

let formWidget = document.getElementById("contact-form");
if (formWidget != null) {
    formWidget.addEventListener("submit", checkForm);
}
  
/* conditionals */
function sorter() {
    let portfolioFlexbox = document.getElementById("portfolio-flexbox");
    if (selectElement.selectedIndex == "1") {
        portfolioFlexbox.style.flexDirection = "row-reverse";
        portfolioFlexbox.style.flexWrap = "wrap-reverse";
    }
    else {
        portfolioFlexbox.style.flexDirection = "row";
        portfolioFlexbox.style.flexWrap = "wrap";
    }
}

const selectElement = document.getElementById("sorting");

if (selectElement != null) {
    selectElement.addEventListener("change", sorter);
}

/* hamburger menu */
function changeVisibility() {
    let menuItems = document.getElementById("menu-items");
    //dropdown menu appears and disappears upon alternate clicks
    if (menuItems.style.display == "none"){
        menuItems.style.display = "block";
    }
    else {
        menuItems.style.display = "none";
    }
   
}

let hamburgerMenuButton = document.getElementById("mobile-hamburger-menu");
if (hamburgerMenuButton != null){
    hamburgerMenuButton.addEventListener('click', changeVisibility);
}

/* tablet menu */
function changeVisibilityT() {
    let menuItems = document.getElementById("menu-items-tablet");
    //dropdown menu appears and disappears upon alternate clicks
    if (menuItems.style.display == "none"){
        menuItems.style.display = "block";
    }
    else {
        menuItems.style.display = "none";
    }
   
}

let blogButton = document.getElementById("tablet-personal-links");
if (blogButton != null){
    blogButton.addEventListener('click', changeVisibilityT);
}