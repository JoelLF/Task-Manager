module.exports = (sequelize, Sequelize) => {
  const Status = sequelize.define("status", {

    StatusName: {
      type: Sequelize.STRING
    }
  }, { timestamps: false });

  Status.removeAttribute('id');

  return Status;
};