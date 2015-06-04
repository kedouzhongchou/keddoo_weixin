var express = require('express');
var router = express.Router();
//var WXBizMsgCrypt = require('wechat-crypto');

var wechat = require('wechat-enterprise');

var config = {
    token: 'KrGV',
    encodingAESKey: 'wpQ3o70XYbPLc2PC5ODwDwKIcDiBqWBj1PgPVwRQGZ6',
    corpId: 'wxe58a0875744a70fa'
};

//回调验证
//router.get('/', function(req, res){
//    var msg_signature = req.query.msg_signature;
//    var timestamp = req.query.timestamp;
//    var nonce = req.query.nonce;
//    var echostr = req.query.echostr;
//    var cryptor = new WXBizMsgCrypt(config.token, config.encodingAESKey, config.corpId)
//    var s = cryptor.decrypt(echostr);
//    res.send(s.message);
//});

router.get('/', wechat(config, wechat.text(function (message, req, res, next) {
            res.reply('然后呢？');
            res.reply({
                type: 'music',
                content: {
                    title: '来一首歌曲放送一下吧',
                    description: '月半弯',
                    musicUrl: 'http://sc.111ttt.com/up/mp3/132580/D24B0B4EF3B2DD5F61B4D374671616D2.mp3',
                    hqMusicUrl: 'http://sc.111ttt.com/up/mp3/132580/D24B0B4EF3B2DD5F61B4D374671616D2.mp3'
                }
            });
            res.reply([
                {
                    title: '你来我家接我吧',
                    description: '这是女神与高富帅之间的对话',
                    picurl: 'http://7sbpff.com1.z0.glb.clouddn.com/images/QR-keddoo.png',
                    url: 'http://http://www.keddoo.com/'
                }
            ]);
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
