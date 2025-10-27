function hamburger() {
    var x = document.querySelector(".navigation")
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

function addHeader() {
    const header = document.querySelector(".top-header")
    
// Restructure this to NOT use innerHTML

    header.innerHTML =`
        <figure>
        <a href="index.html"><img class="logo"src="./images/skillItUpLogo.png"></a>
            <figcaption></figcaption>
        </figure>
        
        <nav class="navigation">
            <a href="index.html" class="header light-text nav-btn">Kitchen</a>
            <a href="recipes.html" class="header light-text nav-btn">Recipes</a>
            <a href="" class="header light-text nav-btn">Tips & Tricks</a>
            <a href="share.html" class="header light-text nav-btn">Share a Recipe</a>
            <!-- <a href="" class="header light-text nav-btn">My Cookbook</a> -->

        </nav>
        <!-- hamburger menu  -->
            <a href="javascript:void(0);" class="hamburger" onclick ="hamburger()">
            <img id="hamburger" src="./images/hamburger.svg.png">
            </a>
    `
    console.log("I'm working")
}

function addFooter() {
    const footer = document.querySelector(".footer")

    footer.innerHTML=`
        <p class="footer-text">Created by Amanda Allred</p>
`
}

document.addEventListener("DOMContentLoaded", addHeader)
document.addEventListener("DOMContentLoaded", addFooter)
