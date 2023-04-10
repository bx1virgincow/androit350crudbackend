//all imports from various files and modules
const express = require("express");
const expressInstance = express();
const { expRoute } = require("./routes/authroute");
const { todoRoute } = require('./routes/todoroute');
const cors = require('cors')

//expressInstance.use("*", checkAuth);
expressInstance.use(cors())
expressInstance.use(express.json());
expressInstance.use("/auth", expRoute);
expressInstance.use('/task', todoRoute)

expressInstance.get("/", (req, res) => {
  console.log("run last!");
  return res.status(200).json({ message: "ok" });
});

expressInstance.listen(1234, console.log("listening on port 1234"));
