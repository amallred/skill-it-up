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
    recipeLink.href = `../share.html?id=${recipeName.id}`
    recipeLink.textContent = recipeName.name 
    
    // create header with class;  append 'a' to it, append to card
    
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