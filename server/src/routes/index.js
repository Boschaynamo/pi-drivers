const { Router } = require("express");
//mis imports

const getDrivers = require("../controllers/getDrivers");

const router = Router();
//mis rutas

router.get("/drivers", getDrivers);

module.exports = router;
