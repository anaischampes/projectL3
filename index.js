document.addEventListener("DOMContentLoaded", () => {

    // Bouton pour ouvrir / fermer le menu
    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");

    menuButton.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
    });

    // Redirection après clic sur une ville
    const cityButtons = document.querySelectorAll(".city");

    cityButtons.forEach(button => {
        button.addEventListener("click", () => {
            const cityId = button.dataset.city;
            window.location.href = `${cityId}.html`;
        });
    });

});
