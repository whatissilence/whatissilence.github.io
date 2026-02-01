document.addEventListener("DOMContentLoaded", function () {
    const openButtonMenu = document.getElementById("openButtonMenu");
    const closeButtonMenu = document.getElementById("closeButtonMenu");
    const overLayMenu = document.getElementById("overLayMenu");
    const menuLinks = overLayMenu.querySelectorAll("a.nav_header_link")

    openButtonMenu?.addEventListener("click", function () {
        overLayMenu.classList.add("is-open")
    });

    closeButtonMenu?.addEventListener("click", function () {
        overLayMenu.classList.remove("is-open")
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            overLayMenu.classList.remove("is-open");
        });
    });
});