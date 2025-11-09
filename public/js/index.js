async function getRecipes() {
    try {
        const res = await fetch("http://localhost:5000/api/recipes")
        const parsedData = await res.json()
        console.log(parsedData)
        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

async function createRecipePreviews(recipeName) { 

    const recipeContainer = document.getElementById("recipeContainer")

    // Create elements
    const article = document.createElement("article")
    const recipeHeader = document.createElement("h2")
    const recipeDescription = document.createElement("p")
    const recipeButton = document.createElement("button")
    const recipeLink = document.createElement("a")

    // Add classes to elements    
    article.classList.add("tile")
    recipeHeader.classList.add("header")
    recipeDescription.classList.add("text")
    recipeButton.classList.add("button")
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
        const recipes = await getRecipes()
        recipes.forEach(recipe => 
            createRecipePreviews(recipe)
        )
        // How do I limit this to 3 random recipes?
    } catch (error) {
        console.error(error.message)
    }
}
renderCards()