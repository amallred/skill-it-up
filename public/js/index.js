async function getRecipes() {
    try {
        const res = await fetch("http://localhost:2025/api/recipes")
        const parsedData = await res.json()
        // console.log(parsedData)
        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

async function getTips() {
    try {
        const res = await fetch("http://localhost:2025/api/tips")
        const parsedData = await res.json()
        // console.log(parsedData)
        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

async function createRecipePreviews(recipeName) { 

    const recipeContainer = document.getElementById("recipeContainer")

    // Create elements
    const article = document.createElement("article")
    const recipeHeader = document.createElement("h3")
    const recipeDescription = document.createElement("p")
    const recipeButton = document.createElement("button")
    const recipeLink = document.createElement("a")

    // Add classes to elements    
    article.classList.add("tile","featuredRecipes")
    recipeHeader.classList.add("header")
    recipeDescription.classList.add("text")
    recipeButton.classList.add("button", "index-btn", "header")
    recipeLink.classList.add("btn-text")

    // Populate content
    recipeLink.textContent = "Let's cook!"
    recipeLink.href = `../recipe.html?id=${recipeName.id}`
    recipeDescription.textContent = recipeName.description 
    recipeHeader.textContent = recipeName.name
    
    // Construct card
    recipeButton.appendChild(recipeLink)
    article.appendChild(recipeHeader)
    article.appendChild(recipeDescription)
    article.appendChild(recipeButton)
    recipeContainer.appendChild(article)
}

async function renderRecipeCards() {
    try {
        // Retrieve recipes
        const recipes = await getRecipes()

        // Create a set to store 3 random unique recipes
        const randomRecipes = new Set()
        while (randomRecipes.size < 3) {
            randomRecipes.add(recipes[Math.floor(Math.random() * recipes.length)])
        }

        // Store random recipes into an array
        const featuredRecipes = Array.from(randomRecipes)

        featuredRecipes.forEach(recipe => {
            createRecipePreviews(recipe)
        })
    } catch (error) {
        console.error(error)
    }
}

// Random tip generation

async function createTipTile(tip) {
    // Container
    const tipContainer = document.getElementById("tip-container")
    
    // Create elements
    const tipTile = document.createElement("section")
    const tipText = document.createElement("p")
    const tipAuthor = document.createElement("p")
    
    // Add classes
    tipTile.classList.add("tile")
    tipText.classList.add("text")
    tipAuthor.classList.add("text")

    // Populate content
    tipText.textContent = tip.tip
    tipAuthor.textContent = `Shared by: ${tip.name}`

    // Construct tile
    tipContainer.appendChild(tipTile)
    tipTile.appendChild(tipText)
    tipTile.appendChild(tipAuthor)
}

async function renderTipCards() {
    try {
        // Retrieve tips
        const tips = await getTips()

        // Create a set to store 2 random unique tips
        const randomTips = new Set()
        while (randomTips.size < 2) {
            randomTips.add(tips[Math.floor(Math.random() * tips.length)])
        }

        // Store random tips into an array
        const featuredTips = Array.from(randomTips)

        featuredTips.forEach(tip => {
            createTipTile(tip)
        })
    } catch (error) {
        console.error(error)
    }
}

renderRecipeCards()
renderTipCards()