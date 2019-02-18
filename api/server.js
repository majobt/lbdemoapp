const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const knex = require('knex'); 
//const bcrypt = require('bcrypt-nodejs')

const clock = require('./controllers/clock')
/* const signin = require('./controllers/signin') */
const clockcard = require('./controllers/clockcard')
const status = require('./controllers/status')
const update = require('./controllers/update')
//const image = require('./controllers/image')

const app = express();

app.use(bodyParser.json());
app.use(cors())

var port = process.env.PORT || 3002;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!')
})

const db = knex({
    client: 'pg',
    connection: {
        host: {
            connectionString:process.env.DATABASE_URL,
            ssl: true }
        
        //host: '127.0.0.1',
        //user: 'postgres',
        //password: '******',
        //database: 'lbappdb'
    }
});





//DB call
app.get('/contractors', (req, res) => { status.getActiveContractors(req, res, db)})
//CLOCK IN, test each time in postman
//LOAD CLOCK CARD
app.get('/ClockInOut/:qrcode', (req, res) => { clockcard.handleContractorGet(req, res, db) })
//app.get('/ClockInOut/:qrcode', (req, res) => {res.send("connected")})
app.post('/ClockInOut/:qrcode', (req, res) => {clock.handleClock(req, res, db)})

//TODAY STATUS
app.get('/today', (req,res) => {status.getToday(req,res,db)})
app.get('/today/:id', (req, res) => { status.getTodayIndiv(req, res, db) })


//UPDATES
app.get('/UpdateCodes', (req, res) => { update.UpdateCodes(req, res, db) })
app.get('/new', (req, res) => { update.newContractor(req, res, db) })
  


///REGISTER
//app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

//IMAGE
//app.put('/image', (req, res) => { image.handleImage(req, res, db) })
//app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) }) */

/* app.listen(process.env.PORT || 3000, () => {
    console.log(`app is runnning on port`);
}) */

//console.log(bcrypt.hashSync("sentence"))

//REGISTER
/* app.post('/register', (req, res) => {
    app.post('/register', (req, res) => { SAME
    const { email, password, name} = req.body;
    onst { email, name, password } = req.body; SAME
    const hash = bcrypt.hashSync(password);
    const hash = bcrypt.hashSync(password); SAME
    db.transaction(trx => {
    db.transaction(trx => { SAME
        trx.insert({
        trx.insert({ SAME
            hash: hash,
            hash: hash, SAME
            email: email
            email: email SAME
        })
        }) SAME
        .into('login')
        .into('login') SAME
        .returning('email')
        .returning('email') SAME

        .then(logInEmail => {
        .then(loginEmail => { DIFF I
            return trx('users')
            return trx('users') SAME
                .returning('*')
                .returning('*') SAME
                .insert({
                .insert({
                    name: name,
                    email: loginEmail[0], DIFF NAME FIRST
                    email: logInEmail[0],
                    joined: new Date()
                })
                .then(user => {
                    res.json(user[0]);
                })
            })
            .then(trx.commit)
            .catch(rollback) !!! no trx
    })

    .catch(err => res.status(400).json('unable to register'))
}) */


/* app.get('/', (req, res) => {
    res.send(database.users);
    })  */

//LIKELY ROUTES
//~ --> res = this is working
//~/signin --> POST, res success/fail (POST because info sent over https)
//~/register --> POST, res user
//~/profile/:userId --> GET = user
//~/image --> PUT -->user (count)

/* app.post('/', (req, res) => {
    const user = {
        id: 1,
        qrcodeused : "Bret",
        clocknote : "hello",
        clocktype : "out"
    }
    res.send();
    });

    app.listen (3000);  */

/* app.get('/ClockInOut', (req, res) => {
    res.send("getting ciout");
}); */




/* app.post('/', (req, res) => {
    const user = {
        id: 1,
        qrcodeused: "Bret",
        clocknote: "hello",
        clocktype: "out"
    }
    res.send();
}); */


//app.get('/ClockInOut/:qrcode', (req, res) => {
//    console.log("welcome")
//})


/*  db.select('*').from('contractors').then(data => {
    console.log(data)
});  */


/*{
   connectionString: process.env.DATABASE_URL,
   ssl: true} */
/*          */



/* ;
 */

//db.select('*').from('clock').where(`date`, db.fn.now()).then(data => {console.log(data)})




//const activeContractors = db.select('*').from('contractors').where('active', true).then(data => { console.log(res.json(data)) })
/* const todayClock = db('contractors')
                    .select(['contractors.id', 'contractors.firstname', 'contractors.lastname', 'clock.clocktype', 'clock.date', 'clock.clocknote'])
    .innerJoin('clock', 'contractors.id', 'clock.id')
    .where(knex.raw(`date_trunc('day', date) = current_date`))
    .orderBy(['contractors.id', { column: 'clock.clocktype', order: 'asc' }])
    .then(data => { console.log(data) }) */


//const todayClock = db('clock').select('*').where(knex.raw(`date_trunc('day', date) = current_date`))
/* knex.raw(`select 
contractors.id, contractors.firstname, contractors.lastname, clock.clocktype, clock.date, clock.clocknote 
from contractors 
inner join clock on contractors.id = clock.id where date_trunc('day', clock."date") = current_date order by contractors.id, clock.clocktype`).then(data => { console.log(data) })

 */


//db('contractors').select(['contractors.id', 'contractors.firstname', 'contractors.lastname', 'clock.clocktype', 'clock.date', 'clock.clocknote']).innerJoin('clock', 'contractors.id', 'clock.id' )


