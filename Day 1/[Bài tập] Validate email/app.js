var rexg = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

function checkEmail(str) {
    if (rexg.test(str)) {
        alert('Day la 1 email');
    } else{
        alert('Day khong phai la 1 email');
    }
}
var yourEmail= prompt('Moi nhap email');
checkEmail(yourEmail);