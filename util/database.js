const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://tome:tome@cluster0.rjx0e.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {   
    console.log('Connected');
    _db = client.db();
    callback(); 
  })
  .catch(err => {
    console.log(err)
    throw err;
  });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No db found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;





