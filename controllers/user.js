const { Router } = require("express");
const User = require("../models/user");
const router = Router();

// Index route
router.get("/", async (req, res) => {
  res.json(await User.find({}).catch((err) => res.status(400).json(err)));
});

// Create route
router.post("/", async (req, res) => {
  res.json(
    await User.create(req.body).catch((err) => res.status(400).json(err))
  );
});
// Update route
router.put("/:id", async (req, res) => {
  res.json(
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(
      (err) => res.status(400).json(err)
    )
  );
});
// Destroy route
router.delete("/:id", async (req, res) => {
  res.json(
    await User.findByIdAndDelete(req.params.id).catch((err) =>
      res.status(400).json(err)
    )
  );
});

module.exports = router;
