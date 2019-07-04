const express = require("express");
const logger = require('morgan')
const application = express();
const CONFIG = require("./config");
const career = require("./routes/career");
const bodyparser = require("body-parser");

application.use(bodyparser.urlencoded({extended: true}));
application.use(bodyparser.json());
application.use(logger('dev'));
application.use(express.static('public'));

application.use("/career", career);

application.listen(CONFIG.PORT, CONFIG.HOST, function(req, res){
  console.log(`Server Started at ${CONFIG.HOST} on port ${CONFIG.PORT}`);
});