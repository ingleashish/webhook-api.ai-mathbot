"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/math", function(req, res) {
    alert(req.body);
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.firstNumber &&
    req.body.result.parameters.secondNumber
      ? (req.body.result.parameters.firstNumber + req.body.result.parameters.secondNumber)
      : "Seems like some problem. Speak again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-mathbot-nodejs-sample"
  });
});

restService.listen(process.env.PORT || 3000, function() {
    console.log("Server up and listening");
});