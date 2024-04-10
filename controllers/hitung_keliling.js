const history = require('../models/m_history')
function hitungKelilingController (req, res) {
    const data = req.body;
    const panjang = data.panjang;
    const lebar = data.lebar;
    const keliling = 2*panjang + 2*lebar;
    res.status(200).json({
        status: 'success',
        keliling: keliling
    });

    history.push({
        panjang: panjang,
        lebar: lebar,
        keliling: keliling
    });
}
module.exports = hitungKelilingController;