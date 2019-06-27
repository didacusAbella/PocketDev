const express = require("express");
const logger = require('morgan')
const application = express();
const CONFIG = require("./config");
const populator = require("./routes/populator")

application.use(logger('dev'));
application.use(express.static('public'));

application.use("/populator", populator);

application.listen(CONFIG.PORT, CONFIG.HOST, function(req, res){
  console.log(`Server Started at ${CONFIG.HOST} on port ${CONFIG.PORT}`);
});