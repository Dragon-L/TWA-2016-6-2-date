function saveInputData(position,dataArray) {
    position.find('input').each(function () {
        var rowId = this.id;
        var row = dataArray.find(function (data) {
            return data.id == rowId;
        });
        if (row){
            row.value = this.value;
        }
    });
}