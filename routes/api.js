const express = require('express');
const router = express.Router();
const { Player, Attacking } = require('../models');
const csvtojson = require('csvtojson');
const attacking = require('../models/attacking');
// const dataset = require('../datasets');

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

router.get("/table",(req,res,next)=>{
    Attacking.findAll().then(data => res.json(data)).catch(next);
});

router.post("/table",(req,res)=>{
    const filename = 'E:/Ringover App/Ringover-app/datasets/attacking.csv';
    csvtojson().fromFile(filename).then(source=>{
        
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            assists= source[i]["assists"],
            corner_taken= source[i]["corner_taken"],
            offsides= source[i]["offsides"],
            dribbles= source[i]["dribbles"],
            match_played= source[i]["match_played"];
            Attacking.create({
                player_name : player_name,
                club : club,
                position : position,
                assists : assists,
                corner_taken : corner_taken,
                offsides : offsides,
                dribbles : dribbles,
                match_played : match_played
            }).then(data => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            })
        }
    })
    res.sendStatus(200);
})

module.exports = router;