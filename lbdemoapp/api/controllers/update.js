
const UpdateCodes = (req, res, db) => {
    console.log(req.headers);
    db.raw("UPDATE contractors SET qrcode = upper(left(md5(random()::text),5))")

    let lookie = db.raw("UPDATE contractors SET qrcode = upper(left(md5(random()::text),5))")
    console.log(lookie)
    }

module.exports = {
    UpdateCodes
}

