$('.gear-check').click(function(){
    console.log('ok')
    $('.color-option').fadeToggle(100);
});

// Change theme 
var colorList = $('.color-option ul li');
colorList
    .eq(0).css('background-color' , '#FEBB48').end()
    .eq(1).css('background-color' , '#36487a').end()
    .eq(2).css('background-color' , '#001a61');

colorList.click(function(){
    $('link[href*="theme"]').attr('href' , $(this).attr('data-value'));
    // console.log($(this).attr('data-value'));
})