const db = require("../models");
const Status = db.status;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.StatusName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  

    const status = {
      StatusName: req.body.StatusName
    };
  

    Status.create(status)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Status."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Status.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving statuses."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Status.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Status with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Status.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Status was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Status with id=${id}. Maybe Status was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Status with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Status.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Status was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Status with id=${id}. Maybe Status was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Status with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    Status.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Statuses were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all statuses."
        });
      });
  };