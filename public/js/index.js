async function getRecipes() {
    try {
        const res = await fetch("http://localhost:5000/api/recipes")
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
    
    // recipeButton.appendChild()
    recipeButton.appendChild(recipeLink)
    article.appendChild(recipeHeader)
    article.appendChild(recipeDescription)
    article.appendChild(recipeButton)
    recipeContainer.appendChild(article)
}

async function renderCards() {
    try {
        // Retrieve games
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

renderCards()