module.exports = app => {
    const workers = require("../controllers/workers.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Task
    router.post("/", workers.create);
  
    // Retrieve all Tasks
    router.get("/", workers.findAll);
  
    // Retrieve a single Task with id
    router.get("/:id", workers.findOne);
  
    // Update a Task with id
    router.put("/:id", workers.update);
  
    // Delete a Task with id
    router.delete("/:id", workers.delete);
  
    // Delete all Tasks
    router.delete("/", workers.deleteAll);
  
    app.use('/api/workers', router);
  };