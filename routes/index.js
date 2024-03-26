var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET ticked items - boolean */
  // Handle GET request
router.get("/api/itemtick", function (req, res, next) {
  db("SELECT * FROM itemTick;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});



  // Handle POST request for creating a new tick item
router.post('/api/itemTick', async (req, res) => {
  let { itemId, isChecked = true} = req.body;
  try {
    await db(`INSERT INTO itemId ("${itemId}", "${isChecked}");`)
    let response = await db("SELECT * FROM itemId;")
    res.send(response.data);
  } catch(error) {
    console.error('Error occurred:', error);
  res.status(200).json({ message: 'Item successfully ticked' });
}});

module.exports = router;
