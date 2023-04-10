const { ObjectId } = require("mongodb");
const { dbConnect, client } = require("../../dbconnection");

const deleteTodo = async (req, res) => {
  try {
    const db = await dbConnect();
    const query = { _id: new ObjectId(req.params.id) };
    const collection = await db.collection("tasklist");
    const result = await collection.deleteOne(query);
    if (result.deletedCount === 1) {
      res.status(200).json({ delete: "successfully" });
    } else {
      res.status(204).json({ delete: "unsuccessful" });
    }
  } catch (e) {
    console.log('error',e)
  }
    await client.close()
};

module.exports = { deleteTodo };
