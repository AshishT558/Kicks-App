import express from "express"

// Database connection
import db from "../db/connection.js";

// To help convert the id from string to ObjectId for the _id
import { ObjectId } from "mongodb";

// router is an instance of the express router
// used to define routes
// The router will be added as a middleware and will take control of requests starting with path/record
const record_router = express.Router();

// This section will help you get a list of all the records
record_router.get("/", async (req, res) => {
    let collection = await db.collection("all_shoes");
    let results = await collection.find({}).toArray();
    res.send(results).status(200)
});

// This section will help you get a single record by id
record_router.get("/:id", async (req, res) => {
    let collection = await db.collection("all_shoes");
    let query = { _id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})

// This section will help you create a new record
record_router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            position:req.body.position,
            level: req.body.level,
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

// This section will help update a record by id
record_router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.level,
            },
        };

         let collection = await db.collection("records");
         let result = await collection.updateOne(query, updates);
         res.send(result).status(200);
    } catch(err) {
        console.error(err);
        res.status(500).send("Error updating record");
    }
});

// This section will help delete a record by id
record_router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

         let collection = await db.collection("records");
         let result = await collection.deleteOne(query);
         res.send(result).status(200);
    } catch(err) {
        console.error(err);
        res.status(500).send("Error deleting record");
    }
});

export default record_router;