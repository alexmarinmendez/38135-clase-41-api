import express from 'express'
import userRouter from './routes/users.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080

const options = {
    // origin: 'http://localhost:3000',
    origin: '*',
    optionSucessStatus: 200
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(options))
app.use('/users', userRouter)

app.listen(8080, () => console.log('Serve Up'))