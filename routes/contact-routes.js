const express = require("express");
const { getContacts } = require("../controllers/contact-contoller");

const router = express.Router();

router.get("/contacts", getContacts);

module.exports = router;
