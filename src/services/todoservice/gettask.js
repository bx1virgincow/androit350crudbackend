const {dbConnect, client} = require('../../dbconnection')

const getTodo= async(req, res)=>{
    const db = await dbConnect();
        const collection = await db.collection('tasklist')
    const results = await collection.find().toArray()

    res.send(results).status(200)

    await client.close()
}

module.exports = {getTodo}


// Get a list of 50 posts
// router.get("/", async (req, res) => {
//     let collection = await db.collection("posts");
//     let results = await collection.find({})
//       .limit(50)
//       .toArray();
  
//     res.send(results).status(200);
//   });