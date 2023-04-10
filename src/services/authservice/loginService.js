//importing db
const jwt = require("jsonwebtoken");
const { dbConnect, client } = require("../../dbconnection");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    //running the database
    let db = await dbConnect();
    //geting the table
    let User = await db.collection("user");
    //getting user input
    const { username, password } = req.body;
    //validating user input
    if (!(username && password)) {
      return res.status(400).send("All inputs are required");
    }

    //validate if user exist
    const user = await User.findOne({ username });

    //checking for user and comparing to data
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user_id: user._id,
          username,
        },
        "asdf",
        {
          expiresIn: "24h",
        }
      );

      user.token = token;
      //returning th user
      res.status(200).json(user);
    }
    return res.status(401).send("Unauthorized login");
  } catch (e) {
    console.log(e)
  }

  await client.close();
};

module.exports = { login };
