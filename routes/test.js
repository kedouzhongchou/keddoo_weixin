var express = require('express');
var router = express.Router();
var WXBizMsgCrypt = require('wechat-crypto');

var config = {
    token: 'KrGV',
    encodingAESKey: 'wpQ3o70XYbPLc2PC5ODwDwKIcDiBqWBj1PgPVwRQGZ6',
    corpId: 'wxe58a0875744a70fa'
};

router.get('/', function(req, res){
    var msg_signature = req.query.msg_signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;
    var echostr = req.query.echostr;
    var cryptor = new WXBizMsgCrypt(config.token, config.encodingAESKey, config.corpId)
    var s = cryptor.decrypt(echostr);
    res.send(s.message);
});

module.exports = router;
