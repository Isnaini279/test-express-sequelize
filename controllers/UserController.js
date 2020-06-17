// import { nanoid } from 'nanoid';

const db = require("../models");
const User = db.user;	//memanggil var di index yang mengarah ke model user
const Op = db.Sequelize.Op;
// const nanoid = require('nanoid');

// Create and Save a new Tutorial
exports.create = (req, res) => {

  	if(!req.body.username) {
  		res.status(400).send({
  			message: "Username cannot be empty"
  		});
  		return;
  	}

  	const data_user = {
  		id_user : 1,
  		username : req.body.username,
  		email : req.body.email,
  		password : "",
  		alamat : req.body.alamat,
  		no_tlp : req.body.no_tlp
  	}

    return data_user;

  	// User = create(data_user)
  	// 	.then(data => {
  	// 		res.send(data);
  	// 	})
  	// 	.catch(err => {
  	// 		res.status(500).send({
  	// 			message:
  	// 				err.message || "Some error occurred while creating the User."
  	// 		});
  	// 	});
};

exports.findAll = (req, res) => {
  	
  	// const username = req.query.username;
  	// var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  	// User.findAll({ where: condition }).then(data => {
   //    	res.send(data);
   //  })
    User.findAll().then(data => {
      	res.send(data);
    })
    .catch(err => {
      	res.status(500).send({
        	message:
          		err.message || "Some error occurred while retrieving tutorials."
      	});
    });
};