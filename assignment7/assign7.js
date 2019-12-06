$('.btn-btn-primary').click(function(){
   
    $("#task").prepend($('.text').val());
 
    var textValue = $('#task').val();
    if(textValue = '') {
    alert('enter a value');
        return;
    }
    })
    