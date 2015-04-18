var express = require('express');
var router = express.Router();
var less = require('less');

/* GET home page. */
router.post('/', function(req, res, next) {
    var result = {success: false, output: "", message: ""}
    if (typeof req.body.content !== 'undefined' && req.body.content.length > 0) {
        less.render(req.body.content, function (e, output) {
            if (e) {
                result.message = e;
            } else {
                result.success = true;
                result.output = output.css;
            }
            
            res.json(result);
        });
    } else {
        res.json(result);
    }
});

module.exports = router;