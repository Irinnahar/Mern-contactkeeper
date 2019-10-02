const express = require('express');
const router = express.Router();

// @route GET /auth/contacts
// @desc  Get all contact list
// @access Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
})

// @route POST /auth/contacts
// @desc  Add a contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add new contact');
})

// @route PUT /auth/contacts
// @desc  Update a contact
// @access Private
router.put('/', (req, res) => {
  res.send('Update contact');
});


// @route DELETE /auth/contacts
// @desc  Delete a contact
// @access Private
router.delete('/', (req, res) => {
  res.send('Delete a contact')
})

module.exports = router;