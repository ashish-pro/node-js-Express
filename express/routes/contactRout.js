const express = require("express");
const router = express.Router();
const {getContact,createContact,updateContact,deleteContact,getContactIndi} = require('../controllers/contactController');

router.route("/").get(getContact).post(createContact);
router.route("/:id").put(updateContact).delete(deleteContact).get(getContactIndi);
module.exports = router;