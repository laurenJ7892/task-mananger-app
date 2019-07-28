const mongoose = require('mongoose');

const data = process.env.MONGO_DB;

mongoose.connect(data, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
