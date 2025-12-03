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
    
    // // || logo ||
    // const logoContainer = document.createElement("figure")
    // const logoLink = document.createElement("a")
    // logoLink.href = "index.html"

    // const logo = document.createElement("img")
    // logo.src = "./images/skillItUpLogo.png"
    // logo.classList.add("logo")
    
    // logoLink.appendChild(logo)
    // logoContainer.appendChild(logoLink)

    // // || navigation ||


    // const navigation = document.createElement("nav").classList.add("navigation")
    // const kitchenBtn = document.createElement("a").classList.add("header", "light-text", "nav-btn")
    // const recipesBtn = document.createElement("a").classList.add("header", "light-text", "nav-btn")
    // const tipsBtn = document.createElement("a").classList.add("header", "light-text", "nav-btn")
    // const shareBtn = document.createElement("a").classList.add("header", "light-text", "nav-btn")

    // kitchenBtn.textContent = "Kitchen"
    // recipesBtn.textContent = "Recipes"
    // tipsBtn.textContent = "Tips & Tricks"
    // shareBtn.textContent = "Share a Recipe"



    // navigation.appendChild(kitchenBtn)
    // navigation.appendChild(recipesBtn)
    // navigation.appendChild(tipsBtn)
    // navigation.appendChild(shareBtn)

    // header.appendChild(logoContainer)

// Restructure this to NOT use innerHTML (in progress above)

//WORKING NAV
    header.innerHTML =`
        <div class="logo-title">
        <figure>
        <a href="index.html"><img class="logo"src="./images/skillItUpLogo.png"></a>
        </figure>
        <h1 class="title header light-text"> Skill It Up! </h1>
        </div>
        <nav class="navigation">
                <a href="index.html" class="header light-text nav-btn">Kitchen</a>
                <a href="recipes.html" class="header light-text nav-btn">Recipes</a>
                <a href="tips.html" class="header light-text nav-btn">Tips & Tricks</a>
                <a href="share.html" class="header light-text nav-btn">Share a Recipe</a>
                <!-- <a href="" class="header light-text nav-btn">My Cookbook</a> -->
        </nav>
        <!-- hamburger menu  -->
            <a href="javascript:void(0);" class="hamburger" onclick ="hamburger()">
            <img id="hamburger" src="./images/hamburger.svg.png">
            </a>
    `
//ADDING UL TO NAV
    // header.innerHTML =`
        // <div class="logo-title">
        // <figure>
        // <a href="index.html"><img class="logo"src="./images/skillItUpLogo.png"></a>
        // </figure>
        // <h1 class="title header"> Skill It Up! </h1>
        // </div>
        // <nav class="navigation">
        //     <ul>
        //         <li><a href="index.html" class="header light-text nav-btn">Kitchen</a></li>
        //         <li><a href="recipes.html" class="header light-text nav-btn">Recipes</a></li>
        //         <li><a href="tips.html" class="header light-text nav-btn">Tips & Tricks</a></li>
        //         <li><a href="share.html" class="header light-text nav-btn">Share a Recipe</a></li>
        //         <!-- <a href="" class="header light-text nav-btn">My Cookbook</a> -->
        //     </ul>
        // </nav>
        // <!-- hamburger menu  -->
        //     <a href="javascript:void(0);" class="hamburger" onclick ="hamburger()">
        //     <img id="hamburger" src="./images/hamburger.svg.png">
        //     </a>
    // `
}

function addFooter() {
    const footer = document.querySelector(".footer")

    footer.innerHTML=`
        <p class="footer-text">Created by Amanda Allred</p>
`
}

document.addEventListener("DOMContentLoaded", addHeader)
document.addEventListener("DOMContentLoaded", addFooter)
