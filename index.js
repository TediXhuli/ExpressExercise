import express, { request } from "express";
import bodyParser from "body-parser";
const Server = () => {
  const App = express();
  App.use(bodyParser.json());

  let users = [
    {
      id: 1,
      name: "Tedi",
      email: "xhuli.tedi@gmail.com",
    },
    {
      id: 2,
      name: "Test",
      email: "test.example@gmail.com",
    },
  ];

  App.get("/", (request, response) => {
    response.send('<script>alert("Hello")</script>');
  });

  /**
   * index method
   */
  App.get("/users", (request, response) => {
    response.json(users);
  });

  /**
   * show method
   */
  App.get("/users/:id", (request, response) => {
    const { params } = request;

    const user = users.find(({ id }) => id == params.id);

    if (!user) {
      response.status(404).json({ message: "User not found!" });
    }

    response.json(user);
  });

  /**
   * create method
   */

  App.post("/users", (request, response) => {
    const { name, email } = request.body;

    const payload = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(payload);

    if (!name || !email) {
      response.status(404).json({ message: "User not found!" });
    }
    response.json(users);
  });

  /**
   * update method
   */

  App.put("/users/:id", (request, response) => {
    const { id: userId } = request.params;
    const { name, email } = request.body;

    if (!name || !email) {
      response.status(404).json({ message: "User not found!" });
    }
    const user = users.find(({ id }) => id == userId);
    user.name = name;
    user.email = email;

    console.log(user, name, email);

    response.json(user);
  });

  /**
   * delete method
   */

  App.delete("/users/:id", (request, response) => {
    const { params } = request;

    const user = users.find(({ id }) => id == params.id);

    if (!user) {
      response.status(404).json({ message: "User not found!" });
    }

    const newUsers = users.filter(({ id }) => id != params.id);

    users = newUsers;

    response.status(200).json({
      users,
      message: "Delete OK",
    });
  });

  App.listen(3000, "127.0.0.1", () => {
    console.log("Server started");
  });
};

Server();
