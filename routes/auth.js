const router = require('express').Router();

router.post('/register', async (req, res) => {
  res.status(200).send('Register');
});


module.exports = router;