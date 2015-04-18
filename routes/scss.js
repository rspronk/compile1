var express = require('express');
var router = express.Router();
var sass = require('node-sass');

/* GET home page. */
router.post('/', function(req, res, next) {
    var result = {success: false, output: "", message: ""}
    if (typeof req.body.content !== 'undefined' && req.body.content.length > 0) {
        var css = sass.renderSync({data: req.body.content});
        if (css && css.css) {
            result.output = css.css;
            result.success = true;
        }
        res.json(result);
    } else {
        res.json(result);
    }
});

module.exports = router;