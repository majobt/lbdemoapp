const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const knex = require('knex'); 

const app = express();

app.use(bodyParser.json());
app.use(cors()) 


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'toby25',
        database: 'lbappdb'
    }
})

const handleClock = (req, res, db) => {
    console.log(req);
    console.log(req.body);
    console.log(req.body.Contractor.id); //id
    const { id, qrcodeused, clocknote, clocktype} = req.body.Contractor;
    const ClockNew = {
        id: id,
        qrcodeused: qrcodeused,
        clocknote: clocknote,
        clocktype: clocktype,
        date: new Date()
    }
    console.log("ClockNew[0]:")
    console.log(ClockNew);
    db('clock').insert(ClockNew)
    .then(console.log)
    .then(clockevent => {res.json(clockevent)})
    .catch (err => res.status(400).json('unable to register'))

    
   
    
}

//
/* 
 db.transaction((trx) => {
        return db('clock')
            .insert({ ClockNew })
            .into('clock')
            .transacting(trx)
            .returning('qrcodes')
            .then(clockevent => {
                res.json(clockevent);
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
        .then(console.log("it worked"))
        .catch(err => res.status(400).json('unable to register'))

db.transaction((trx) => {
    return db('clock')
        .insert({ ClockNew })
        .into('clock')
        .transacting(trx)
        .then(clockevent => {
            res.json(clockevent);
        })
        .then(trx.commit)
        .catch(trx.rollback)
})
    .then(console.log("it worked"))
    .catch(err => res.status(400).json('unable to register'))
//



 db.transaction((trx) => {
        trx.insert({ ClockNew})
        .then( response => (response) {
            return knex('groups')
                .transacting(t)
                .insert({ name: 'Cool Group', user_id: response.id })
        })
        .then(t.commit)
        .catch(t.rollback)
})
    .then(function () {
        // transaction suceeded, data written
    })
    .catch(function () {
        // transaction failed, data rolled back
    });
 */

    



/* }

db.transaction(trx => {
   
        .returning('email')
        
                .then(user => {
                    res.json(user[0]);
                })
        })
        .then(trx.commit)
        .catch(trx.rollback)
})
    .catch(err => res.status(400).json('unable to register'))
}
knex.transaction(function (t) {
    return knex('foo')
        .transacting(t)
        .insert({ id: "asdfk", username: "barry", email: "barry@bar.com" })
        .then(function () {
            return knex('foo')
                .where('username', '=', 'bob')
                .update({ email: "bob@foo.com" });
        })
        .then(t.commit)
        .catch(function (e) {
            t.rollback();
            throw e;
        })
})
    
    .catch(function (e) {
        // it failed
    });
    //.catch(err => res.status(400).json('unable to register'))

db.transaction(trx => {
    trx.insert(ClockNew)
        .into('clock')
    //   .then(response => console.log(clockeventid))
}) */






//const handleClock = (req, res, db) => {
    //const { id, clocktype, clocknote, qrcodeused } = req.body;
    /* if(!email||!name||!password) {
        return res.status(400).json('incorrect form submission');
    } */
  //  console.log(req.body)
    //db.transaction(trx => {
      //  trx.insert({
 

     //   })
     //       .into('clock')
     //       .returning(clockeventid)
     //       .then(trx.commit)
     //       .catch(trx.rollback)
   // }
        //.catch(err => res.status(400).json('unable to register'))


module.exports = {
    handleClock: handleClock
}