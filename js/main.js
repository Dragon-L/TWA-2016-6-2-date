$(function () {
    $('#btn-add').bind("click",function () {
        hasDialog = true;
        generateNewPage($('#container'),allInput);
        hasDialog = false;
    });

    $('#body').on('click','#dialog-submit',function () {
        insertData($("input[name='dialogType']:checked").val(),allInput);
        $(this).parent().remove();
        generateNewPage($('#container'),allInput);
    });

    $('#body').on('click','#dialog-cancel',function () {
        $(this).parent().remove();
        generateNewPage($('#container'),allInput);
    });

    $('#container').on('click','#btn-preview',function () {
        isPreviewPage = true;
        generateNewPage($('#container'),allInput);
    });

    $('#container').on('click','#btn-edit',function () {
        isPreviewPage = false;
        generateNewPage($('#container'),allInput);
    });

    $('#container').on('click','button[role=delete]',function () {
        saveInputData($('#container'),allInput);
        deleteOneInput(this.id,allInput);
        generateNewPageWithoutSaveInput($('#container'),allInput);
    });

});