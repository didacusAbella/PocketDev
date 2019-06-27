const express = require('express');
const newClient = require("./utils/client");
const query = require("./utils/query");

const router = express.Router();
const client = newClient.buildClient("http://localhost:3030/pd");

router.get("/example", function (req, res) {
    client.query(query.example())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.post("/linguaggi", function(req, res){
    client.query(query.insertLanguages())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.post('/book', function(req,res){
    client.query(query.insertBooks())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

router.post('/tool', function(req,res){
    client.query(query.insertTools())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

router.post('/framwork', function(req,res){
    client.query(query.insertFrameworks())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})




module.exports = router;