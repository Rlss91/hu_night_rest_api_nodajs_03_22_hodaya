const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require("./routers/api");

const app = express();

//Connect to db:
mongoose
  .connect("mongodb://localhost/project_rest_api")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch(() => {
    console.log("could not connect to mongoDB");
  });

//Apply middleware:
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Routeing:
app.use("/api", apiRouter);

//Connected to port:
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
