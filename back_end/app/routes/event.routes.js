const { authJwt } = require("../middlewares");
const controller = require("../controllers/event.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //Create new Event
  app.post("/api/event",[authJwt.verifyToken, authJwt.isAdmin], controller.create);

  // Retrive all Event 
  app.get("/api/event", controller.findAll);
 
  // Retrieve a single Event with id
  app.get("/api/event/:id", controller.findOne);

  // Update a Event with id
  app.put("/api/event/:id",[authJwt.verifyToken, authJwt.isAdmin], controller.update);

  // Delete a Event with id
  app.delete("/api/event/:id", [authJwt.verifyToken, authJwt.isAdmin],controller.delete);

};