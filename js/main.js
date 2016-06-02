(function () {
    $(document).ready(function () {
        $("#firstbutton").click(function () {
            // $("#firstbutton").generateForm();


            $('#firstdiv').append('<div>'+
                '<label >Input Date:</label>' +
                '<input type="text"  id="date" placeholder="yy/zz/xxxx">' +
                    '<button type="button" id="deletebutton1" class="btn btn-default btn-sm">'+
                    '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>'+
                    '<button type="button" id="plusbutton1" class="btn btn-default btn-sm">'+
                    '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>'+
                    '</div>');
            
            $('#date').datepicker();
            $("#secondbutton").click(function () {
                    var date = document.getElementById("date").value;
                    var dateIsValid =isValid(date);
                    var message = generateMessage(date,dateIsValid);
                    // alert(message);
                    console.log(message);
            });

        });
    });

})();