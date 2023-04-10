const { dbConnect, client } = require("../../dbconnection");

const addTodo = async (req, res) => {
  try {
    const db = await dbConnect()
    const collection =  db.collection("tasklist");
    const newData = req.body;
    console.log("new data ", newData);
    newData.date = new Date();
    const result = await collection.insertOne(newData);
    // return res.send(result).status(201);
    return res.status(201).json(result)
  } catch (e) {
    console.log(e);
  }
  await client.close()
};

module.exports = {addTodo}

