const { Router } = require("express");
//mis imports

const getDrivers = require("../controllers/getDrivers");
const getDriver = require("../controllers/getDriver");

const router = Router();
//mis rutas

router.get("/drivers/:idDriver", getDriver);
router.get("/drivers", getDrivers);

module.exports = router;
