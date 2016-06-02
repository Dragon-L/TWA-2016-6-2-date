function isValid(date) {
    var string = /^\d{2}\/\d{2}\/\d{4}$/;
    return string.test(date); 
}
