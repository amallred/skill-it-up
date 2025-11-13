async function getRecipes() {
    try {
        const res = await fetch("http://localhost:5000/api/recipes")
        const parsedData = await res.json()

        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

function createRecipeCard(recipeName) {
    const recipeContainer = document.getElementById("recipe-tiles")
    const recipeTile = document.createElement("button") // Should these be sections or articles?
    const recipe = document.createElement('h3')
    const recipeLink = document.createElement('a')

    recipeTile.classList.add("tile", "button")
    recipe.classList.add("header")
    recipeLink.href = `../recipe.html?id=${recipeName.id}`
    recipeLink.textContent = recipeName.name 
    
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