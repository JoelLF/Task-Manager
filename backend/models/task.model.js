module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      TaskName: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.STRING
      },
      Workers: {
          type: Sequelize.STRING
      }
    });
  
    return Task;
  };