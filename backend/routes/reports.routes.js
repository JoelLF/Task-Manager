module.exports = (app) => {
  var express = require("express");
  const { post } = require("request");
  var router = express.Router();
  var request = require("request");

  router.get("/", function (req, res, next) {
    var data = {
      template: { shortid: "rkJTnK2ce" },
      "items": [{
        "id": "1",
        "name": "test"
      }],
      options: {
        preview: true
      }
    };

    var options = {
      uri: "http://localhost:5488/api/report",
      method: "POST",
      json: data,
    };

    request(options).pipe(res);
  });

  app.use('/api/reports', router);
};