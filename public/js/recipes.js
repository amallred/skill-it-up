async function getRecipes() {
    try {
        const res = await fetch("http://localhost:2025/api/recipes")
        const parsedData = await res.json()

        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

function createRecipeCard(recipeName) {
    const recipeContainer = document.getElementById("recipe-tiles")
    const recipeTile = document.createElement("button")
    const recipe = document.createElement('h3')
    const recipeLink = document.createElement('a')

    // Add classes
    recipeTile.classList.add("tile", "button")
    recipe.classList.add("header")

    // Populate content
    recipeLink.href = `../recipe.html?id=${recipeName.id}`
    recipeLink.textContent = recipeName.name 
    
    // Construct tile
    recipe.appendChild(recipeLink) // link added to heading
    recipeTile.appendChild(recipe) // heading added to tile
    recipeContainer.appendChild(recipeTile) // tile added to container
}

async function renderCards() {
    try {
        const recipes = await getRecipes()
        recipes.forEach(recipe => 
            createRecipeCard(recipe)
        )
    } catch (error) {
        console.error(error.message)
    }
}
await renderCards() 