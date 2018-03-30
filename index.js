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

    var firstNumber = req.body.result.parameters.firstNumber;
    var secondNumber = req.body.result.parameters.secondNumber;
    var actionName = req.body.result.metadata.intentName;
    var responseText;

    if(req.body.result &&
        req.body.result.parameters &&
        req.body.result.metadata &&
        firstNumber && secondNumber && intentName) 
        {
            switch (intentName) {
                case "Add":
                    responseText = firstNumber + secondNumber;
                    break;
                case "Division":
                    responseText = firstNumber / secondNumber;
                    break;
                case "Multiply":
                    responseText = firstNumber * secondNumber;
                    break;
                case "Substract":
                    responseText = firstNumber - secondNumber;
                    break;
            
                default:
                    responseText = "Seems like some problem. Speak again.";
                    break;
            }

        } else {
            responseText = "Seems like some problem. Speak again.";
        }
  
  return res.json({
    speech: responseText,
    displayText: responseText,
    source: "webhook-mathbot-nodejs-sample"
  });
});

restService.listen(process.env.PORT || 3000, function() {
    console.log("Server up and listening");
});