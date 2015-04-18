var express = require('express');
var router = express.Router();
var markdown = require("markdown").markdown;

/* GET home page. */
router.post('/', function(req, res, next) {
    var result = {success: false, output: "", message: ""}
    if (typeof req.body.content !== 'undefined' && req.body.content.length > 0) {
        var html = markdown.toHTML(req.body.content, 'Maruku');
        if (html) {
            result.output = html;
            result.success = true;
        }
        res.json(result);
    } else {
        res.json(result);
    }
});

module.exports = router;