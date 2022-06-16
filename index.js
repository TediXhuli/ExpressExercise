import express from "express";
import bodyParser from "body-parser";
import Router from "./router/index.js";

const Server = () => {
  const App = express();
  App.use(bodyParser.json());

  App.get("/", (req, res) => {
    res.json({
      message: "Erik Rocks",
    });
  });

  App.use(Router);

  App.listen(3000, () => {
    console.log("Server started");
  });
};

Server();
