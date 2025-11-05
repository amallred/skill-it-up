// import { getRecipes } from "./recipes.js";

// console.log([getRecipes])

// I would like to import getRecipes from recipes.js, but am encountering errors.

async function getRecipe(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/recipes/${id}`)
        const parsedData = await res.json()

        console.log(parsedData.data) 
        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

async function displayRecipe(id) { // make sure to add sections for the description and notes
    const recipe = await getRecipe(id)
    
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
    // add logic to change display to none on the container if there are no notes
    const notesList = document.getElementById("notes")
    const notesArray = recipe.notes.split("\n")
    const notes = notesArray.filter(note => note != "")

    notes.forEach(note => {
        if (note != "") {
            const newNote = document.createElement("li")
            newNote.textContent = note
            notesList.appendChild(newNote) 
        }
    })
}

// the next step is to have the id # change based on the selected recipe rather than default to 1 as below
getRecipe(1)
displayRecipe(1)