//import middlware / component routes
//error handling

const routers = require('./server');
const express = require('express').Router;
// guaranteed to get dependencies

module.exports = () => {

	const app = express.Router();
    routers.middlewares.forEach(element => {
        element(app);
    });
	routers.routers.forEach(element => {
        element(app);
    });
    console.log("router.js");
    

	return app
}