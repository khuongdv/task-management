var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function (req, res, next) {
    var authorization = req.header("Authorization");
    if (authorization && validAuthorizationInfo(authorization)) {
        next();
    } else {
        res.status(401);
        res.json({Message: "Unauthorized"});
    }
});
function validAuthorizationInfo(authorization){
    console.log(authorization);
    return true;
}

module.exports = router;
