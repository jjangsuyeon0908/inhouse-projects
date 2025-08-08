$(function() {

	//gnb틀고정용
	$(window).load(function(){
		//페이지 로드 시 스크롤 visual로 이동
		$('html, body').animate({
			scrollTop : $('.visual-wrap').offset().top + 1			
		});
	});	

	//페이지 로드 후 1초 동안 스크롤 중지 후 1초 지나면 스크롤 가능하도록
	function delay(){
		setTimeout(enableScroll ,1000);
	}

	//스크롤 시 스크롤 안 되게 하는 이벤트 제거
	function enableScroll(){
		$(window).off("scroll", disableScroll);
	}

	//스크롤 안 되게 하는 이벤트
	function disableScroll(){
		//페이지 상단 위치값 찾기
		var target = document.querySelector('.visual-wrap');
		var endY = target.getBoundingClientRect().top + window.pageYOffset;

		////스크롤 Y값 이동
		window.scrollTo(0, endY);
	}
	$(window).on("load", delay);
	$(window).on("scroll", disableScroll);

	if($('.cont04 div').hasClass('teacher-swiper')){
		tSlide();
	}
	if($('.cont04 div').hasClass('teacher-sub-list')){
		teacherSlide();
	}
	fixmenu();
	dDay();
	

});



// 팝업 열기 함수
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

// 팝업 닫기 함수
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// 이벤트 리스너 추가
document.getElementById("openPopup").addEventListener("click", openPopup);
document.getElementById("closePopup").addEventListener("click", closePopup);



//count 한번만 실행
let countStart = true;

/* 고정메뉴, 스크롤 이벤트 */
function fixmenu(){
	var $cont = $('.js-cont');
	var $fix_top = $('.fix-menu').offset().top + 80;
	var $bt_fix = $('.fix-menu a');
	var $fix_h = $('.fix-menu').height();

	// fixmenu 클릭 시 이동
	$bt_fix.on('click',function(e){

		e.preventDefault();
		var i = $(this).index();
		var $cont_i  = $cont.eq(i);
		var $cont_top = $cont_i.offset().top - 102;

		// 헤더가 pos-sticky 없을때 첫번째 탭 타겟위치
		if (i == 0) {
			if($('.headerWrap').hasClass('pos-sticky') === false){
				$('html, body').animate({scrollTop:$cont_top + 20}, 800);
			}
			else{
				// 첫번째 탭 클릭시 컨텐츠 위에서 아래로 스크롤이동
				if($cont_top > preScrollTop ){
					$('html, body').animate({scrollTop:$cont_top + $fix_h + 30 }, 800);				
				}
				// 첫번째 탭 컨텐츠 아래에서 위로 스크롤이동
				else{
					$('html, body').animate({scrollTop:$cont_top }, 800);
				}
			}
		}
		// 헤더가 pos-sticky 없을때 타겟위치
		else if($('.headerWrap').hasClass('pos-sticky') === false){
			$('html, body').animate({scrollTop:$cont_top - $fix_h + 20}, 800);
		}
		else {			
			// 클릭시 컨텐츠 위에서 아래로 스크롤이동
			if($cont_top > preScrollTop ){
				$('html, body').animate({scrollTop:$cont_top + $fix_h/2 }, 800);				
			}
			else{
				// 클릭시 컨텐츠 아래에서 위로 스크롤이동
				$('html, body').animate({scrollTop:$cont_top - $fix_h + 3}, 800);
			}
		}
	});

	// 스크롤 이벤트
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		scl();
		// 스크롤시 fixmenu 활성화
		if(scroll >= $fix_top){
			$('.fix-menu').addClass('fix');
		}else if(scroll==0){
			$('.fix-menu a').removeClass('on');
			$('.fix-menu a').eq(0).addClass('on');	
		}else{
			$('.fix-menu').removeClass('fix')
		}

		// 스크롤시 fixmenu 버튼에 클래스 'on'추가
		$cont.each(function(i){
			var $target = $cont.eq(i);
			var $target_top  = Math.floor($target.offset().top - $fix_h - 102);
			if(scroll >= $target_top){
				$bt_fix.eq(i).addClass('on').siblings().removeClass('on');
			}
		});


		//인트로 .cont01에 스크롤시 count 스타트
		if($('.visual-wrap').hasClass('intro')){
			//카운터 자바스크립트 추가
			var gTop = $(".cont01");
			var $gtopScroll  = gTop.offset().top-300;
			if(scroll >= $gtopScroll ){
				gTop.addClass("on");
			} 
		
			if($(".cont01 *").hasClass("counter")) {
				var gTop03 = $(".cont01");
				var $gtopScroll03  = gTop03.offset().top - 300;
				if(scroll >= $gtopScroll03 && countStart == true){
					gTop03.addClass("on");
					countNum()
					//count 한번만 실행
					countStart = false
				} else {
					//$('.counter').text(0);
				}
			}
		}

	});

	function scl(){
		var $cont = $('.js-cont')
		var winScl	= $(window).scrollTop()		
		$cont.each(function(i){
			var target      = $cont.eq(i);
			var target_top  = target.offset().top
	
			if(winScl >= target_top - 500 ){
				$(this).addClass('on');
			}
		})
	}


}



/* cont01 카운트 */
function countNum() {
	$('.counter').each(function() {
		var $this = $(this),
			countTo = $this.attr('data-count');
		$({ countNum: $this.text()}).animate({
			countNum: countTo
		},
		{
			duration: 1500,
			easing:'linear',
			//4자리 수일때 콤마사용
			step: function() {
			$this.text(Math.floor(this.countNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			},
			complete: function() {
			$this.text(Math.floor(this.countNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			}
		});
	});
};













//강사진
function tSlide(){
	var slideIndex01 = $(".teacher-swiper .swiper-slide").index()
	
	var tSwiper = new Swiper('.teacher-swiper',{
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		loop:true,
		centeredSlides: true,
        centeredSlidesBounds: true,
		speed: 2500,
		grabCursor: true,
        initialSlide : randomIdx(),//슬라이드 시작 랜덤
		slidesPerView: 'auto',
		spaceBetween: 40,
		freeMode: {
			enabled: true,
			momentumBounce:false
		},
	});

    $('.teacher-swiper').hover(
		function(){
			tSwiper.autoplay.stop();
    },
		function(){
			tSwiper.autoplay.start();
		}
	);
}

//슬라이드 랜덤
function randomIdx()  {
	var slideTotal01 = $('.teacher-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
	var r_slide01 = Math.floor(Math.random() * slideTotal01);
	return parseInt(r_slide01);
}

function teacherSlide(){
	var slideIndex02 = $(".teacher-sub-list .swiper-slide").index()
	
	var tSwiper = new Swiper('.teacher-sub-list',{
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		loop:true,
		centeredSlides: true,
        centeredSlidesBounds: true,
		speed: 2500,
		grabCursor: true,
        initialSlide : randomIdx02(),//슬라이드 시작 랜덤
		slidesPerView: 'auto',
		spaceBetween: 40,
		freeMode: {
			enabled: true,
			momentumBounce:false
		},
	});

    $('.teacher-sub-list').hover(
		function(){
			tSwiper.autoplay.stop();
    },
		function(){
			tSwiper.autoplay.start();
		}
	);

    // .cate.new가 포함된 슬라이드 내의 .t-sub에 스타일 추가
    document.querySelectorAll('.swiper-slide').forEach(function (slide) {
        if (slide.querySelector('.cate.new')) {
            const tSub = slide.querySelector('.t-sub');
            if (tSub) {
                tSub.classList.add('new-sub-highlight');
            }
        }
    });
}

//슬라이드 랜덤
function randomIdx02()  {
	var slideTotal02 = $('.teacher-sub-list .swiper-slide:not(.swiper-slide-duplicate)').length;
	var r_slide02 = Math.floor(Math.random() * slideTotal02);
	return parseInt(r_slide02);
}

// 바자관 팝업
function layerPop() {
	$(".zoom-pop").addClass("on")
}
$(document).mouseup(function (e){
	var LayerPopup = $(".zoom-pop");
	if(LayerPopup.has(e.target).length === 0){
		LayerPopup.removeClass("on");
	}

});
$('.btn-close').on('click',function(){
	$('.zoom-pop').removeClass('on')		
})

// D-Day
// function dDay(){
//     var dday = new Date("Nov 14,2025,00:00:00").getTime(); //디데이
// 	setInterval(function(){
// 		var now = new Date(); //현재 날짜 가져오기
// 		var distance = dday - now;
// 		var d = Math.floor(distance / (1000 * 60 * 60 * 24));
// 		$('.dday').html('D-'+d )
// 	}, 1000);
// }


//페이지 url 뒤에 파라미터값으로 확인용 디데이
function dDay() {
    var dday = new Date("Nov 14, 2025 00:00:00").getTime(); // 디데이 설정

    // URL 파라미터에서 now 값을 읽어오기
    var urlParams = new URLSearchParams(window.location.search);
    var nowParam = urlParams.get("now");
    var now;

    if (nowParam && /^\d{12}$/.test(nowParam)) {
        // YYYYMMDDHHMM 형식일 경우 파싱
        var year = parseInt(nowParam.substring(0, 4), 10);
        var month = parseInt(nowParam.substring(4, 6), 10) - 1; // 0부터 시작
        var day = parseInt(nowParam.substring(6, 8), 10);
        var hour = parseInt(nowParam.substring(8, 10), 10);
        var minute = parseInt(nowParam.substring(10, 12), 10);
        now = new Date(year, month, day, hour, minute, 0);
    }

    setInterval(function () {
        var current = now ? new Date(now.getTime() + (Date.now() - startTime)) : new Date();
        var distance = dday - current;
        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
        $('.dday').html('D-' + d);
    }, 1000);

    var startTime = Date.now(); // 기준 시간 저장 (애니메이션용)
}
