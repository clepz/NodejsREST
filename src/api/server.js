//declare everything required for our express server:
// import middlware / component routes
// error handling

//import auth from './routes/auth';
const user = require ('./components/users/users-controller');

// guaranteed to get dependencies
module.exports = {
    middlewares: [],
    routers:[
        //auth,
        user,
    ],
}