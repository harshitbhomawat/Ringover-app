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
        var data1 = await Attacking.findAll();
        for(var i=0;i<data1.length;i++){
            let name = data1[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data1[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        var data2 = await Attempts.findAll();
        for(var i=0;i<data2.length;i++){
            let name = data2[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data2[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        var data3 = await Defending.findAll();
        for(var i=0;i<data3.length;i++){
            let name = data3[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data3[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        var data4 = await Disciplinary.findAll();
        for(var i=0;i<data4.length;i++){
            let name = data4[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data4[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        var data5 = await Distribution.findAll();
        for(var i=0;i<data5.length;i++){
            let name = data5[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data5[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        var data6 = await GoalKeeping.findAll();
        for(var i=0;i<data6.length;i++){
            let name = data6[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data6[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        var data7 = await Goals.findAll();
        for(var i=0;i<data7.length;i++){
            let name = data7[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data7[i]["club"];
            if(last_name === undefined){
                last_name="";
            }
            let [player, created] = await Player.findOrCreate({
                where: { first_name: first_name, last_name: last_name, club:club },
            });
        }

        var data8 = await KeyStats.findAll();
        for(var i=0;i<data8.length;i++){
            let name = data8[i]["player_name"];
            let [first_name, last_name] = name.split(' ');
            let club = data8[i]["club"];
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

router.get("/check",(req,res)=>{
    (async ()=>{
        const [player,created] = await Player.findOrCreate({ 
            where: { first_name: "Mariano" ,last_name: "Díaz"} 
        });
        // player.club = "Real Madrid";
        // player.save();
        // player.set();
        // await player.update({
        //     club:"Real Madrid"
        // });
        res.json(player);
    })();
});

// router.post("/addid",(req,res)=>{
//     (async ()=>{
//         var data = await Attacking.findAll();
//         for(var i=0;i<data.length;i++){
//             let name = data[i]["player_name"];
//             let [first_name, last_name] = name.split(' ');
//             let club = data[i]["club"];
//             if(last_name === undefined){
//                 last_name="";
//             }
//             let [player, created] = await Player.findOrCreate({
//                 where: { first_name: first_name, last_name: last_name, club:club },
//             });

//         }

//         data = await Attempts.findAll();
//         for(var i=0;i<data.length;i++){
//             let name = data[i]["player_name"];
//             let [first_name, last_name] = name.split(' ');
//             let club = data[i]["club"];
//             if(last_name === undefined){
//                 last_name="";
//             }
//             let [player, created] = await Player.findOrCreate({
//                 where: { first_name: first_name, last_name: last_name, club:club },
//             });
//         }

//         data = await Defending.findAll();
//         for(var i=0;i<data.length;i++){
//             let name = data[i]["player_name"];
//             let [first_name, last_name] = name.split(' ');
//             let club = data[i]["club"];
//             if(last_name === undefined){
//                 last_name="";
//             }
//             let [player, created] = await Player.findOrCreate({
//                 where: { first_name: first_name, last_name: last_name, club:club },
//             });
//         }

//         data = await Disciplinary.findAll();
//         for(var i=0;i<data.length;i++){
//             let name = data[i]["player_name"];
//             let [first_name, last_name] = name.split(' ');
//             let club = data[i]["club"];
//             if(last_name === undefined){
//                 last_name="";
//             }
//             let [player, created] = await Player.findOrCreate({
//                 where: { first_name: first_name, last_name: last_name, club:club },
//             });
//         }

//         data = await Distribution.findAll();
//         for(var i=0;i<data.length;i++){
//             let name = data[i]["player_name"];
//             let [first_name, last_name] = name.split(' ');
//             let club = data[i]["club"];
//             if(last_name === undefined){
//                 last_name="";
//             }
//             let [player, created] = await Player.findOrCreate({
//                 where: { first_name: first_name, last_name: last_name, club:club },
//             });
//         }

//         data = await GoalKeeping.findAll();
//         for(var i=0;i<data.length;i++){
//             let name = data[i]["player_name"];
//             let [first_name, last_name] = name.split(' ');
//             let club = data[i]["club"];
//             if(last_name === undefined){
//                 last_name="";
//             }
//             let [player, created] = await Player.findOrCreate({
//                 where: { first_name: first_name, last_name: last_name, club:club },
//             });
//         }

//         data = await Goals.findAll();
//         for(var i=0;i<data.length;i++){
//             let name = data[i]["player_name"];
//             let [first_name, last_name] = name.split(' ');
//             let club = data[i]["club"];
//             if(last_name === undefined){
//                 last_name="";
//             }
//             let [player, created] = await Player.findOrCreate({
//                 where: { first_name: first_name, last_name: last_name, club:club },
//             });
//         }

//         data = await KeyStats.findAll();
//         for(var i=0;i<data.length;i++){
//             let name = data[i]["player_name"];
//             let [first_name, last_name] = name.split(' ');
//             let club = data[i]["club"];
//             if(last_name === undefined){
//                 last_name="";
//             }
//             let [player, created] = await Player.findOrCreate({
//                 where: { first_name: first_name, last_name: last_name, club:club },
//             });
//         }
//     });
// });

router.get("/attacking",(req,res,next)=>{
    Attacking.findAll().then(data => res.json(data)).catch(next);
    // Attacking.drop().then(res.sendStatus(200)).catch(console.log("error in dropping"));
});

router.post("/attacking",(req,res,next)=>{
    Attacking.destroy({
        truncate: true
    }).then(console.log("truncated"))
    .catch(console.log("OOPs"));
    const filename = 'E:/Ringover App/Ringover-app/datasets/attacking.csv';
    csvtojson().fromFile(filename).then(source=>{
    (async ()=>{
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            assists= source[i]["assists"],
            corner_taken= source[i]["corner_taken"],
            offsides= source[i]["offsides"],
            dribbles= source[i]["dribbles"],
            match_played= source[i]["match_played"];
            let [first_name, last_name] = player_name.split(' ');
            if(last_name === undefined){
                last_name="";
            }
            let player = await Player.findOne({ 
                where: { first_name: first_name, last_name: last_name, club: club } 
            });
            let playerid = player.id;
            try{
                await Attacking.create({
                    playerid : playerid, 
                    player_name : player_name,
                    club : club,
                    position : position,
                    assists : assists,
                    corner_taken : corner_taken,
                    offsides : offsides,
                    dribbles : dribbles,
                    match_played : match_played
                });
            }
            catch(error){
                console.log("error in creating attacking table!",error);
            }
                //         console.log(data);
                //     }).catch(error => {
                //         console.log(error);
                //     }); 

                //     console.log(playerid);
                // }).catch(error => console.log(error));  
        
        }
    })();
    });
    res.sendStatus(200);
});


router.get("/attempts",(req,res,next)=>{
    Attempts.findAll().then(data => res.json(data)).catch(next);
});

router.post("/attempts",(req,res)=>{
    Attempts.destroy({
        truncate: true
    }).then(console.log("truncated"))
    .catch(console.log("OOPs"));
    const filename = 'E:/Ringover App/Ringover-app/datasets/attempts.csv';
    csvtojson().fromFile(filename).then(source=>{
    (async ()=>{
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            total_attempts= source[i]["total_attempts"],
            on_target= source[i]["on_target"],
            off_target= source[i]["off_target"],
            blocked= source[i]["blocked"],
            match_played= source[i]["match_played"];
            let [first_name, last_name] = player_name.split(' ');
            if(last_name === undefined){
                last_name="";
            }
            let player = await Player.findOne({ 
                where: { first_name: first_name, last_name: last_name, club: club } 
            });
            let playerid = player.id;

            try{
                Attempts.create({
                    playerid : playerid,
                    player_name : player_name,
                    club : club,
                    position : position,
                    total_attempts : total_attempts,
                    on_target : on_target,
                    off_target : off_target,
                    blocked : blocked,
                    match_played : match_played
                })
            }
            catch(error){
                console.log("error in creating attempts table!",error);
            }
        }
    })();
    });
    res.sendStatus(200);
});


router.get("/defending",(req,res,next)=>{
    Defending.findAll().then(data => res.json(data)).catch(next);
});

router.post("/defending",(req,res)=>{
    Defending.destroy({
        truncate: true
    }).then(console.log("truncated"))
    .catch(console.log("OOPs"));
    const filename = 'E:/Ringover App/Ringover-app/datasets/defending.csv';
    csvtojson().fromFile(filename).then(source=>{
    (async ()=>{
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
            let [first_name, last_name] = player_name.split(' ');
            if(last_name === undefined){
                last_name="";
            }
            let player = await Player.findOne({ 
                where: { first_name: first_name, last_name: last_name, club: club } 
            });
            let playerid = player.id;
            try{
                await Defending.create({
                playerid:playerid,
                player_name : player_name,
                club : club,
                position : position,
                balls_recovered : balls_recovered,
                tackles : tackles,
                t_won : t_won,
                t_lost : t_lost,
                clearance_attempted : clearance_attempted,
                match_played : match_played
                });
            }
            catch(error){
                console.log("error in creating attempts table!",error);
            }
        }
    })();
    });
    res.sendStatus(200);
});


router.get("/disciplinary",(req,res,next)=>{
    Disciplinary.findAll().then(data => res.json(data)).catch(next);
});

router.post("/disciplinary",(req,res)=>{
    Disciplinary.destroy({
        truncate: true
    }).then(console.log("truncated"))
    .catch(console.log("OOPs"));
    const filename = 'E:/Ringover App/Ringover-app/datasets/disciplinary.csv';
    csvtojson().fromFile(filename).then(source=>{
    (async ()=>{
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
            let [first_name, last_name] = player_name.split(' ');
            if(last_name === undefined){
                last_name="";
            }
            let player = await Player.findOne({ 
                where: { first_name: first_name, last_name: last_name, club: club } 
            });
            let playerid = player.id;
            try{
            await Disciplinary.create({
                playerid:playerid,
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
            });
            }
            catch(error){
                console.log("Error in creating Disciplinary table",error);
            }
        }
    })();
    });
    res.sendStatus(200);
});


router.get("/distribution",(req,res,next)=>{
    Distribution.findAll().then(data => res.json(data)).catch(next);
});

router.post("/distribution",(req,res)=>{
    Distribution.destroy({
        truncate: true
    }).then(console.log("truncated"))
    .catch(console.log("OOPs"));
    const filename = 'E:/Ringover App/Ringover-app/datasets/distribution.csv';
    csvtojson().fromFile(filename).then(source=>{
    (async ()=>{
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
            let [first_name, last_name] = player_name.split(' ');
            if(last_name === undefined){
                last_name="";
            }
            let player = await Player.findOne({ 
                where: { first_name: first_name, last_name: last_name, club: club } 
            });
            let playerid = player.id;
            try{
                Distribution.create({
                    playerid:playerid,
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
                });
            }
            catch(error){
                console.log("Error in Distribution table",error);
            }
        }
    })();
    });
    res.sendStatus(200);
});


router.get("/goalkeeping",(req,res,next)=>{
    GoalKeeping.findAll().then(data => res.json(data)).catch(next);
});

router.post("/goalkeeping",(req,res)=>{
    GoalKeeping.destroy({
        truncate: true
    }).then(console.log("truncated"))
    .catch(console.log("OOPs"));
    const filename = 'E:/Ringover App/Ringover-app/datasets/goalkeeping.csv';
    csvtojson().fromFile(filename).then(source=>{
    (async ()=>{
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
            let [first_name, last_name] = player_name.split(' ');
            if(last_name === undefined){
                last_name="";
            }
            let player = await Player.findOne({ 
                where: { first_name: first_name, last_name: last_name, club: club } 
            });
            let playerid = player.id;
            try{
                GoalKeeping.create({
                    playerid:playerid,
                    player_name : player_name,
                    club : club,
                    position : position,
                    saved : saved,
                    conceded : conceded,
                    saved_penalties : saved_penalties,
                    cleansheets : cleansheets,
                    punches_made : punches_made,
                    match_played : match_played
                });
            }
            catch(error){
                console.log("Error in creating goalkeeping",error);
            }
        }
    })();
    });
    res.sendStatus(200);
});


router.get("/goals",(req,res,next)=>{
    Goals.findAll().then(data => res.json(data)).catch(next);
});

router.post("/goals",(req,res)=>{
    Goals.destroy({
        truncate: true
    }).then(console.log("truncated"))
    .catch(console.log("OOPs"));
    const filename = 'E:/Ringover App/Ringover-app/datasets/goals.csv';
    csvtojson().fromFile(filename).then(source=>{
    (async ()=>{
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
            let [first_name, last_name] = player_name.split(' ');
            if(last_name === undefined){
                last_name="";
            }
            let player = await Player.findOne({ 
                where: { first_name: first_name, last_name: last_name, club: club } 
            });
            let playerid = player.id;
            try{
                Goals.create({
                    playerid:playerid,
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
                });
            }
            catch(error){
                console.log("Error in creating Goals table",error);
            }
        }
    })();
    });
    res.sendStatus(200);
});


router.get("/keystats",(req,res,next)=>{
    KeyStats.findAll().then(data => res.json(data)).catch(next);
});

router.post("/keystats",(req,res)=>{
    KeyStats.destroy({
        truncate: true
    }).then(console.log("truncated"))
    .catch(console.log("OOPs"));
    const filename = 'E:/Ringover App/Ringover-app/datasets/key_stats.csv';
    csvtojson().fromFile(filename).then(source=>{
    (async ()=>{
        for (var i = 0; i < source.length; i++) {
            var player_name = source[i]["player_name"],
            club= source[i]["club"],
            position= source[i]["position"],
            minutes_played= source[i]["minutes_played"],
            match_played= source[i]["match_played"],
            goals= source[i]["goals"],
            assists= source[i]["assists"],
            distance_covered= source[i]["distance_covered"];
            let [first_name, last_name] = player_name.split(' ');
            if(last_name === undefined){
                last_name="";
            }
            let player = await Player.findOne({ 
                where: { first_name: first_name, last_name: last_name, club: club } 
            });
            let playerid = player.id;
            try{
                KeyStats.create({
                    playerid:playerid,
                    player_name : player_name,
                    club : club,
                    position : position,
                    minutes_played : minutes_played,
                    goals : goals,
                    assists : assists,
                    distance_covered : distance_covered,
                    match_played : match_played
                })
            }
            catch(error){
                console.log("Error in creating KeyStats table",error);
            }
        }
    })();
    });
    res.sendStatus(200);
});


module.exports = router;