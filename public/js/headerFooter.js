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

    header.innerHTML =`
        <div class="logo-title">
        <figure>
        <a href="index.html"><img class="logo"src="./images/skillItUpLogo.png"></a>
        </figure>
        <h1 class="title header light-text"><a href="index.html"> Skill It Up!</a></h1>
        </div>
        <nav class="navigation">
            <ul id="nav-list">
                <li><a href="index.html" class="header light-text nav-btn">Kitchen</a></li>
                <li><a href="recipes.html" class="header light-text nav-btn">Recipes</a></li>
                <li><a href="tips.html" class="header light-text nav-btn">Tips & Tricks</a></li>
                <li><a href="share.html" class="header light-text nav-btn">Share a Recipe</a></li>
                <!-- <a href="" class="header light-text nav-btn">My Cookbook</a> -->
            </ul>
        </nav>
        <!-- hamburger menu  -->
            <a href="javascript:void(0);" class="hamburger" onclick ="hamburger()">
            <img id="hamburger" src="./images/hamburger.svg.png">
            </a>
    `
}

function addFooter() {
    const footer = document.querySelector(".footer")

    footer.innerHTML=`
        <p class="footer-text light-text">Created by Amanda Allred</p>
`
}

document.addEventListener("DOMContentLoaded", addHeader)
document.addEventListener("DOMContentLoaded", addFooter)
