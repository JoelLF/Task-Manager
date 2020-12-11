module.exports = (sequelize, Sequelize) => {
    const Area = sequelize.define("area", {

      AreaName: {
        type: Sequelize.STRING
      },
      Workers: {
        type: Sequelize.INTEGER
      },
      Coordinator: {
        type: Sequelize.STRING
      }
    }, { timestamps: false });
  
    return Area;
  };