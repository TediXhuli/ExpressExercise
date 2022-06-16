import express from "express";
import bodyParser from "body-parser";
import Router from "./router/index.js";

const Server = () => {
  const App = express();
  App.use(bodyParser.json());

  App.use(Router);

  App.listen(3000, "127.0.0.1", () => {
    console.log("Server started");
  });
};

Server();
