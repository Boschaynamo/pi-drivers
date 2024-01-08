const { Router } = require("express");
//mis imports

const getDrivers = require("../controllers/getDrivers");
const getDriverById = require("../controllers/getDriverById");
const createDrivers = require("../controllers/createDrivers");
const getTeams = require("../controllers/getTeams");

const router = Router();
//mis rutas

router.get("/drivers/:idDriver", getDriverById);
router.get("/drivers", getDrivers);
router.post("/drivers", createDrivers);
router.get("/teams",getTeams)

module.exports = router;
