require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOption = require("./configs/cors")
const morgan = require("morgan");
const mongoose = require("./db/connection");
const app = express();
const { PORT } = process.env || 3000;

// Import routers
const userRouter = require("./controllers/user");
const exerciseRouter = require("./controllers/exercise");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Test if server is working
app.get("/", (req, res) => res.send(`🤘🏼 Server is working!`));

// Routes
app.use("/user", userRouter);
app.use("/exercise", exerciseRouter);

app.listen(PORT, () => console.log(`👍🏼 Server is running on port: ${PORT}`));
