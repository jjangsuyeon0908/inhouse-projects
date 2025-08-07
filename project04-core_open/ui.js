
$(function() {
	var $top = $('.open-event').offset().top;
	$('html, body').animate({scrollTop:$top},500);
	

});


//숫자 카운트
$(window).scroll(function(){ 

    var cont02Top = $('.cont02').offset().top
    var $quick = $('.quick-wrap')


    if($(window).scrollTop() > cont02Top){
        
            
        $('cont02').addClass('on')
        $quick.addClass('on')

        $('.count-num').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
                },
                {
                duration: 1500,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }else if($(window).scrollTop() < cont02Top){
        $quick.removeClass('on')

    }
});











