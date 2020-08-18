const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/blogDb';
const User = require('./model/user');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.get('/app/github/login', (req, res) => {
    res.send('BERHASIL hello')
})

app.post('/app/github/login', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        if(user.length === 1){
            return res.status(200).json({
                status: 'berhasil',
                data: user
            })
        } else {
            return res.status(200).json({
                status: 'gagal',
                message: 'login gagal'
            })
        }
        console.log('koneksi berhasil, username nya', req.body.username, 'password nya', req.body.password);
    });
})

app.listen(3000, () => console.log('blog ini sudah berjalan di localhost 3000'))