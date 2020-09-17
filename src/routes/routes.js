const { Router } = require('express');
const path = require('path');
const router = Router();

router.get('/', (req, res) => {
  res.send('Mi Primera Clase Backend');
});

module.exports = router;