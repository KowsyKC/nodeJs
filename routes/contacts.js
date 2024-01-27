const path = require('path');

const express = require('express');

const contactController = require('../controllers/contact-us');

const router = express.Router();

// /contacts/contact-us => GET
router.get('/contact-us', contactController.getContactUs );

// /contacts/contact-us=> POST
router.post('/contact-us', contactController.postContactUs);

module.exports= router;

