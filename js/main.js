$(function () {
    var $container = $('#container');

    var $btnAdd = $('#btn-add');
    var $btnDelete = $('#btn-delete');
    var $btnPreview = $('#btn-preview');
    var $btnEdit = $('#btn-edit');
    var $btnSubmit = $('#btn-submit');
    var $rows = $('#rows');
    var $previewRows = $('#previewrows');



    function deleteRow() {
        $rows.children().last().detach();
        var $lastRow = $rows.children().last();
        // $lastRow.append($btnDelete);
        $lastRow.append($btnAdd);
        if($rows.children().length == 0){
            $btnAdd.prependTo('#container');
            $btnPreview.hide();
            $btnSubmit.hide();
        }
    }

    function preview() {
        $rows.find('input').each(function () {
            $previewRows.append('<p><label>Date:</label>'+this.value+'</p>');
        });
        $rows.hide();
        $btnPreview.hide();
        $btnEdit.show();
    }

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
        addRow('#btn-add','#rows');
        if($('#rows').children().length == 1){
            $('#btn-preview').show();
            $('#btn-submit').show();
        }
    });
    $container.on('click','#btn-delete',function () {
        deleteRow();
    });
    $container.on('click','#btn-preview',function () {
        preview();
    });
    $container.on('click','#btn-edit',function () {
        edit();
    });
    $container.on('click','#btn-submit',function () {
        submit();
    });

});