
const { MongoConnection } = require('../lib/Mongo');

//collection
const COLLECTION = "clients"

const findUsers = () => 
new Promise(async (resolve, reject) => {
    try {
        //inicializamos mondo cliente para retornar la cofinguracion de la db
        const DB = await MongoConnection()
        //obtenemos la colecion
        const clients = DB.collection(COLLECTION)
        const clientsList = await clients.find({}).toArray()
        resolve(clientsList)
    } catch (error) {
        reject(error)
    }
})

module.exports = {
    findUsers,
}