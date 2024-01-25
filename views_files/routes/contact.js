const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

router.post('/submit', (req, res, next) => {
    const { name, email } = req.body;
    // Handle form submission logic here
    res.redirect('/success');
});

module.exports = router;