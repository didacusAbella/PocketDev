const express = require('express');
const newClient = require("./utils/client");
const query = require("./utils/query");
const endPoints = require("./utils/endpoint");
const router = express.Router();
const localClient = newClient.buildClient(endPoints.localhost);

router.get("/example", function (req, res) {
    localClient.query(query.example())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.post("/linguaggi", function(req, res){
    localClient.query(query.insertLanguages())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.post('/book', function(req,res){
    localClient.query(query.insertBooks())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

router.post('/tool', function(req,res){
    localClient.query(query.insertTools())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

router.post('/framwork', function(req,res){
    localClient.query(query.insertFrameworks())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})




module.exports = router;