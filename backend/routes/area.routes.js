module.exports = app => {
    const area = require("../controllers/area.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Area
    router.post("/", area.create);
  
    // Retrieve all Areas
    router.get("/", area.findAll);
  
    // Retrieve a single Area with id
    router.get("/:id", area.findOne);
  
    // Update a Areea with id
    router.put("/:id", area.update);
  
    // Delete a Area with id
    router.delete("/:id", area.delete);
  
    // Delete all Areas
    router.delete("/", area.deleteAll);
  
    app.use('/api/area', router);
  };