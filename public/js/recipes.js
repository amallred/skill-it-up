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
    const recipeButton = document.getElementById("recipe-name-container")
    const card = document.createElement('article') 
    
    const recipeLink = document.createElement('a') //won't have h3 tag
    recipeLink.href = `../share.html?id=${recipeName.id}` //where does the id come from?
    recipeLink.textContent = recipeName.name
    card.appendChild(recipeLink)

    recipeButton.appendChild(card)
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