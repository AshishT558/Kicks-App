import { MongoClient, ServerApiVersion } from "mongodb"

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true, 
    },
});

try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful conneciton
    await client.db("admin").command({ ping: 1});
    console.log("Pinged your deployment. Connected to MongoDB successfully");
}
catch(err) {
    console.error(err)
}

let db = client.db("shoes");

export default db;