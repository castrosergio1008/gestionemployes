const mongoose = require("mongoose");
const uri =
  "mongodb+srv://thepropaintgroup:Dz25L1GiCxsywOgB@thepropaintgroup.bokkh6t.mongodb.net/thepropaintgroup?retryWrites=true&w=majority";

exports.mongoConnect = () => {
  const mongoStringConnection = uri;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    "errore",
    console.error.bind(console, "Mongodb connection error")
  );
};
