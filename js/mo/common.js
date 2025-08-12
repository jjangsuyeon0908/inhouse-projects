
//상단 비주얼 슬라이드
$(function(){
    middleBanner()  //중간 텍스트 배너
    bottomSlide()   //하단 텍스트 슬라이드
    floatBtn()      //플로팅 메뉴
    maskBg()        //레이어 팝업 마스크 생성
	bannerZone()    //대입합격자 현황
});



//TOP 고정버튼
$(function () {
    var $btnTop = $("#btn-top");
    // hide #btn-top first
    $btnTop.hide();
    // fade in #btn-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $btnTop.fadeIn();
            $btnTop.addClass("on");
        } else {
            $btnTop.fadeOut();
            $btnTop.removeClass("on");
        }
    });

    $btnTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});


// 탭메뉴
function tabMenu(selector, cont){


    // 선택 한 탭메뉴/탭컨텐츠를 저장할 변수
    var $tabMenu = null;
    var $tabItems = null;
    var $selTab =null;
    var $cont = null;

    // 요소 초기화
    $tabMenu = $(selector);
    $tabItems = $tabMenu.find("a");
    $cont = $(cont);


    $tabItems.click(function(e){
        e.preventDefault()
        // 기존 선택 메뉴 항목이 있으면 비선택 상태로 만들기        
        $tabItems.removeClass("on");
        $cont.css("display","none").removeClass("on");
        
        // 클릭한 메뉴 항목을 신규 선택 메뉴 항목으로 저장
        $selTab = $(this);
        var num = $selTab.index();

        // 선택 상태로 만들기
        $selTab.addClass("on");
        $cont.eq(num).css("display","block").addClass("on");

    });

} 

//출강강사진 탭메뉴
$(function(){
    var btn = $(".js-tab02 li a");
    var list = $(".js-cont02");

    list,btn.each(function(i){
        var idx = i;

        $(this).click(function(){
            $(".js-tab02 li").removeClass("on");
            btn.parent().removeClass("on");
            $(this).parent().addClass("on");
            list.hide().eq(idx).show();
        });
    });

    $(".js-tab02 li:first-child").click(function(){
        $(".js-tab02 li").removeClass("on");
        $(this).addClass("on");
        list.show();
    });
});

//레이어 팝업
$(function(){
    $(".js-search-school").on("click", popLayerOpen);
    $(".js-layer-close").on("click", popLayerClose);
    $(".search-result").on("click", popLayerClose);
    function popLayerOpen(){
        $(".js-layer-pop-bg, .js-layer-pop").fadeIn();
        $("body").css({
            "position":"fixed",
            "overflow":"hidden"
        });
    }
    function popLayerClose(){
        $("body").css({
            "position":"relative",
            "overflow":"visible",
        });
        $(".js-layer-pop-bg, .js-layer-pop").fadeOut();
    }
});

//탑배너 롤링
$(function(){
    var top_slide = $(".top-banner .swiper-slide");
    if(top_slide.length >= 2){
        var topBannerswiper = new Swiper('.top-banner', {
            loop:true,
            autoplay: {
                delay: 3500,
            }
        });
    }else{
        var topBannerswiper = new Swiper('.top-banner', {
            loop:false
        });
    }
})

$(function(){
    var $btn_m = $(".cate-list > li > a");

    $btn_m.on('touchstart',function(){
        // e.preventDefault();
        $(this).addClass('active');
    });
    $btn_m.on('touchend',function(){
        // e.preventDefault();
        $(this).removeClass('active');
    });

})

// function allCampus(){    
//     var $bCampus    = $(".js-btn-campus");
//     var $campusList = $(".js-campus-list");
//     var $campusClose = $(".js-campus-close");

//     $bCampus.on("click",function(){
//         $campusList.addClass("on");
//     })

//     $campusClose.on("click",function(){
//         $campusList.removeClass("on");
//     })
// }

function bottomSlide(){
    
    var bottom_slide = $(".js-bottom-slide .swiper-slide").length;

    if(bottom_slide  >= 2){
        var bottom_swiper = new Swiper('.js-bottom-slide', {
            loop: true,
            effect: 'fade',
            speed : 200,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },        
            pagination: {
                el: '.js-bottom-pagination',
                type: 'fraction',
            }
        });
    }else if(bottom_slide == 1){
        var bottom_swiper = new Swiper('.js-bottom-slide', {
            loop: false,  
            pagination: {
                el: '.js-bottom-pagination',
                type: 'fraction',
            }
        });
    }else if(bottom_slide == 0){
        $(".main .js-bottom-slide").css("display","none")
    }
}

function middleBanner(){        
    var middle_slide = new Swiper('.middle-banner', {
        speed: 600,
        parallax: true,
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop:false
    });
}

function bannerZone(){
	var bannerZoneSlide = new Swiper('.bannerZone-info', {
		speed: 600,
        parallax: true,
        slidesPerView: 'auto',
        loop:true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		}
	});
}

// 플로팅 메뉴
function floatBtn(){
    var $fBtn   = $("#btn-floating");
    $fBtn.on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("on");
        $("body").toggleClass("h-body");
        $(".floating-box").toggleClass("on");
        $(".floating-mask").toggleClass("on");
    })
}


//레이어 팝업 마스크
function maskBg(){
    var $btMask = $(".js-mask");
    var $clsoeMask = $(".js-close-mask");

	$btMask.on("click",function(){
		$("body").append("<div class='mask-bg'></div>");
	})
	$clsoeMask.on("click",function(){
		$(".mask-bg").css("display","none")
	})
}

// 결제 fix버튼
function fixBt(){    
    var $fixBtn = $(".js-fix-btn");
    var $btTop  = $fixBtn.parent().offset().top;
    var sHeight =$(window).height();

    $(window).scroll(function(){
        var topScroll = $(window).scrollTop()+sHeight;

        if(topScroll>=$btTop){
            $fixBtn.removeClass("on")
        }else if(topScroll<$btTop){
            $fixBtn.addClass("on")
        }
    })

}

//서브 고정 type02
function fixSubMenu(){
    //01. 메뉴 고정
    var $sTit = $(".sub-tit");
    var $fTab = $(".js-fix-tab");
    var $fTabTop = $fTab.parent().offset().top;
    var $fTabH = $fTab.height();

    // alert($fTabH)

    $(window).scroll(function(){
        var sclTop = $(window).scrollTop();
        // if(sclTop>=10){
        // }else if(9>=sclTop){
        // }

        if(sclTop>=$fTabTop-$fTabH){
            $sTit.css("top","0");
            $fTab.addClass("active")
        }else if($fTabTop-$fTabH>sclTop){
            $sTit.css("top","50px")
            $fTab.removeClass("active")
        }
    })
}

// 메뉴 width 값(가로 스크롤 필요없는경우 생략)
function scrollMenu(){
    
    var $tab_sub    = $(".inner a");
    var $tab_w      = 0;
    var $tab_l      = $tab_sub.length;
    
    for(var i=0;i<$tab_l;i++){
        var $wid = $tab_sub.eq(i).width()+50;
        $tab_w+=$wid;
    }
    
    $(".js-inner").css("width",$tab_w)
    
}

// 탭on 움직이는 언더라인
function barOn(){
    var $bt_on      = $(".bar-on");
    
    $(window).load(function() {
        var on_left     = $(".inner a.on").offset().left;
        var a_w         = $(".inner a.on").width();
        
        $bt_on.css({"left":on_left,"width":a_w,"opacity":1});    
    })

    $(".inner a").on("click",function(){    
        var scl_left    = $(".inner").offset().left; //scroll_left 마이너스 값 체크
        var bt_left = $(this).offset().left;
        var bt_w = $(this).width();
        var bt_on_left = bt_left+Math.abs(scl_left);

        $bt_on.css({"left":bt_on_left,"width":bt_w});
    })
}

function scrollTab(){
    var $bt         = $(".js-scroll-tab a");
    var $cont       = $(".js-scroll-cont");

    $bt.on("click", function (e){
        e.preventDefault();
        var i = $bt.index(this);
        var section = $cont.eq(i);
        var offsetTop = section.offset().top;
        $("body,html").stop().animate({
            scrollTop :offsetTop-93
        }, 500);
    })

}

/*
// 온라인 결제하기(단과/내신/선생님홈)
window.onload = function(){
//$(function(){
    // 강좌 리스트 클릭 시 음영처리
    $(".danka-list li").on("click",function(e){
        $(this).toggleClass("on");
    });
    
    // 강좌 리스트 비활성화
    $(".deactive").unbind("click");

    // 수강신청 팝업
    $(".js-bt-cart").on("click",function(e){
        e.preventDefault();
        $(".js-layer-cart").css("display","block")
    });

    // 장바구니 팝업
    $(".js-bt-lecture").on("click",function(e){
        e.preventDefault();
        $(".js-layer-lecture").css("display","block")
    });

    // mask닫기
    $(".js-pop-close").on("click",function(e){
        e.preventDefault();
        $(".js-layer-cart,.js-layer-lecture").css("display","none")
    });
//});
};
*/

// 동영상 보기 레이어 팝업
function popPlay(url){
    $(".play-wrap").css("display","block");
    $(".play-box iframe").attr("src",url)
};
$(function(){
    $(".js-close-pop").on("click",function(e){
        e.preventDefault()
        $(".play-wrap").css("display","none");
        $(".play-box iframe").removeAttr("src");
    });
})


    // 코로나 현황 버튼
$(function(){
	var $coronaBtn = $("#btn-corona");    
    $(window).scroll(function () {
        if ($(this).scrollTop() < 200) {
            $coronaBtn.fadeIn();
        } else {
            $coronaBtn.fadeOut();     
        }
    });

    function coronaBt(){
        $coronaBtn.toggleClass('on');
    }
	var interval = setInterval(coronaBt, 3500);
    var toggle = true;

    // 메인 전면 레이어 있을 경우 액션 정지
    if($('.mask').is(':visible')){
        $coronaBtn.removeClass('on')
        clearInterval(interval);
        toggle = false;
    }
    $('.js-main-layer > .text > a').on('click', function(){
        interval = setInterval(coronaBt, 3500); 
        toggle = true;
    })

    // 더보기 버튼 클릭 시 액션 정지
    $('#btn-floating').on('click',function(e){
        if($(this).hasClass('on')){
            $coronaBtn.removeClass('on')
            clearInterval(interval);
            toggle = false;
        }else{
            interval = setInterval(coronaBt, 3500); 
            toggle = true;
        }
    })

    
    var corona_slide = new Swiper('.corona-slide', {
        //direction: 'vertical',
		slidesPerView: 1,
		autoplay: {
			delay: 2100,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: false,
    });
});

$(function(){
	$('.footer-toggle').on('click',function(e){
		e.preventDefault()
		$(this).toggleClass('on').next('.footer-wrap').slideToggle();
	});
});