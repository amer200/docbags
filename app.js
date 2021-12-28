require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '.' + file.originalname);
    }
});
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'svg' || file.mimetype == 'pdf' || file.mimetype == 'image/jpg') {
            cb(null, true)
        } else {
            cb(new Error('only png, svg, pdf and jpg files are allowed'))
        }
    }
});
const port = process.env.port || 3000;

// static files
app.use(express.static('public'))
// set the view engine to ejs
app.set('view engine', 'ejs');
// multer upload files
app.use('/upload', upload.single('doc'));
// routes
const mainRoute = require('./routes/main');
app.use('/', mainRoute);
mongoose.connect(process.env.db_url)
    .then(result => {
        app.listen(port)
        console.log('every thing is ok ')
    })
    .catch(err => {
        console.log(err)
    })