const express = require("express");
const router = express.Router();
const sitesController = require("../app/controllers/SiteController");

router.get("/api/template/:id", sitesController.template);
router.post("/api/find/:slug", sitesController.find);
router.post("/api", sitesController.add);
router.get("/", sitesController.index);
router.get("/api", sitesController.data);

module.exports = router;
