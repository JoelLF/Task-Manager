const db = require("../models");
const Area = db.area;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.AreaName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }


  const area = {
    AreaName: req.body.AreaName,
    Workers: req.body.Workers,
    Coordinator: req.body.Coordinator
  };


  Area.create(area)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Area."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Area.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving areas."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Area.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Area with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Area.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Area was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Area with id=${id}. Maybe Area was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Area with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Area.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Area was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Area with id=${id}. Maybe Area was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Area with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Area.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Areas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all areas."
      });
    });
};