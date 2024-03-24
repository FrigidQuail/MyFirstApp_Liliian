var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET ticked items - boolean */
  // Handle GET request
router.get("/api/tickItem", function (req, res, next) {
  db("SELECT * FROM tickItem;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});


  // Handle POST request for creating a new tick item
router.post('/api/tickItem', (req, res) => {
  let { itemId = null, isChecked = false} = req.body;

  res.status(200).json({ message: 'Item ticked successfully' });
});

module.exports = router;




// module.exports = router;

// app.get('/api/data', async (req, res) => {
//   try {
//       // Fetch data from the database
//       //but where/how to indicate the right db from model folder?
//       const data = await fetchDataFromDatabase();

//       // Send response back to client with the fetched data
//       res.json(data);
//   } catch (error) {
//       console.error('Error fetching data from database:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });

//POST request url: http://localhost:5173/api/tick-item