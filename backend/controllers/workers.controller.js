const db = require("../models");
const Worker = db.workers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.WorkerName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }


  const worker = {
    WorkerName: req.body.WorkerName
  };


  Worker.create(worker)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Workers."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Worker.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving workers."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Worker.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Worker with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Worker.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Worker was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Worker with id=${id}. Maybe Worker was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Worker with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Worker.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Worker was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Worker with id=${id}. Maybe Worker was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Worker with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Worker.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Workers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Workers."
      });
    });
};