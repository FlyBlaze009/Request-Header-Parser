const express = require('express');
const router = express.Router();

router.get('/whoami', (req, res) => {
  try {
    res.status(200).json({
      ipaddress: req.ip,
      language: req.headers['accept-language'],
      software: req.headers['user-agent'],
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
});

module.exports = router;
