const { ObjectId } = require("mongodb");
const { dbConnect , client} = require("../../dbconnection");

const updateTodo = async (req, res) => {
  const db = dbConnect();
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: { title: req.body.title,
    description:req.body.description },
  };

  const collection = (await db).collection("tasklist");
  const result = await collection.updateOne(query, updates);
  res.status(200).json(result);

  await client.close()
};
module.exports = { updateTodo };
