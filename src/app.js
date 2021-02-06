const config = require("./config/configs");
const express = require("express");
const app = express();

const startServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //Importing routes from loaders
  app.use(require("./loaders/routers"));

  //Importing database connection loaders

  app.listen(config.PORT, () => {
    console.log("App is listening on port " + config.PORT);
  });
};
