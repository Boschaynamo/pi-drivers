const { Router } = require("express");
//mis imports

const getDrivers = require("../controllers/getDrivers");
const getDriverById = require("../controllers/getDriverById");

const router = Router();
//mis rutas

router.get("/drivers/:idDriver", getDriverById);
router.get("/drivers", getDrivers);

module.exports = router;
