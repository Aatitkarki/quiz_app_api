const config = require("./config/configs");
const express = require("express");
const app = express();

const startServer = async () => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //Importing database modals
  require("./loaders/models")
  
  //Importing routes from loaders
  app.use(require("./loaders/routers"));

  

  //Importing database connection loaders
  await require("./loaders/mongo")();

  app.listen(config.PORT, () => {
    console.log("App is listening on port " + config.PORT);
  });
   
};

startServer();