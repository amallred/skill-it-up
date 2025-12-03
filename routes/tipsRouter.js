import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'

const tipsRouter = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const tipsFilePath = path.join(
    __dirname,
    "..",
    "data",
    "tips.json"
)

async function getAllTips() {
    try {
        const tipsData = await fs.readFile(tipsFilePath)
        const tips = JSON.parse(tipsData)

        return tips
    } catch (error) {
        console.error('error', error.message)
    }
}

tipsRouter.get('/', async (req, res) => {
    const recipes = await getAllRecipes()
    res.status(200).json({
        data: recipes
    })
})

export default tipsRouter