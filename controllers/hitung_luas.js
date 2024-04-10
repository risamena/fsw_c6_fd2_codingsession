function hitungLuasController (req, res) {
    const data = req.body;
    const panjang = data.panjang;
    const lebar = data.lebar;
    const luas = panjang * lebar;
    res.status(200).json({
        status: 'success',
        luas: luas
    });

    history.push({
        panjang: panjang,
        lebar: lebar,
        keliling: keliling
    });
}
module.exports = hitungLuasController;