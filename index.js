function hamburger() {
    var x = document.getElementById("navigation-list")
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}