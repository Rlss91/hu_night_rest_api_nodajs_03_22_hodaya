const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require("./routers/api");
const config = require("config");
const chalk = require("chalk");

const app = express();

//Connect to db:
mongoose
  .connect(config.get("mongoConStr"))
  .then(() => {
    console.log(chalk.cyan("connected to mongoDB"));
  })
  .catch(() => {
    console.log(chalk.red("could not connect to mongoDB"));
  });

//Apply middleware:
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Routeing:
app.use("/api", apiRouter);

//Connected to port:
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(chalk.yellow(`Listening to port: ${PORT}`));
});
