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

    const tagsName = [];

    $('.tags-index').each(function (){
        tagsName.push (this.innerHTML); 
    });

    tagsName.forEach(tag => {
        const tagDiv = $('<button>');
        tagDiv.text(tag);
        tagDiv.addClass('tags-filter');
        $('.tags-name-container').append(tagDiv);
    });

    

    for (let i=0; i<$('.tags-filter').length; i++){
        $('.tags-filter').eq(i).on('click', function (){
            $('.tags-index').eq(i).css('background-color', 'green');
        });
    }

});