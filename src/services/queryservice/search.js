const { ObjectId } = require("mongodb");
const { dbConnect, client } = require("../../dbconnection");

const makesearch = async (req, res) => {
  try {
    //call database and run
    const db = await dbConnect();
    //the query to make
    const query = { title: req.body.title };
    //connecting to the table
    const collection = await db.collection('tasklist');
    //result
    const result = await collection.find(query).toArray();

    res.status(200).json(result);
  } catch (e) {
    console.log("error");
    throw e;
  }
  await client.close()
};

module.exports = { makesearch}