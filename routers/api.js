const express = require("express");
const router = express.Router();

const userRouter = require("./users");
const authRouter = require("./auth");
const cardRouter = require("./cards");

//Routeing:
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/cards", cardRouter);

module.exports = router;
