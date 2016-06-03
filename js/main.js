$(function () {
    var $container = $('#container');
    var $btnPreview = $('#btn-preview');
    var $btnEdit = $('#btn-edit');
    var $rows = $('#rows');
    var $previewRows = $('#previewrows');

    function edit() {
        $previewRows.empty();
        $rows.show();
        $btnPreview.show();
        $btnEdit.hide();
    }

    function submit() {
        var isAllValid = true;

        $rows.find('input').each(function () {
            var boolen = isValid(this.value);
            isAllValid = isAllValid && boolen;
        });
        if(isAllValid){
            alert('Submit Succeed!');
        }else {
            alert('Input Unvalid!');
        }
    }

    $container.on('click','#btn-add',function () {
        addRow($('#btn-add'),$('#rows'));
        if($('#rows').children().length == 1){
            $('#btn-preview').show();
            $('#btn-submit').show();
        }
    });
    $container.on('click','#btn-delete',function () {
        deleteRow($('#btn-add'),$('#rows'));
        if($('#rows').children().length == 0){
            $('#btn-add').prependTo('#container');
            $('#btn-preview').hide();
            $('#btn-submit').hide();
        }
    });
    $container.on('click','#btn-preview',function () {
        preview($('#rows'),$('#previewrows'),$('#btn-preview'),$('#btn-edit'));
    });
    $container.on('click','#btn-edit',function () {
        edit();
    });
    $container.on('click','#btn-submit',function () {
        submit();
    });

});