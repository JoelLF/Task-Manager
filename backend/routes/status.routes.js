module.exports = app => {
    const status = require("../controllers/status.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Task
    router.post("/", status.create);
  
    // Retrieve all Tasks
    router.get("/", status.findAll);
  
    // Retrieve a single Task with id
    router.get("/:id", status.findOne);
  
    // Update a Task with id
    router.put("/:id", status.update);
  
    // Delete a Task with id
    router.delete("/:id", status.delete);
  
    // Delete all Tasks
    router.delete("/", status.deleteAll);
  
    app.use('/api/status', router);
  };