const pricingMatrix = {

    INR: {
        symbol: "₹",
        multiplier: 1
    },

    USD: {
        symbol: "$",
        multiplier: 0.012
    },

    EUR: {
        symbol: "€",
        multiplier: 0.010
    }

};

const basePlans = {

    starter: 1999,
    pro: 4999,
    enterprise: 9999

};

let currentCurrency = "INR";
let annualMode = false;

function updatePrices() {

    const currency = pricingMatrix[currentCurrency];

    const discount = annualMode ? 0.8 : 1;

    document.getElementById("starterPrice").textContent =
        currency.symbol +
        Math.round(basePlans.starter * currency.multiplier * discount);

    document.getElementById("proPrice").textContent =
        currency.symbol +
        Math.round(basePlans.pro * currency.multiplier * discount);

    document.getElementById("enterprisePrice").textContent =
        currency.symbol +
        Math.round(basePlans.enterprise * currency.multiplier * discount);

}

document
    .getElementById("currencySelect")
    .addEventListener("change", function () {

        currentCurrency = this.value;

        updatePrices();

    });

document
    .getElementById("monthlyBtn")
    .addEventListener("click", function () {

        annualMode = false;

        monthlyBtn.classList.add("active");
        annualBtn.classList.remove("active");

        updatePrices();

    });

document
    .getElementById("annualBtn")
    .addEventListener("click", function () {

        annualMode = true;

        annualBtn.classList.add("active");
        monthlyBtn.classList.remove("active");

        updatePrices();

    });

updatePrices();
const featureCards = document.querySelectorAll(".feature-card");
const accordionButtons = document.querySelectorAll(".accordion-toggle");

accordionButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        featureCards.forEach((card, i) => {

            if (i === index) {
                card.classList.toggle("active");
            } else {
                card.classList.remove("active");
            }

        });

    });

});
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-section");

        }

    });

}, {

    threshold: 0.2

});

document
    .querySelectorAll(".hidden-section")
    .forEach((section) => {

        observer.observe(section);

    });
    window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("fade-out");

    }, 800);

});