// finding dashboard button
var showDashboard = document.getElementById("show_menu");
// nav bar
var navBar = document.getElementById("nav-bar");
//ul
var ul = document.getElementById("nav-ul");




if (showDashboard.style.display !== "none"){
showDashboard.addEventListener("click", showMenu);
}
function showMenu() {

    if (ul.style.display === '' || ul.style.display === 'none') {
        ul.style.display = 'block';
        navBar.style.height = "175px";
    } else if (ul.style.display === 'block') {
        ul.style.display = 'none';
        navBar.style.height = "50px";

    }
}
