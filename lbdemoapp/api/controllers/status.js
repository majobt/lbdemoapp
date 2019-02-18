
const getToday = (req, res, db) => {
    //console.log(req.headers);
    db('contractors')
        .select(['contractors.id', 'contractors.firstname', 'contractors.lastname', 'clock.clocktype', 'clock.date', 'clock.clocknote'])
        .innerJoin('clock', 'contractors.id', 'clock.id')
        .where(db.raw(`date_trunc('day', date) = current_date`))
        .orderBy(['contractors.id', { column: 'clock.clocktype', order: 'asc' }])
        .then(data => {
            if (data.length) {
                console.log("Today contractors found OK");
                return res.json(data)
                
            } else {
                return res.status(400).json("No One Clocked in Today")
            }
        })
    
        //.catch( err => res.status(400).json("Tech problems"))
    }


const getTodayIndiv = (req, res, db,) => {
    const { id } = req.params;
    //console.log(id);
    db('contractors')
        .select(['contractors.id', 'contractors.firstname', 'contractors.lastname', 'clock.clocktype', 'clock.date', 'clock.clocknote'])
        .innerJoin('clock', 'contractors.id', 'clock.id')
        .where(db.raw(`date_trunc('day', date) = current_date`))
        .andWhere('contractors.id', id)
        .orderBy(['contractors.id', { column: 'clock.clocktype', order: 'asc' }])
        .then(data => {
            if (data.length) {
                console.log("Today sent OK")
                return res.json(data);
                
            } else {
               return res.status(400).json("Not Clocked in/out Today")
            }
        })

        .catch(err => res.status(400).json("Tech problems"))
}

const getActiveContractors = (req, res, db) => {
    //console.log(req.headers);
    db.select('*').from('contractors').where('active', true)
        .then(conts => {
            if (conts.length) {
                console.log("Active Contractors sent OK")
                return res.json(conts);
                
            } else {
                return res.status(400).json("No Active Contractors")
            }
        })

        //.catch(err => res.status(400).json("Tech problems"))
}


module.exports = {
    getToday,
    getTodayIndiv,
    getActiveContractors
}
