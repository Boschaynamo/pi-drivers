const { Driver, Team } = require("../../db");
const { Op } = require("sequelize");
const formatDataToApi = require('./formatDataToApi')

module.exports = async (substring) => {
  const result = await Driver.findAll({
    where: {
      apellido: {
        [Op.iLike]: `%${substring}%`,
      },
    },
    include: Team,
  });
  return result.map((driver) => formatDataToApi(driver.dataValues));
};
