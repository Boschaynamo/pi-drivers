const axios = require("axios");
const { Team } = require("../db");
module.exports = async (req, res) => {
  try {
    const { data } = await axios.get("http://localhost:5000/drivers");
    const onlyTeams = data
      .map((driver) => {
        return driver.teams?.split(/,\s*/);
      })
      .flat();
    const uniqueTeams = [...new Set(onlyTeams.map(team => team?.trim()))].filter((team) => team);
    //uniqueTeams has the teams clean and in an array: ["McLaren","Mercedes","Prost",...,"Team"]

    //Formatting for db
    const focTeams = uniqueTeams.map((team) => ({
      where: {
        nombre: team,
      },
      defaults: {
        nombre: team,
      },
    }));

    for (let i = 0; i < focTeams.length; i++) {
      const [team, created] = await Team.findOrCreate(focTeams[i]);
        // console.log(team, created);
    }

    const orderedTeams = uniqueTeams.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()))
    return res.status(200).json(orderedTeams);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
