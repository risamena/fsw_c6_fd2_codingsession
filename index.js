const express = require('express');
const app = express();
const PORT = 4646;

app.use(express.urlencoded());
const hitungLuas = require('./controllers/hitung_luas');
const hitungKeliling = require('./controllers/hitung_keliling');
const lihatHistory = require('./controllers/history')
app.post('/hitung-luas', hitungLuas);
app.post('/hitung-keliling', hitungKeliling);
app.get('/lihat-history', lihatHistory);

// server
app.listen(PORT, function(){
    console.log(`Server berjalan di http://localhost:${PORT}`);
})