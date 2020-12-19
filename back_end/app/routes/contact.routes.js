const { authJwt } = require("../middlewares");
const controller = require("../controllers/contact.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //Create new message
  app.post("/api/contact", controller.create);

  // Retrive all message 
  app.get("/api/contact",controller.findAll);

}