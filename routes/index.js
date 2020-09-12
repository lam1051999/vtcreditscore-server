let router = require("express").Router();
const env = require("../env.json");

router.get("/", (req, res) => {
  res.send("server is up and running");
});
router.use(env.API, require("./api"));

module.exports = router;
