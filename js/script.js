let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

let cartItems = document.querySelector(".cart-items-container");
let cartBtn = document.querySelector("#cart-btn");

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    cartItems.classList.remove("active");
    searchForm.classList.remove("active");
});

cartBtn.addEventListener("click", function () {
    cartItems.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
});

searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
    searchForm.classList.remove("active");
};
