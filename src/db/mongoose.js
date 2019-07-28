const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL_APP, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


