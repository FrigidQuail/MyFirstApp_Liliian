var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.post('/api/tick-item', (req, res) => {
  // Extract data from the request body
  const { itemId, isChecked } = req.body;
  
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

