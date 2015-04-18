var express = require('express');
var router = express.Router();
var jade = require('jade');

/* GET home page. */
router.post('/', function(req, res, next) {
    var result = {success: false, output: "", message: ""}
    if (typeof req.body.content !== 'undefined' && req.body.content.length > 0) {
        try {
            var opts = {pretty: true};
            result.output = jade.render(req.body.content, opts);
            result.success = true;
        } catch (err) {
            result.message = err.message;
        }
        res.json(result);
    } else {
        res.json(result);
    }
});

module.exports = router;