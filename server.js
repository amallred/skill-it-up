import express from 'express'
import recipesRouter from './routes/recipesRouter.js'
import cors from 'cors'

const app = express()
const port = 5000

app.use(express.static('./public'))
app.use(cors)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/recipes', recipesRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhose:${port}`)
    console.log('Press Ctrl + C to end this process')
})