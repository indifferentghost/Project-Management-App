const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const todosRouter = require('./routes/todos')
const projectsRouter = require('./routes/projects')

require('dotenv').config({ path: './config/.env' })

app.use(cookieParser())
app.use(express.json())
app.use('/user', userRouter)
app.use('/todos', todosRouter)
app.use('/projects', projectsRouter)

mongoose.connect(process.env.MONGO_DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('MongoDB connected!'))


app.listen(5000, () => {
    console.log("Server running on port 5000")
})