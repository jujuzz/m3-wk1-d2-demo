var express = require('express');
var router = express.Router();

router.get('/home', function(req, res){
    res.send("Hello world!")
});
router.post('/home', function(req, res){
    res.send("You just call the post method at /hello")
});
module.exports = router;