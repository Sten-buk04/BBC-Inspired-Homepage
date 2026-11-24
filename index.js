
/* ============================= */
/* MOBILE NAVIGATION */
/* ============================= */

const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector(".main-navigation");
const closeMenu = document.querySelector("#close-menu");

hamburger.addEventListener("click", function () {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    hamburger.setAttribute("aria-expanded", isOpen);

});

closeMenu.addEventListener("click", function () {

    navigation.classList.remove("open");

    hamburger.setAttribute("aria-expanded", false);

});

const carousels = document.querySelectorAll(".video-carousel");

carousels.forEach(function (carousel) {

    const track = carousel.querySelector(".video-track");
    const leftArrow = carousel.querySelector(".arrow-left");
    const rightArrow = carousel.querySelector(".arrow-right");

    function getScrollAmount() {
        const card = track.querySelector(".video-card");

        if (!card) return 0;

        const styles = window.getComputedStyle(track);
        const gap = parseFloat(styles.columnGap) || 0;

        return card.getBoundingClientRect().width + gap;
    }

    function updateArrows() {
        const maxScroll = track.scrollWidth - track.clientWidth;

        leftArrow.disabled = track.scrollLeft <= 1;

        rightArrow.disabled = track.scrollLeft >= maxScroll - 1;
    }

    rightArrow.addEventListener("click", function () {
        track.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });

    leftArrow.addEventListener("click", function () {
        track.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });

    track.addEventListener("scroll", updateArrows);

    window.addEventListener("resize", updateArrows);

    updateArrows();
});

