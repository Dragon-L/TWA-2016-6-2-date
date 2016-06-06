$(function () {
    $('#btn-add').bind("click",function () {
        data.hasDialog = true;
        generateNewPage($('#container'),data.allInput);
        data.hasDialog = false;
    });

    $('#body').on('click','#dialog-submit',function () {
        insertData($("input[name='dialogType']:checked").val(),data.allInput);
        $(this).parent().remove();
        generateNewPage($('#container'),data.allInput);
    });

    $('#body').on('click','#dialog-cancel',function () {
        $(this).parent().remove();
        generateNewPage($('#container'),data.allInput);
    });

    $('#container').on('click','#btn-preview',function () {
        data.status = 'preview';
        generateNewPage($('#container'),data.allInput);
    });

    $('#container').on('click','#btn-edit',function () {
        data.status = 'edit';
        generateNewPage($('#container'),data.allInput);
    });

    $('#container').on('click','button[role=delete]',function () {
        saveInputData($('#container'),data.allInput);
        deleteOneInput(this.id,data.allInput);
        generateNewPageWithoutSaveInput($('#container'),data.allInput);
    });

});