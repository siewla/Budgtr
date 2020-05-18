$(()=>{
    $('.sidenav').sidenav();
    
    if ($('#bank-account').text()<0){
        $('#bank-account').css('color','red');
    } else if ($('#bank-account').text()>=0 && $('#bank-account').text()<=1000 ){
        $('#bank-account').css('color','green');
    } else if($('#bank-account').text()>1000){
        $('#bank-account').css('color','blue');
    }

    $('.item-amount').each(function (){
        if ($(this).text()<0){
            $(this).css('color','red');
        } else {
            $(this).css('color','green');
        }
    });

});
