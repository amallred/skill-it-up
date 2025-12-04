import express from 'express'
import cors from 'cors'
import recipesRouter from './routes/recipesRouter.js'
import tipsRouter  from './routes/tipsRouter.js'

const app = express()
const port = 2025

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('./public'))

app.use('/api/recipes', recipesRouter)
app.use('/api/tips', tipsRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    console.log('Press Ctrl + C to end this process')
})