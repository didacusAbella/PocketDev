const express = require("express");
const logger = require('morgan')
const application = express();
const CONFIG = require("./config");
const career = require("./routes/career/career");
const theory = require("./routes/theory/theory");
const bodyparser = require("body-parser");

application.use(bodyparser.urlencoded({extended: true}));
application.use(bodyparser.json());
application.use(logger('dev'));
application.use(express.static('public'));

application.use("/career", career);
application.use("/theory", theory);
application.listen(CONFIG.PORT, CONFIG.HOST, function(req, res){
  console.log(`Server Started at ${CONFIG.HOST} on port ${CONFIG.PORT}`);
});