const router = require("express").Router();
const Book = require("../../models/Book.js");

router.post("/", async (req, res) => {
  try {
    const { body } = req;

    let result = await Book.create(body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let result = await Book.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await Photo.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
