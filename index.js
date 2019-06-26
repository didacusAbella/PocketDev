const express = require("express");
const application = express();
const CONFIG = require("./config");
application.use(express.static('public'));
application.listen(CONFIG.PORT, CONFIG.HOST, function(req, res){
  console.log(`Server Started at ${CONFIG.HOST} on port ${CONFIG.PORT}`);
});