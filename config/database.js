const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhoast:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
}).then(()=> console.log('Connection succesful'))
  .catch((err) => console.log(err));

  /*const mongoose = require('mongoose')

require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;

async function main() {
  await mongoose.connect(MONGO_URL)
  console.log('Conectou ao Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose*/