const router = require('express').Router();

router.use('/getHTML', require('./get-html'));

module.exports = router;