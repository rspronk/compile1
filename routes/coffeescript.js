var express = require('express');
var router = express.Router();
var coffee = require('coffee-script');

/* GET home page. */
router.post('/', function(req, res, next) {
    var result = {success: false, output: "", message: ""}
    if (typeof req.body.content !== 'undefined' && req.body.content.length > 0) {
        result.output = coffee.compile(req.body.content, {bare: true});
        result.success = true;
        res.json(result);
    } else {
        console.log('here');
        res.json(result);
    }
});

module.exports = router;