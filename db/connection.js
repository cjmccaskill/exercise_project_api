require("dotenv").config();
const mongoose = require("mongoose");
const { DB_URI } = process.env;
const config = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(DB_URI, config);

const db = mongoose.connection;
db.on("connect", () => console.log(`🤘🏼 Mongo is connected!`));
db.on("disconnect", () => console.log(`👋🏼 Mongo is disconnected.`));
db.on("error", (err) => console.log(`❌ Error connecting ${err}`));

module.exports = mongoose;
