import express from "express";
import userRouter from "./users.js";

const router = express.Router();

router.use((request, require, next) => {
  console.log("Middleware");
  next();
});

router.use(userRouter);

export default router;
