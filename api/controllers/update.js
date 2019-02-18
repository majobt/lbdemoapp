
const UpdateCodes = (req, res, db) => {
    console.log(req.headers);
    db.raw("UPDATE contractors SET qrcode = upper(left(md5(random()::text),5))")

    let lookie = db.raw("UPDATE contractors SET qrcode = upper(left(md5(random()::text),5))")
    console.log(lookie)
    }



const newContractor = (req, res, db) => {
    console.log(req);
    console.log(req.body);
    console.log(req.body.Contractor.id); //id
    const { firstname, lastname, phonenumber, id } = req.body.Contractor;
    const ContNew = {
        firstname: firstname,
        lastname: lastname,
        id: id,
        active: true,
        phonenumber: phonenumber,
        qrcode: Math.random().toString(36).substr(2, 5)
    }
    console.log("ContNew:")
    console.log(ContNew);
    db('contractors').insert(ContNew)
        .then(console.log)
        .then(newCont => { 
            return res.json(newCont) })
        .catch(err => res.status(400).json('unable to register'))
}

module.exports = {
    UpdateCodes,
    newContractor
}
