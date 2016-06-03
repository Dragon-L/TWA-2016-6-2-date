// $.fn.generateForm =  function() {
//     this.hide();
// };

// function addRow() {
//     var $newRow = newRow();
//
//     $newRow.find('input').datepicker();
//     $newRow.append($btnDelete.show());
//     $newRow.append($btnAdd);
//     $rows.append($newRow);
//
//     if($rows.children().length == 1){
//         $btnPreview.show();
//         $btnSubmit.show();
//     }
// }
function addRow(addButton,targetRows) {
    var $newRow = newRow();

    $newRow.find('input').datepicker();
    $newRow.append(deleteButton());
    $newRow.append($(addButton));
    $(targetRows).append($newRow);
}

function deleteRow(addButton,targetRows) {
    $(targetRows).children().last().detach();
    var $lastRow = $(targetRows).children().last();
    // $lastRow.append($btnDelete);
    $lastRow.append($(addButton));
}