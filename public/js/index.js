async function getRecipes() {
    try {
        const res = await fetch("http://localhost:5000/api/recipes")
        const parsedData = await res.json()

        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

function createRecipePreviews() { //what params?

    // Pull 3 random recipes
    // Loop through recipes to create 3 cards

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

    
}