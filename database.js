import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://root:example@localhost:27017/?authSource=admin");
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("TP");
export default db;