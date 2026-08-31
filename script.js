const footerHeadings = document.querySelectorAll(".footerHeading");

footerHeadings.forEach(function(heading) {
    heading.addEventListener("click", function() {
        heading.parentElement.classList.toggle("open");
    });
});

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenuPanel");
const overlay = document.querySelector(".mobileOverlay");

hamburger.addEventListener("click", function () {

    const isOpen = mobileMenu.classList.toggle("open");

    overlay.classList.toggle("open", isOpen);
    document.body.classList.toggle("menuOpen", isOpen);

});