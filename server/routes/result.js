const express = require("express");

const ResultCtrl = require("../controllers/result");

const router = express.Router();

router.post("/result", ResultCtrl.createResult);
router.put("/result/:id", ResultCtrl.updateResult);
router.delete("/result/:id", ResultCtrl.deleteResult);
router.get("/result/:id", ResultCtrl.getResultById);
router.get("/results", ResultCtrl.getResults);
router.get("/query", ResultCtrl.searchResults);

module.exports = router;
