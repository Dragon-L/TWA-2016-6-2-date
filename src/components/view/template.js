var dialogTemplate = '<div id="dialog" title="choose format">'+
                            '<input type="radio" name="dialogType" checked   value="date">date<br>'+
                            '<input type="radio" name="dialogType" value="text">text<br>'+
                            '<button id="dialog-submit" type="submit">submit</button>'+
                            '<button id="dialog-cancel">cancel</button>'+
                    '</div>';

var dateTemplate = _.template('<div class="text-center">'+
                                    '<label>Input Date:</label>'+
                                    '<input type="date" placeholder="yy/zz/xxxx"  id=<%- id %> value=<%- value %> >'+
                                    '<button type="button" id=<%- id %> role="delete">-</button>'+
                              '</div>');

var textTemplate = _.template('<div class="text-center">'+
                                    '<label>Input Text:</label>'+
                                    '<input type="text" id=<%- id %> value= <%- value %>>'+
                                    '<button type="button" id=<%- id %> role="delete">-</button>'+
                              '</div>');

var previewButton = '<button id="btn-preview" class="btn btn-default btn-sm">'+
                            'preview'+
                    '</button>';

var editButton = '<button id="btn-edit" class="btn btn-default btn-sm">'+
                            'edit'+
                 '</button>';
