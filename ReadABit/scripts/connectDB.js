
const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.MONGODB_URI;
// example uri: mongodb+srv://<user>:<password>@books.cuyyq.mongodb.net/<dbName>?retryWrites=true&w=majority

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const connectToDB = () => {
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
};

module.exports = connectToDB;