var express = require('express');
var router = express.Router();
var wechat = require('wechat-enterprise');

var config = {
    token: 'KrGV',
    encodingAESKey: 'wpQ3o70XYbPLc2PC5ODwDwKIcDiBqWBj1PgPVwRQGZ6',
    corpId: 'wxe58a0875744a70fa'
};

router.get('/', wechat(config, function(req, res, next){
    res.writeHead(200);
    res.end("hello noad weixin api.");
}));

module.exports = router;
