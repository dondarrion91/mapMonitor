const express = require("express");
const router = express.Router();
const placesController = require("../controllers/places.controller");

router.route("/places").get(placesController.getAllPlaces);

module.exports = router;
