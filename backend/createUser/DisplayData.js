const express = require('express');
const router = express.Router();

router.post('/mangoData', (req, res) => {
  try {
    // console.log(global.mango_data);
    res.send([global.mango_data, global.mango_items]);
  } catch (error) {
    console.error(error.message);
    res.send('Server Error');
  }
});

module.exports = router;
