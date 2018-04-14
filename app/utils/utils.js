//检测手机号
exports.verifyPhone = function(phone){
    var phoneReg = /^1(3|4|5|7|8)\d{9}$/;
    if(phoneReg.test(phone+'')){
        return true;
    }else{
        return false;
    }
} 
//检测密码，必须有数字、大写字母、小写字母、触控格外的字符任意两种
exports.verifyPwd = function(p){
    var index = p.indexOf('\\');
    var tmp = '';
    var result = 0;
    if (index >= 0) {
        var arr = p.split('')
        arr.splice(index, 0 , '\\');
        tmp = arr.join('');
    } else {
        tmp = p + '';

    }
    var pwdReg = /^\S\S{4,18}\S$/;
    var lowCase = /^\S*[a-z]\S*$/;
    var upperCase = /^\S*[A-Z]\S*$/;
    var number = /^\S*[0-9]\S*$/;
    var symbol = /[`~!@#$%^&*\(\)\_\+\-\=\[\]\\\{\}|;':",./<>?]$/;
    lowCase.test(tmp) && result ++;
    upperCase.test(tmp) && result ++;
    number.test(tmp) && result ++;
    symbol.test(tmp) && result ++;
    
    if(pwdReg.test(tmp) && result >=2){
        return true;
    }else{
        return false;
    }
}

exports.verifyEmail = function(email){
    var reg = /^\w+([-_.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(reg.test(email.toString())){
        return true;
    }else{
        return false;
    }

}

exports.GetCurrentStyle = function(obj, prop) {       
   if(obj.currentStyle) {          
      return obj.currentStyle[prop];       
   }        
   else if(window.getComputedStyle) {                 
      return window.getComputedStyle(obj,null)[prop];       
   }        
   return null;     
}

exports.debounce function (){
    let debPointer = null;
    return function(func){
        if(debPointer != null){
            clearTimeout(debPointer);
            debPointer = null;
        }
        debPointer = setTimeout(func, 1000);
    }
}
