function deleteOneInput(index,allInput) {
    allInput.splice(index,1);

    allInput.forEach(function (item) {
        if (item.id > index){
            item.id--;
        }
    })
}