import express from "express";
import { DbConnection } from "../lib/db.config.js";
import {
  getUser,
  getUsers,
  storeUser,
  updateUser,
  deleteUser,
} from "../lib/users.js";
const userRouter = express.Router();
DbConnection();

userRouter.get("/users", async (request, response) => {
  const users = await getUsers();
  response.json(users);
});

/**
 * show method
 */
userRouter.get("/users/:id", (request, response) => {
  const { params } = request;

  const user = getUser({ id: params.id });

  response.json(user);
});

/**
 * create method
 */

userRouter.post("/users", async (request, response) => {
  const { name, email, password } = request.body;

  await storeUser({ name, email, password });

  response.status(201).json({ message: "User created succesfully" });
});

/**
 * update method
 */

userRouter.put("/users/:id", async (request, response) => {
  //const { id: userId } = request.params;

  const { name, email, password } = request.body;

  const { id } = request.params;

  const payload = {
    email,
    name,
    id,
    password,
  };

  await updateUser(payload);

  if (!name || !email) {
    response.status(400).json({ message: "Data not valid" });
  }

  response.status(200).json({ message: "User updated successfully" });
});
/**
 * delete method
 */

userRouter.delete("/users/:id", async (request, response) => {
  const { id } = request.params;

  await deleteUser({ id });

  response.status(200).json({
    message: "User deleted successfully",
  });
});
export default userRouter;
