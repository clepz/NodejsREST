// Routing Islemleri
// component specific middleware in here.

const res = require('express/lib/response');
const deneme = require('./users-API');

module.exports =  (app) => {
    console.log("user-controller");
    app.get('/user', deneme);
}