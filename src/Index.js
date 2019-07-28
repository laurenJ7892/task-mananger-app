const express = require('express');
require('./db/mongoose')
const multer = require('multer')


const userRouter = require('./Routers/user')
const taskRouter = require('./Routers/Tasks')

const app = express()
const port = process.env.PORT

// app in maintenance method so shut down all proceduires
// app.use((req, res, next) => {
//    res.status(503).send('Requests are disabled until maintenance is complete.')
// })


app.use(express.json())
// user Routes
app.use(userRouter)
// Task Routes
app.use(taskRouter)

const router = new express.Router()
app.use(router)

app.listen(port, () => {
    console.log('Server is up on Port ' + port);
})
