const User = require('../modell/users');
const fs = require('fs');
exports.getUploadDoc = (req, res, next) => {
    res.render('main/index')
}
exports.postUploadDoc = (req, res, next) => {
    const accountnum = req.body.accountNum;
    const password = req.body.password;
    const doctype = req.body.docType;
    const itemtype = req.body.itemType;
    const itemdate = req.body.itemDate;
    const filepath = req.file.path;
    User.findOne({
            accountnum: accountnum
        })
        .then(u => {
            if (!u) {
                return res.send('no user with this number');
            }
            if (u.password !== password) {
                return res.send('wrong password');
            }
            const doc = {
                doctype: doctype,
                itemdate: itemdate,
                itemtype: itemtype,
                path: `uploads/${req.file.filename}`,
                mimetype: req.file.mimetype
            };
            u.docs.push(doc);
            return u.save();
        })
        .then(result => {
            res.redirect(`/show-docs/${req.file.filename}`);
        })
        .catch(err => {
            console.log(err)
        })
}
exports.showDoc = (req, res, next) => {
    const filename = req.params.filename;
    const path = `uploads/${filename}`
    User.findOne({
            accountnum: '1'
        })
        .then(u => {
            const doc = u.docs.filter(d => {
                return d.path == path
            })
            console.log(doc)
            if (doc[0].mimetype == 'image/png' || doc[0].mimetype == 'image/svg+xml' || doc[0].mimetype == 'image/jpeg') {
                return res.render('main/doc-view', {
                    mime: 'img',
                    doc: doc[0]
                })
            } else {
                return res.render('main/doc-view',{
                    mime: 'pdf',
                    doc: doc[0]
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
}