
const handleContractorGet = (req, res, db) => {
    const { qrcode } = req.params;
    db.select('*').from('contractors').where({ qrcode })
        .then(contractor => {
            if (contractor.length) {
                res.json(contractor);
            } else {
                res.status(400).json("Invalid QR Code")
            }
        })
        .catch(err => res.status(400).json("Tech problems"))
}

module.exports = {
    handleContractorGet
}
