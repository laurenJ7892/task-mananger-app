const mongoose = require('mongoose');

const data = process.env.MONGO_DB;
console.log(data);

mongoose.connect(data, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
