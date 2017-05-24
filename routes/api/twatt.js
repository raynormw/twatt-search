const express = require('express');
const router = express.Router();
const twatt = require('../../controllers/twatt_controller');

router.get('/', twatt.search);

module.exports = router;
