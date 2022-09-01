const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');


// const { response } = require('express');
// const { Sequelize } = require('sequelize');
// const multer = require('multer');
// const mysql = require('mysql');
// const upload = multer();
// require('dotenv').config();

const app = express();

const port = 5000;

// Connect to the database
// mongoose
//   .connect(process.env.DB, { useNewUrlParser: true })
//   .then(() => console.log(`Database connected successfully`))
//   .catch((err) => console.log(err));

// // Since mongoose's Promise is deprecated, we override it with Node's Promise
// mongoose.Promise = global.Promise;
// models.sequelize.sync().then(function() {
//   server.listen(port);
//   server.on('error', onError);
//   server.on('listening', onListening);
// });



// var connection = mysql.createConnection({
//     host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
//     port: 4000,
//     user: 'fxdivnfg9gLwwTA.root',
//     password: 'Tmk2Mt@d',
//     database: 'test'
// });
// connection.connect(function(err) {
//     if (err) {
//         throw err
//     }
//     connection.query('SELECT DATABASE();', function(err, rows) {
//         if (err) {
//         throw err
//         }
//         console.log(rows[0]['DATABASE()']);
//         connection.end()
//     });
// });

// const sequelize = new Sequelize('test', 'fxdivnfg9gLwwTA.root', 'Tmk2Mt@d', {
//     host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
//     port: 4000,
//     dialect: 'mysql'
// });

// 


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

// app.use(upload.array());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});