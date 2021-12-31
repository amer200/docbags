require('dotenv').config();
const User = require('./modell/users');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '.' + file.originalname);
    }
});
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/svg+xml' || file.mimetype == 'application/pdf' || file.mimetype == 'image/jpeg') {
            cb(null, true)
        } else {
            cb(new Error('only png, svg, pdf and jpg files are allowed'))
        }
    }
});
const port = process.env.PORT || 3000;

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
        User.findOne({accountnum: '1'})
            .then( u=>{
                if(!u){
                    const user = new User({
                        accountnum: '1',
                        password: '123'
                    })
                    user.save();
                }
            })
        console.log('every thing is ok ')
    })
    .catch(err => {
        console.log(err)
    })