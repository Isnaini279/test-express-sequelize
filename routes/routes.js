module.exports = app => {
  	const users = require("../controllers/UserController.js");

  	var router = require("express").Router();

  	// Create a new User
  	router.post("/add_user", users.create);

  	// Retrieve all Users
  	router.get("/", users.findAll);

  	app.use('/api/users', router);
}