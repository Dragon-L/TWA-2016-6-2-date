function isValid(date) {
    var result = true;
    var sting = '^\d{2}(/)\d{2}(/)\d{4}$';
    return date.test(sting);
}
