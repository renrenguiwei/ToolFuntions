// 1、返回一个数组对象
const {x,xx,xxx} = this.state
{
    x:'',
        xx:'',
    xxx:''
}
// 单独拿出来
{x} = {
        x:''
    }

    // 2、时间 new Date()
    +new Date()	// 1520243277069
    +Date.now()	// 1520243277069
new Date()	// Mon Mar 05 2018 17:47:57
Date.now()	// GMT+0800 (+08)1520243277069

// +号是毫秒数变换的简写

// 3、正则表达式 “$&、$`、$'、$1、$2、$3、……”
/*
$& - 正则表达式匹配的文本
$` - 匹配文本的左侧内容
$' - 匹配文本的右侧内容
$1 - 第一个括号表达式匹配到的内容
*/
var text  = "abc123def", total, left, right;
total = text.replace(/\d+/g, "[$&]");   // abc[123]def
left  = text.replace(/\d+/g, "[$`]");   // abc[abc]def
right = text.replace(/\d+/g, "[$']");   // abc[def]def

/*
原始字符串：我是程序员
正则：(.*)(程序员)(.*)
替换为：$1工程师$3

正则：(.*)(([^不是]|[^是]|)程序员)(.*)
替换为：$1工程师$4
*/

// 注意：$&!==$1  前者匹配替换输出所有，后者只替换括号内

// 一、验证函数

// 电子邮件格式
function validateEmail(email) {
    var re = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if (!re.test(email)) return false;
    return true;
}

// 验证手机号格式
function verifyPhoneNumber(num) {
    var res = num.match(/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|145|147)+\d{8})$/g);
    return res;
}

// 输入是否为中文
function isChinese(chinese) {
    var temp = chinese.replace(/(^\s*)|(\s*$)/g, "");
    if (temp == "") {
        return false;
    } else {
        var re = /[^\u4e00-\u9fa5]/;
        if (re.test(temp)) return false;
        return true;
    }
}

// http转换为https
function http2https(url){
    if (url){
        let newUrl = url.replace(/http:/,'https:');
        return newUrl;
    }else{
        return null;
    }
}

//验证身份证格式
function checkPid(pId){
    var res = pId.match(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/g);
    return res;
}

// 是否为数字
function isNumber(temp) {
    var re=/^[0-9]+$/;
    if(re.test(temp)) return true;
    return false;
}

// 密码由6-12位字母、数字组成
function pwdFormat(param){
    let res = param.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/);
    return res;
}

function formatDate (param) {
    var date = new Date(Number(param+'000'));
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    var time = Y+M+D;
    return time;
}

function formatDateOther (param) {
    var date = new Date(Number(param+'000'));
    Y = date.getFullYear() + '/';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
    D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
    h = (date.getHours() <10 ? '0'+date.getHours() : date.getHours()) + ':';
    m = (date.getMinutes() <10 ? '0'+date.getMinutes() : date.getMinutes())+ ':';
    s = (date.getSeconds() <10 ? '0'+date.getSeconds() : date.getSeconds());
    var time = Y+M+D+h+m+s;
    return time;
}

// 二、倒计时器
function timer(time) {
    var time = time;
    $('#get_code').text(time + '秒重新发送');

    time--;
    if (time >= 0) {
        setTimeout(function() { timer(time) }, 1000);
        $('#get_code').attr('disabled', 'disabled');
        $('#get_code').css('background-color', '#a5a5a5');
        $('#code').attr('placeholder', '');

    } else if (time == -1) {
        $('#get_code').removeAttr('disabled');
        $('#get_code').css('background-color', '#76b1fd');
        $('#get_code').text('点击获取');
        $('#code').attr('placeholder', '请输入验证码');
    }
}

// 五、数据加密、加签、解密、时间戳

function dataEncrypt(values){
    var encrypt = new JSEncrypt();// 数据加密
    encrypt.setPublicKey(public_key_server);
    // return encrypt.encrypt(values);
    return encrypt.encryptLong(values);
}


function dataSign(values){
    var rsa = new RSAKey();// 数据加签
    rsa.readPrivateKeyFromPEMString(private_key);//添加私钥
    var rsaSignStr = rsa.signString(values, 'sha1');//SHA1WithRSA算法加密
    return hex2b64(rsaSignStr);//base64编码
}
function dataDecrypt(data){
    var encrypt = new JSEncrypt();// 数据解密
    encrypt.setPrivateKey(private_key);
    return JSON.parse(encrypt.decrypt(data));
    // return JSON.parse(encrypt.decryptLong(data));
}
function timeStamp(){
    var time_stamp = Math.round(new Date().getTime()/1000);// number
    var time_diff = getStorage('time_diff');//string
    // console.log(time_stamp+':'+time_diff);
    return time_stamp+parseInt(time_diff);
}

// 十二、图片后缀判断
function isImage(param){
    var lastIndexOf = param.lastIndexOf('.')+1;
    var typeImg = param.substr(lastIndexOf).toLowerCase();
    if (typeImg == 'jpg' || typeImg == 'png' || typeImg == 'jpeg' || typeImg == 'gif' || typeImg == 'bmp'){
        return true;
    }else{
        return false;
    }
}

// 十三、密码由6-12位字母、数字组成
function pwdFormat(param){
    var res = param.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/);
    return res;
}


















