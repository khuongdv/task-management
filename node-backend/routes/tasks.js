var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({Message: "Reply from Tasks module"});
});

module.exports = router;
