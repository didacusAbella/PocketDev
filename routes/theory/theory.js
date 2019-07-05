const express = require('express');
const newClient = require("../utils/client");
const query = require("../theory/query");
const endPoints = require("../utils/endpoint");
const router = express.Router();
const localClient = newClient.buildClient(endPoints.localhost);


router.get("/base", function(req,res){
    localClient.query(query.getBaseTheory())
    .execute()
    .then((result) => res.json(result))
    .catch((err)=> res.json(err));
})

router.get("/intermediate", function(req,res){
    localClient.query(query.getIntermediateTheory())
    .execute()
    .then((result) => res.json(result))
    .catch((err)=> res.json(err));
})

router.get("/advanced", function(req,res){
    localClient.query(query.getAdvacedTheory())
    .execute()
    .then((result) => res.json(result))
    .catch((err)=> res.json(err));
})

/*router.get("/theoryByName", function(req,res){
    const name = req.query.name; 
    localClient.query(query.getTheoryByName(name))
    .execute()
    .then((result) => res.json(result))
    .catch((err)=> res.json(err));
})*/


module.exports = router;