const express = require('express');
const router = express.Router();

// @route GET /api/auth
// @des Get logged in user
// @access Private
router.get('/', (req, res) => {
  res.send('Get logged in user')
})

// @route POST /api/auth
// @des   Auth user and get token
// @access public
router.post('/', (req, res) => {
  res.send('Login User')
})

module.exports = router;