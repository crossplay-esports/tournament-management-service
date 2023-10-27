const express = require("express");
const router = express.Router();

// Require controller modules.
const scoring_controller = require("../controllers/scoring");


// POST request for creating scoring.
router.post("/create", scoring_controller.scoring_create_post);

// POST request to delete scoring.
router.post("/:id/delete", scoring_controller.scoring_delete_post);

// POST request to update scoring.
router.post("/:id/update", scoring_controller.scoring_update_post);

// GET request for one scoring.
router.get("/:id", scoring_controller.scoring_detail);

// GET request for list of all scorings.
router.get("/", scoring_controller.scoring_list);

export default router;