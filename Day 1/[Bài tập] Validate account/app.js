var rexg = /^[_a-z0-9]{6,}$/;

function checkEmail(str) {
    if (rexg.test(str)) {
        alert('Day la 1 account');
    } else{
        alert('Day khong phai la 1 account');
    }
}
checkEmail('12345');