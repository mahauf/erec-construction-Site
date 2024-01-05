// routes/api.js
const express = require('express');
const router = express.Router();
const { User } = require('../models/user'); // Import as { User }
const { Text } = require('../models/text'); // Import as { Text }


router.get('/texts',async(req,res)=>{
  const text=await Text.find();
  res.json(text)
})

router.get('/users',async(req,res)=>{
  const user=await User.find();
  res.json(user)
})
// Create user
router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create text
router.post('/texts', async (req, res) => {
  try {
    const newText = await Text.create(req.body);
    res.status(201).json(newText);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
