function insertData(type,allInput) {
    var inputId = null;
    if (allInput.length == 0){
        inputId = 0;
    }else {
        inputId = allInput[allInput.length - 1].id + 1;
    }
    var oneInput = {
        type: type,
        id: inputId,
        value: null
    };
    allInput.push(oneInput);
}