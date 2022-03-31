import express from 'express'
import routes from './routes.js'
import cors from 'cors'

const app = express()

const PORT = 3000

app.use(cors())

app.use(express.json({ type: 'application/json' }))

app.use(routes)

app.listen(3000, () => {
    console.log(`O servidor está rodando na porta ${PORT}!`)
})

// app.get('/', (req,res) => {
//     res.json('ok')
// })