const express = require('express');
const newClient = require("../utils/client");
const query = require("./query");
const endPoints = require("../utils/endpoint");
const formatter = require("../utils/formatResult");
const router = express.Router();
const localClient = newClient.buildClient(endPoints.localhost);

router.get("/", function (req, res) {
    localClient.query(query.allCareers())
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
});

router.get("/:name", function(req, res){
    localClient.query(query.getCareerByName(req.params.name))
    .execute()
    .then(result => res.json(formatter(result)))
    .catch(err => res.json(err));
})

module.exports = router;