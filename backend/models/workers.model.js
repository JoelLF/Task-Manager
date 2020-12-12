module.exports = (sequelize, Sequelize) => {
    const Worker = sequelize.define("worker", {

      WorkerName: {
        type: Sequelize.STRING
      }
    }, { timestamps: false });

    Worker.removeAttribute('id');
  
    return Worker;
  };