var express = require('express');
var router = express.Router();
var WXBizMsgCrypt = require('wechat-crypto');

var wechat = require('wechat-enterprise');

var API = wechat.API;
var api = new API('wxe58a0875744a70fa', 'oS62UR8k7idkC93vZXEKzAH_dET0egR1B6_caHVGeSpjRv0Y1kcM2Gt0WR2EwRjG', '21');

var config = {
    token: 'UfQDrmFqogJMOHw6fn6OvLXnz2',
    encodingAESKey: 'BwPyhi3kTLKga9iFGhXmDQKvHC7HVYPhwz2DMJmjtXf',
    corpId: 'wxe58a0875744a70fa'
};

//回调验证
router.get('/', function(req, res){
    var msg_signature = req.query.msg_signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;
    var echostr = req.query.echostr;
    var cryptor = new WXBizMsgCrypt(config.token, config.encodingAESKey, config.corpId)
    var s = cryptor.decrypt(echostr);
    res.send(s.message);
});

router.post('/', wechat(config, wechat.text(function (message, req, res, next) {
            console.log(message);
            if (message.Content == '你好') {
                res.reply('我不好');
            } else if (message.Content == '新建目录') {
                var menu = JSON.stringify(require('../config/weixin_menu.json'));
                api.createMenu(menu, function (err, result) {
                    console.log('err : ' + err + ", result : " + result);
                });
            } else if (message.Content == '获取通讯录') {
            } else {
                res.reply('嗯？');

            }
//            res.reply([
//                {
//                    title: '蝌蚪众筹',
//                    description: '有你更精彩！',
//                    picurl: 'http://7sbpff.com1.z0.glb.clouddn.com/images/QR-keddoo.png',
//                    url: 'http://www.keddoo.com/'
//                }
//            ]);

        }
    )
        .
        location(function (message, req, res, next) {
            res.reply({type: 'text', content: '你是猪吗？迷路了？'});
        })
        .event(function (mesage, req, res, next) {

        })
))
;

module.exports = router;
