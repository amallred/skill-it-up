// import { getRecipes } from "./recipes.js";

// console.log([getRecipes])

// I would like to import getRecipes from recipes.js, but am encountering errors.

async function getRecipe(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/recipes?id=${id}`)
        const parsedData = await res.json()

        console.log(parsedData.data) 
        // return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

getRecipe(2)