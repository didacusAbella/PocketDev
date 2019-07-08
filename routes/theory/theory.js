const express = require('express');
const newClient = require("../utils/client");
const formatter = require("../utils/formatResult")
const query = require("../theory/query");
const endPoints = require("../utils/endpoint");
const router = express.Router();
const localClient = newClient.buildClient(endPoints.localhost);


router.get("/base", function(req,res){
    localClient.query(query.getBaseTheory())
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

router.get("/intermediate", function(req,res){
    localClient.query(query.getIntermediateTheory())
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

router.get("/advanced", function(req,res){
    localClient.query(query.getAdvacedTheory())
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

router.get("/career/:name", function(req,res){
    localClient.query(query.getTheoryByCareer(req.params.name))
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

router.get("/:name", function(req,res){
    localClient.query(query.getTheoryByName(req.params.name))
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

module.exports = router;