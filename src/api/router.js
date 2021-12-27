//import middlware / component routes
//error handling

const routers = require('./server');
const express = require('express');
// guaranteed to get dependencies

module.exports = () => {
	const app = express.Router();
	routers.routers.user(app)
    console.log("router.js");
    

	return app
}