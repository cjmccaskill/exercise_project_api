const { Router } = require("express");
const Exercise = require("../models/exercise");
const router = Router();

// Index route
router.get("/", async (req, res) => {
  res.json(await Exercise.find({}).catch((err) => res.status(400).json(err)));
});

// Create route
router.post("/", async (req, res) => {
  res.json(
    await Exercise.create(req.body).catch((err) => res.status(400).json(err))
  );
});
// Update route
router.put("/:id", async (req, res) => {
  res.json(
    await Exercise.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).catch((err) => res.status(400).json(err))
  );
});
// Destroy route
router.delete("/:id", async (req, res) => {
  res.json(
    await Exercise.findByIdAndDelete(req.params.id).catch((err) =>
      res.status(400).json(err)
    )
  );
});

module.exports = router;
