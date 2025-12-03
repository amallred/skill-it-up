const queryString = window.location.search
const params = new URLSearchParams(queryString)
const recipeId = params.get("id")

async function getRecipe(id) {
    try {
        const res = await fetch(`http://localhost:2025/api/recipes/${id}`)
        const parsedData = await res.json()

        // console.log(parsedData.data) 
        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

async function displayRecipe(id) { 
    const recipe = await getRecipe(id)
    
        // || ERROR CHECK ||

    if (!recipe.id || !recipe) {
        const recipeCard = document.getElementById("recipeCard")
        const tipsCard = document.getElementById("tipsCard")
        const errorMsg = document.getElementById("error")
        const mainContainer = document.getElementById("main")

        recipeCard.style.display = "none"
        tipsCard.style.display = "none"
        errorMsg.style.display = "block"
        mainContainer.style.gridTemplateColumns = "100%"

        return
    }

    // || DISPLAY RECIPE NAME ||
    const recipeName = document.getElementById("recipe-name")
    const name = recipe.name
    recipeName.textContent = name
    
    // || DISPLAY DESCRIPTION ||
    const descriptionDisplay = document.getElementById("description")
    const description = recipe.description
    descriptionDisplay.textContent = description

    // || DISPLAY INGREDIENTS ||
    const ingredientList = document.getElementById("ingredient-list") 
    const ingredientArray = recipe.ingredients.split("\n")
    const ingredients = ingredientArray.filter(ingredient => ingredient !== "")
    
    ingredients.forEach(ingredient => {
        if (ingredient !== "") {
            const newIngredient = document.createElement("li")
            newIngredient.textContent = ingredient
            ingredientList.appendChild(newIngredient)
        }
    })
    
    // || DISPLAY DIRECTIONS ||
    const directionsList = document.getElementById("directions")
    const directionArray = recipe.steps.split("\n")
    const directions = directionArray.filter(direction => direction !== "")
    
    directions.forEach(direction => {
        if (direction !== "") {
            const newDirection = document.createElement("li")
            newDirection.textContent = direction
            directionsList.appendChild(newDirection)
        }
    })
    
    // || DISPLAY NOTES ||
    const notesList = document.getElementById("notes")
    const notesArray = recipe.notes.split("\n")
    const notes = notesArray.filter(note => note != "")
    const notesSection = document.getElementById("notes-section")

    // Check if there are any notes to display
    // Hide "Notes" section if not
    if (recipe.notes.length === 0) {
        console.log("array is empty")
        notesSection.style.display = "none"
    } 

    // Create a bullet point for each note
    notes.forEach(note => {
            const newNote = document.createElement("li")
            newNote.textContent = note
            notesList.appendChild(newNote)
    })
}

// || CHECKLIST FOR RECIPE || 

const directionList = document.getElementById("directions")
const ingredientsList = document.getElementById("ingredients")

directionList.addEventListener("click", function(e){
    console.log("task clicked")
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        // saveDirectionData()
    } 


})

ingredientsList.addEventListener("click", function(e){
    console.log("task clicked")
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        // saveIngredientData()
    } 
})

// Save checked/unchecked boxes to local storage
// function saveDirectionData() {
//     localStorage.setItem("data", directionList.innerHTML)
//     console.log("direction saved")
// }

// function saveIngredientData() {
//     localStorage.setItem("data", ingredientsList.innerHTML)
// }



// async function errorCheck (recipeId){
//     const recipeName = document.getElementById("recipe-name")
//     const recipeName = document.getElementById("recipe-name")
//     if (recipeName === '' && ) {
//         const recipeCard = document.getElementById("recipeCard")
//         const tipsCard = document.getElementById("tipsCard")

//         recipeCard.style.display = "none"
//         tipsCard.style.display = "none"
//     }
// }

getRecipe(recipeId)
displayRecipe(recipeId)
