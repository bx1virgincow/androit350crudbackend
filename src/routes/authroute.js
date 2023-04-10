//getting modules into exp
const exp = require("express");
//importing loginService
const { login } = require("../services/authservice/loginService");
const { registeruser } = require('../services/authservice/registrationservice')

const expRoute = exp.Router();
expRoute.route("/login").post(login);
expRoute.route("/register").post(registeruser)

module.exports = { expRoute };
