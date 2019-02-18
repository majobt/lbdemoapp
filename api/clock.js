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



module.exports = {
    handleClock: handleClock
}