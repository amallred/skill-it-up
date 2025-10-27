import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'

// import { recipes } from '../data/recipes.js'
const recipeRouter = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const recipesFilePath = path.join(
    __dirname,
    "..",
    "data",
    "recipes.json"
)

async function getAllRecipes() {
try {
        const recipeData = await fs.readFile(recipesFilePath)
        const recipes = JSON.parse(recipeData)

        return recipes
    } catch (error) {
        console.error('error', error.message)
    }
}

// need to make an index page that links with ids I think...

async function getRecipeById(recipeId){ 
    try {
        const id = parseInt(recipeId)
        
        const recipeData = await fs.readFile(recipesFilePath)
        const recipes = JSON.parse(recipeData)
        const recipe = recipes.find(recipe => recipe.id === id)
        
        return recipe
        
    } catch (error) {
        console.error('error', error.message)
    }
}

async function createRecipe(reqBody) {
    try {
        const recipeData = await fs.readFile(recipesFilePath)
        const recipes = JSON.parse(recipeData)
        
        const newRecipe = {
            id: recipes.length +1,
            name: reqBody.name
        }
        
        if (!newRecipe.name) {
            return undefined
        }
        
        recipes.push(newRecipe)
        
        await fs.writeFile(recipesFilePath, JSON.stringify(recipes))
        
        return newRecipe
    } catch (error) {
        console.error('error', error.message)
    }
}


recipeRouter.get('/', async (req, res) => {
    console.log('GET /api/recipes called') // Suggestion from ChatGPT
    const recipes = await getAllRecipes()
    console.log("Recipes:", recipes) // Suggestion from ChatGPT
    res.status(200).json({
        data: recipes
    })
})

recipeRouter.get('/:id', async(req, res) => {
    const recipe = await getRecipeById(req.params.id)

    if (!recipe) {
        return res.status(404).json({
            data: 'Recipe does not exist with that id'
        })
    }

    res.status(200).json({
        data: recipe
    })
})



recipeRouter.post('/', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                data: 'Bad Request. Missing required information'
            })
        }

        const newRecipe = await createRecipe(req.body)

        if (!newRecipe) {
            return res.status(400).json({
                data: 'Bad Request. Missing required information'
        })
    }

    res.status(201).json({
        data: newRecipe
    })

    } catch (error) {
        console.error('error', error.message)        
    }
}) 


export default recipeRouter