const router = require("express").Router();
//const { models: { User }} = require('../db')
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    res.json("this is a test to see that this route is working");
  } catch (err) {
    next(err);
  }
});
