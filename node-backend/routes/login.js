var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    // Get username password here then check in db
    var username = req.body.username;
    var password = req.body.password;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(username === 'admin' && password == 'admin') {
        res.json({ Status: "success", Message: "Login successfully.", Token: "QmFzZTY0IGlzIGEgZ2VuZXJpYyB0ZXJtIGZvciBhIG51bWJlciBvZiBzW5jb2Rpbmcgc2NoZW1lcyBhcmUgY29tbW9ubHkgdXNlZCB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byBlbmNvZGUgYgZG"});
    } else {
        res.json({
            Status: "failed",
            Message: "Some error happended"
        });
    }
});

module.exports = router;
