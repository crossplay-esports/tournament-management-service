import ScoringModel from "../data/mongo/schemas/scoring";
const asyncHandler = require("express-async-handler");

// Display list of all scorings.
exports.scoring_list = asyncHandler(async (req, res, next) => {
  const scorings = await ScoringModel.find();
  res.send(scorings);
});

// Display detail page for a specific scoring.
exports.scoring_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: scoring detail: ${req.params.id}`);
});

// Handle scoring create on POST.
exports.scoring_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: scoring create POST");
});

// Handle scoring delete on POST.
exports.scoring_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: scoring delete POST");
});

// Handle scoring update on POST.
exports.scoring_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: scoring update POST");
});
