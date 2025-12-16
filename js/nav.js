document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".close-menu");
    const links = document.querySelectorAll("nav ul a");

    if (!hamburger || !navMenu || !overlay || !closeBtn) return;

    const openMenu = () => {
        navMenu.classList.add("show");
        overlay.classList.add("show");
    };

    const closeMenu = () => {
        navMenu.classList.remove("show");
        overlay.classList.remove("show");
    };

    hamburger.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Active page underline
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
