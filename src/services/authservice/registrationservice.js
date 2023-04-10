const {dbConnect} = require('../../dbconnection')
const  bcrypt  = require('bcrypt')
const jwt = require('jsonwebtoken')

const registeruser = async (req, res) => {
  console.log(req.body)
    //try catch
  try {
    const db = await dbConnect();
    const User = db.collection('user');
    //getting the user input
    const { firstname, lastname, username, password } = req.body;
    //validate the user input
    if (!(username && password && firstname && lastname)) {
      return res.status(400).send("All fields are required");
    }
    //checking if the user already exist
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }

    //encrypting user password in mongodb
    encryptedPassword = await bcrypt.hash(password, 10)
    //create user in the database
    const user = User.insertOne({
      firstname,
      lastname,
      username,
      password: encryptedPassword,
    });

    //create token
    const token= jwt.sign(
        {user_id: user._id, username},"asdf",{
            expiresIn: '24h'
        })

    //save user token
    user.token = token
    //return new user
    return res.status(201).json(user)

  } catch (e) {
    console.log(e)
  }
};

module.exports = {registeruser}