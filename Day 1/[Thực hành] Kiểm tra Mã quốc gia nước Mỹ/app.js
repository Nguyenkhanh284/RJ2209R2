var regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
function checkUsaZipCode(str){
    if(regexp.test(str)){
        document.write(`Chuối ${str} là Mã của Hoa Kỳ`);
    } else {
        document.write(`Chuối ${str} không phải là Mã của Hoa Kỳ`);
    }
};

checkUsaZipCode('7892');