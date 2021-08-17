require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const { PORT, DB_URI } = process.env || 3000;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("connect", () => console.log(`🤘🏼 Mongo is connected!`));
db.on("disconnect", () => console.log(`👋🏼 Mongo is disconnected.`));
db.on("error", (err) => console.log(`❌ Error connecting ${err}`));

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`👍🏼 Server is running on port: ${PORT}`));
