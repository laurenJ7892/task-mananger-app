const mongoose = require('mongoose');

console.log(process.env.MONGO_DB);

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
