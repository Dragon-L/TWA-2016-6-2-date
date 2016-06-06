function generateDialog(generatePositon) {
    if (data.hasDialog) {
        generatePositon.append(dialogTemplate);
        $('#dialog').dialog();
    }
}

function generatePreview(generatePositon,allInput){
    generatePositon.append(editButton);

    allInput.forEach(function (data) {
        generatePositon.append('<p>'+data.type+':'+data.value+'</p>');
    });
}

function generateEdit(generatePositon,allInput) {
    generatePositon.append(previewButton);

    allInput.forEach(function (data) {
        if (data.type == 'date'){
            generatePositon.append(dateTemplate({id:data.id,id:data.id,value:data.value}));
        }else if(data.type == 'text'){
            generatePositon.append(textTemplate({id:data.id,id:data.id,value:data.value}));
        }
    });
}

function generateNewPage(generatePositon,allInput) {
    saveInputData(generatePositon,allInput);

    generatePositon.empty();
    generateDialog(generatePositon);
    
    if (data.status == 'preview'){
        generatePreview(generatePositon,allInput);
    }else {
        generateEdit(generatePositon,allInput);
    }
}

function generateNewPageWithoutSaveInput(generatePositon,allInput) {
    generatePositon.empty();
    generateDialog(generatePositon);

    if (data.status == 'preview'){
        generatePreview(generatePositon,allInput);
    }else {
        generateEdit(generatePositon,allInput);
    }
}

