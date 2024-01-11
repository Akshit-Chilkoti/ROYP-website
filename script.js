function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

window.onscroll = function() {
    var navbar = document.querySelector("nav");
    var icon = document.querySelector(".icon");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.top = "-50px";
        icon.style.display = "block";
    } else {
        navbar.style.top = "0";
        icon.style.display = "none";
    }
};
