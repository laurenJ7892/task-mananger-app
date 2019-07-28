// Crud create, read, update delete
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'

// asynchronous connection to DB
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return  console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)

// db.collection('users').updateOne({
//         _id: new ObjectID("5cfc96be2814651ca0f8e254")
//     }, {
//         $inc: {
//             age: 1
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//             console.log(error)
//     })

// db.collection('tasks').updateMany({
//     completed: false
// }, {
//     $set: {
//         completed: true
//     }  
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })
// db.collection('users').deleteMany({
//     age:30
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

db.collection('tasks').deleteOne({
    description: "Vacuum House"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})

