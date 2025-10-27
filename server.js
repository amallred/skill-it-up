import express from 'express'
import cors from 'cors'
import recipesRouter from './routes/recipesRouter.js'

const app = express()
const port = 5000

app.use(cors)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(express.static('./public'))

app.use('/api/recipes', recipesRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    console.log('Press Ctrl + C to end this process')
})