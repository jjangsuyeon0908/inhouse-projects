$(function(){
    layerPop();
})

function layerPop(){
    $('.teacher-wrap .t-box').each(function(i){
        $(this).on('click', function(){
            var tindex = $(this).index('.teacher-wrap .t-box');
            $('.dim').css('display', 'block');
            $('.layer-wrap').css('display', 'block');

            layerSlide.slideToLoop(tindex, 0, false);
        });
    });

    $('.bt-close-tt').on('click', function(){
        $('.dim').css('display', 'none');
        $('.layer-wrap').css('display', 'none');

        
    });

    var layerSlide = new Swiper('.layer-swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        slidesPerView : 'auto',
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

}



