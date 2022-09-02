const express = require('express');
const router = express.Router();
const { Player, Attacking, Attempts, Defending, Disciplinary, Distribution, GoalKeeping, Goals, KeyStats} = require('../models');
const csvtojson = require('csvtojson');
const { sendStatus } = require('express/lib/response');
// const dataset = require('../datasets');

router.get("/player",(req,res,next)=>{
    Player.findAll().then(data => res.json(data)).catch(next);
});
  
router.post("/player",(req,res)=>{
    // Player.destroy({
    //     truncate: true
    //   }).then(res.send("trincated"))
    //   .catch(res.send("OOPs"));
    (async ()=>{
        var data = await Attacking.findAll();
        for(var i=0;i<data.length;i++){
            let name = data[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        data = await Attempts.findAll();
        for(var i=0;i<data.length;i++){
            let name = data[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        data = await Defending.findAll();
        for(var i=0;i<data.length;i++){
            let name = data[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        data = await Disciplinary.findAll();
        for(var i=0;i<data.length;i++){
            let name = data[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        data = await Distribution.findAll();
        for(var i=0;i<data.length;i++){
            let name = data[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        data = await GoalKeeping.findAll();
        for(var i=0;i<data.length;i++){
            let name = data[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        data = await Goals.findAll();
        for(var i=0;i<data.length;i++){
            let name = data[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        data = await KeyStats.findAll();
        for(var i=0;i<data.length;i++){
            let name = data[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }


    })();
    res.sendStatus(200);
});

router.get("/attacking",(req,res,next)=>{
    Attacking.findAll().then(data => res.json(data)).catch(next);
    // Attacking.drop().then(res.sendStatus(200)).catch(console.log("error in dropping"));
});

router.post("/attacking",(req,res,next)=>{
    // Attacking.destroy({
    //     truncate: true
    // }).then(console.log("truncated"))
    // .catch(console.log("OOPs"));
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
            Attacking.findOrCreate({
                where: { 
                player_name : player_name,
                club : club,
                position : position,
                assists : assists,
                corner_taken : corner_taken,
                offsides : offsides,
                dribbles : dribbles,
                match_played : match_played
                }
            }).then(data => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            }); 
        }
    })
    
})


router.get("/attempts",(req,res,next)=>{
    Attempts.findAll().then(data => res.json(data)).catch(next);
});

router.post("/attempts",(req,res)=>{
    const filename = 'E:/Ringover App/Ringover-app/datasets/attempts.csv';
    csvtojson().fromFile(filename).then(source=>{
        
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            total_attempts= source[i]["total_attempts"],
            on_target= source[i]["on_target"],
            off_target= source[i]["off_target"],
            blocked= source[i]["blocked"],
            match_played= source[i]["match_played"];
            Attempts.create({
                player_name : player_name,
                club : club,
                position : position,
                total_attempts : total_attempts,
                on_target : on_target,
                off_target : off_target,
                blocked : blocked,
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


router.get("/defending",(req,res,next)=>{
    Defending.findAll().then(data => res.json(data)).catch(next);
});

router.post("/defending",(req,res)=>{
    const filename = 'E:/Ringover App/Ringover-app/datasets/defending.csv';
    csvtojson().fromFile(filename).then(source=>{
        
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            balls_recovered= source[i]["balls_recoverd"],
            tackles= source[i]["tackles"],
            t_won= source[i]["t_won"],
            t_lost= source[i]["t_lost"],
            clearance_attempted= source[i]["clearance_attempted"],
            match_played= source[i]["match_played"];
            Defending.create({
                player_name : player_name,
                club : club,
                position : position,
                balls_recovered : balls_recovered,
                tackles : tackles,
                t_won : t_won,
                t_lost : t_lost,
                clearance_attempted : clearance_attempted,
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


router.get("/disciplinary",(req,res,next)=>{
    Disciplinary.findAll().then(data => res.json(data)).catch(next);
});

router.post("/disciplinary",(req,res)=>{
    const filename = 'E:/Ringover App/Ringover-app/datasets/disciplinary.csv';
    csvtojson().fromFile(filename).then(source=>{
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            balls_recovered= source[i]["balls_recoverd"],
            fouls_committed= source[i]["fouls_committed"],
            fouls_suffered= source[i]["fouls_suffered"],
            red= source[i]["red"],
            yellow= source[i]["yellow"],
            minutes_played = source[i]["minutes_played"],
            match_played= source[i]["match_played"];
            Disciplinary.create({
                player_name : player_name,
                club : club,
                position : position,
                balls_recovered : balls_recovered,
                fouls_committed : fouls_committed,
                fouls_suffered : fouls_suffered,
                red : red,
                yellow : yellow,
                minutes_played : minutes_played,
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


router.get("/distribution",(req,res,next)=>{
    Distribution.findAll().then(data => res.json(data)).catch(next);
});

router.post("/distribution",(req,res)=>{
    const filename = 'E:/Ringover App/Ringover-app/datasets/distribution.csv';
    csvtojson().fromFile(filename).then(source=>{
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            pass_accuracy= source[i]["pass_accuracy"],
            pass_attempted= source[i]["pass_attempted"],
            pass_completed= source[i]["pass_completed"],
            cross_accuracy= source[i]["cross_accuracy"],
            cross_attempted= source[i]["cross_attempted"],
            cross_completed = source[i]["cross_complted"],
            freekicks_taken= source[i]["freekicks_taken"],
            match_played= source[i]["match_played"];
            Distribution.create({
                player_name : player_name,
                club : club,
                position : position,
                pass_accuracy : pass_accuracy,
                pass_attempted : pass_attempted,
                pass_completed : pass_completed,
                cross_accuracy : cross_accuracy,
                cross_attempted : cross_attempted,
                cross_completed : cross_completed,
                freekicks_taken : freekicks_taken,
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


router.get("/goalkeeping",(req,res,next)=>{
    GoalKeeping.findAll().then(data => res.json(data)).catch(next);
});

router.post("/goalkeeping",(req,res)=>{
    const filename = 'E:/Ringover App/Ringover-app/datasets/goalkeeping.csv';
    csvtojson().fromFile(filename).then(source=>{
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            saved= source[i]["saved"],
            conceded= source[i]["conceded"],
            saved_penalties= source[i]["saved_penalties"],
            cleansheets= source[i]["cleansheets"],
            punches_made= source[i]["punches_made"],
            match_played= source[i]["match_played"];
            GoalKeeping.create({
                player_name : player_name,
                club : club,
                position : position,
                saved : saved,
                conceded : conceded,
                saved_penalties : saved_penalties,
                cleansheets : cleansheets,
                punches_made : punches_made,
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


router.get("/goals",(req,res,next)=>{
    Goals.findAll().then(data => res.json(data)).catch(next);
});

router.post("/goals",(req,res)=>{
    const filename = 'E:/Ringover App/Ringover-app/datasets/goals.csv';
    csvtojson().fromFile(filename).then(source=>{
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            goals= source[i]["goals"],
            right_foot= source[i]["right_foot"],
            left_foot= source[i]["left_foot"],
            headers= source[i]["headers"],
            others= source[i]["others"],
            inside_area = source[i]["inside_area"]
            outside_area = source[i]["outside_areas"]
            penalties = source[i]["penalties"]
            match_played= source[i]["match_played"];
            Goals.create({
                player_name : player_name,
                club : club,
                position : position,
                goals : goals,
                right_foot : right_foot,
                left_foot : left_foot,
                headers : headers,
                others : others,
                inside_area : inside_area,
                outside_area : outside_area,
                penalties : penalties,
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


router.get("/keystats",(req,res,next)=>{
    KeyStats.findAll().then(data => res.json(data)).catch(next);
});

router.post("/keystats",(req,res)=>{
    const filename = 'E:/Ringover App/Ringover-app/datasets/key_stats.csv';
    csvtojson().fromFile(filename).then(source=>{
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            minutes_played= source[i]["minutes_played"],
            match_played= source[i]["match_played"],
            goals= source[i]["goals"],
            assists= source[i]["assists"],
            distance_covered= source[i]["distance_covered"];
            KeyStats.create({
                player_name : player_name,
                club : club,
                position : position,
                minutes_played : minutes_played,
                goals : goals,
                assists : assists,
                distance_covered : distance_covered,
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