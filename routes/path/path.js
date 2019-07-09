const express = require('express');
const newClient = require("../utils/client");
const formatter = require("../utils/formatResult")
const query = require("./query");
const endPoints = require("../utils/endpoint");
const router = express.Router();
const localClient = newClient.buildClient(endPoints.localhost);

router.get("/career/:name", function(req, res){
    localClient.query(query.getTheoryByCareer(req.params.name))
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

router.get("/:name", function(req, res){
    localClient.query(query.getTheoryByName(req.params.name))
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

router.get("/theory/:name", function(req, res){
    localClient.query(query.getTheoryEducationalPathByCareer(req.params.name))
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

router.get("/practice/:name", function(req, res){
    localClient.query(query.getPracticeEducationalPathByCareer(req.params.name))
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

router.post("/info", function(req, res){
    localClient.query(query.getInfoByPath(req.body.name))
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

module.exports = router;