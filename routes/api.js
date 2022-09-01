const express = require('express');
const router = express.Router();
const { Player } = require('../models');

router.get("/",(req,res,next)=>{
    Player.findAll().then(data => res.json(data)).catch(next);
});
  
router.post("/",(req,res)=>{
    Player.findOrCreate({
        where: { first_name: 'Abhijeet' }, 
        defaults: { first_name: 'Abhijeet', last_name: 'Singh', club: 'United' },
    }).then((player, created) => {
        if (created) {
        res.json(created);
        } else {
        // can update the instance here
        player.first_name = 'Abhijeet';
        player.last_name = 'Singh';
        player.club = 'India';
        // player.save();
        res.json(player);
        }
    });
});

module.exports = router;