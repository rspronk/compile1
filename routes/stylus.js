var express = require('express');
var router = express.Router();
var stylus = require('stylus');

/* GET home page. */
router.post('/', function(req, res, next) {
    var result = {success: false, output: "", message: ""}
    if (typeof req.body.content !== 'undefined' && req.body.content.length > 0) {
        stylus.render(req.body.content, {}, function(err, css) {
            if (err) {
                result.message = err.message;
            } else {
                result.output = css;
                result.success = true;
            }
            res.json(result);
        });
    } else {
        res.json(result);
    }
});

module.exports = router;