function isValid(date){
    var result = true;
    var dateArray = date.split('/');

    if(dateArray.length != 3){
        return false;
    }
    if(!(isDigit(dateArray[0]) && dateArray[0].length == 2)){
        return false;
    }
    if(!(isDigit(dateArray[1]) && dateArray[1].length == 2)){
        return false;
    }
    if(!(isDigit(dateArray[2]) && dateArray[2].length == 4)){
        return false;
    }
    return result;
}

function isDigit(digits) {
    var result = true;
    for(var i = 0,len = digits.length;i < len;i++){
        if (isNaN(parseInt(digits[i]))){
            result = false;
        }
    }
    return result;
}


