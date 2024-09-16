import express from "express"

// Database connection
import db from "../db/connection.js";

// To help convert the id from string to ObjectId for the _id
import { ObjectId } from "mongodb";

// router is an instance of the express router
// used to define routes
// The router will be added as a middleware and will take control of requests starting with path/record
const record_router = express.Router();

// DB call to get all shoes
record_router.get("/", async (req, res) => {
    let collection = await db.collection("all_shoes");
    let results = await collection.find({}).toArray();
    res.send(results).status(200)
});

// DB call to get all shoes with a specific query
record_router.post("/", async (req, res) => {
    const queryClass = req.body.queryClass
    let queryArg = req.body.queryArg

    queryArg = queryArg.replace(/[^a-zA-Z0-9]/g, '');

    let query = {}
    if (queryClass === "name") {
        // Use regex for case-insensitive search in the "name" field
        query[queryClass] = { $regex: queryArg, $options: "i" };
    } else {
        // Standard exact match for other fields
        query[queryClass] = queryArg;
    }
    let collection = await db.collection("all_shoes");
    let results = await collection.find(query).toArray();
    res.send(results).status(200)
});

// DB call to get one specific shoe
record_router.get("/:id", async (req, res) => {
    let collection = await db.collection("all_shoes");
    let query = { _id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})

// DB call to insert one shoe
record_router.post("/insert_single_shoe", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            Score: req.body.Score,
            gender: req.body.gender,
            image: req.body.image,
            link: req.body.link,
            original_place: req.body.original_place,
            sale_price: req.body.sale_price,
            vendor: req.body.vendor
        };
        let collection = await db.collection("all_shoes");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

// DB call to insert multiple shoes
record_router.post("/insert_shoes", async (req, res) => {
    try {
        let newDocuments = req.body;
        let collection = await db.collection("all_shoes");
        let result = await collection.insertMany(newDocuments);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding multiple record");
    }
});

// // DB call to update a shoe
// record_router.patch("/:id", async (req, res) => {
//     try {
//         const query = { _id: new ObjectId(req.params.id) };
//         const updates = {
//             $set: {
//                 name: req.body.name,
//                 position: req.body.position,
//                 level: req.body.level,
//             },
//         };

//          let collection = await db.collection("records");
//          let result = await collection.updateOne(query, updates);
//          res.send(result).status(200);
//     } catch(err) {
//         console.error(err);
//         res.status(500).send("Error updating record");
//     }
// });

// // DB call to delete a shoe
// record_router.delete("/:id", async (req, res) => {
//     try {
//         const query = { _id: new ObjectId(req.params.id) };

//          let collection = await db.collection("records");
//          let result = await collection.deleteOne(query);
//          res.send(result).status(200);
//     } catch(err) {
//         console.error(err);
//         res.status(500).send("Error deleting record");
//     }
// });

export default record_router;