// import mongodb
const MongoClient = require("mongodb").MongoClient;

//creat connectionString to the database
//database name : tt_db
const client = new MongoClient("mongodb://localhost:27017/tt_db");

async function dbConnect() {
    let conn;
    try {
      conn = await client.connect();
    } catch (e) {
      console.log(e);
    }
    return conn.db("tt_db");
  }
  
module.exports = { dbConnect, client };
  