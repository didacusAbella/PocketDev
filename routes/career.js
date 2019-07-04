const express = require('express');
const newClient = require("./utils/client");
const query = require("./utils/query");
const endPoints = require("./utils/endpoint");
const router = express.Router();
const localClient = newClient.buildClient(endPoints.localhost);

router.get("/allCareers", function (req, res) {
    localClient.query(query.allCareers())
    .execute()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/getCareerByName", function(req, res){
    const name = req.query.name; 
    localClient.query(query.getCareerByName(name))
    .execute()
    .then((result) => res.json(result))
    .catch((err)=> res.json(err));
})

module.exports = router;