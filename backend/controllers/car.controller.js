const db = require("../models");
const Car = db.car;

// Create and Save a new Car
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Car
    const car = {
        id: req.body.id,
        sold: req.body.occupied
    };

    // Save Car in the database
    Car.create(car)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Car."
            });
        });
};

    // Retrieve all cars
    exports.findAll = (req, res) => {
    console.log("its working.");
    Car.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving boxes."
            });
        });
    };

    //Retrieve single object by id
    exports.findOne = (req, res) => {
        const id = req.params.id;
    
        Tutorial.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving car with id=" + id
            });
        });
    };

    //Update an object
    exports.update = (req, res) => {
        const id = req.params.id;
      
        Car.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Car was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Car with id=${id}. Maybe Car was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Tutorial with id=" + id
            });
          });
      };

      //Delete all objects
      exports.deleteAll = (req, res) => {
        Car.destroy({
          where: {},
          truncate: false
        })
          .then(nums => {
            res.send({ message: `${nums} Cars were deleted successfully!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while removing all cars."
            });
          });
      };

      //Delete a single object by id
      exports.delete = (req, res) => {
        const id = req.params.id;
      
        Tutorial.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Car was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete Car with id=${id}. Maybe Car was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Car with id=" + id
            });
          });
      };
