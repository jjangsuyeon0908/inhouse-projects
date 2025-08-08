$(function() {

	//gnbƲ������
	$(window).load(function(){
		//������ �ε� �� ��ũ�� visual�� �̵�
		$('html, body').animate({
			scrollTop : $('.visual-wrap').offset().top + 1			
		});
	});	

	//������ �ε� �� 1�� ���� ��ũ�� ���� �� 1�� ������ ��ũ�� �����ϵ���
	function delay(){
		setTimeout(enableScroll ,1000);
	}

	//��ũ�� �� ��ũ�� �� �ǰ� �ϴ� �̺�Ʈ ����
	function enableScroll(){
		$(window).off("scroll", disableScroll);
	}

	//��ũ�� �� �ǰ� �ϴ� �̺�Ʈ
	function disableScroll(){
		//������ ��� ��ġ�� ã��
		var target = document.querySelector('.visual-wrap');
		var endY = target.getBoundingClientRect().top + window.pageYOffset;

		////��ũ�� Y�� �̵�
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



// �˾� ���� �Լ�
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

// �˾� �ݱ� �Լ�
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// �̺�Ʈ ������ �߰�
document.getElementById("openPopup").addEventListener("click", openPopup);
document.getElementById("closePopup").addEventListener("click", closePopup);



//count �ѹ��� ����
let countStart = true;

/* �����޴�, ��ũ�� �̺�Ʈ */
function fixmenu(){
	var $cont = $('.js-cont');
	var $fix_top = $('.fix-menu').offset().top + 80;
	var $bt_fix = $('.fix-menu a');
	var $fix_h = $('.fix-menu').height();

	// fixmenu Ŭ�� �� �̵�
	$bt_fix.on('click',function(e){

		e.preventDefault();
		var i = $(this).index();
		var $cont_i  = $cont.eq(i);
		var $cont_top = $cont_i.offset().top - 102;

		// ����� pos-sticky ������ ù��° �� Ÿ����ġ
		if (i == 0) {
			if($('.headerWrap').hasClass('pos-sticky') === false){
				$('html, body').animate({scrollTop:$cont_top + 20}, 800);
			}
			else{
				// ù��° �� Ŭ���� ������ ������ �Ʒ��� ��ũ���̵�
				if($cont_top > preScrollTop ){
					$('html, body').animate({scrollTop:$cont_top + $fix_h + 30 }, 800);				
				}
				// ù��° �� ������ �Ʒ����� ���� ��ũ���̵�
				else{
					$('html, body').animate({scrollTop:$cont_top }, 800);
				}
			}
		}
		// ����� pos-sticky ������ Ÿ����ġ
		else if($('.headerWrap').hasClass('pos-sticky') === false){
			$('html, body').animate({scrollTop:$cont_top - $fix_h + 20}, 800);
		}
		else {			
			// Ŭ���� ������ ������ �Ʒ��� ��ũ���̵�
			if($cont_top > preScrollTop ){
				$('html, body').animate({scrollTop:$cont_top + $fix_h/2 }, 800);				
			}
			else{
				// Ŭ���� ������ �Ʒ����� ���� ��ũ���̵�
				$('html, body').animate({scrollTop:$cont_top - $fix_h + 3}, 800);
			}
		}
	});

	// ��ũ�� �̺�Ʈ
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		scl();
		// ��ũ�ѽ� fixmenu Ȱ��ȭ
		if(scroll >= $fix_top){
			$('.fix-menu').addClass('fix');
		}else if(scroll==0){
			$('.fix-menu a').removeClass('on');
			$('.fix-menu a').eq(0).addClass('on');	
		}else{
			$('.fix-menu').removeClass('fix')
		}

		// ��ũ�ѽ� fixmenu ��ư�� Ŭ���� 'on'�߰�
		$cont.each(function(i){
			var $target = $cont.eq(i);
			var $target_top  = Math.floor($target.offset().top - $fix_h - 102);
			if(scroll >= $target_top){
				$bt_fix.eq(i).addClass('on').siblings().removeClass('on');
			}
		});


		//��Ʈ�� .cont01�� ��ũ�ѽ� count ��ŸƮ
		if($('.visual-wrap').hasClass('intro')){
			//ī���� �ڹٽ�ũ��Ʈ �߰�
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
					//count �ѹ��� ����
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



/* cont01 ī��Ʈ */
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
			//4�ڸ� ���϶� �޸����
			step: function() {
			$this.text(Math.floor(this.countNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			},
			complete: function() {
			$this.text(Math.floor(this.countNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			}
		});
	});
};













//������
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
        initialSlide : randomIdx(),//�����̵� ���� ����
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

//�����̵� ����
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
        initialSlide : randomIdx02(),//�����̵� ���� ����
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

    // .cate.new�� ���Ե� �����̵� ���� .t-sub�� ��Ÿ�� �߰�
    document.querySelectorAll('.swiper-slide').forEach(function (slide) {
        if (slide.querySelector('.cate.new')) {
            const tSub = slide.querySelector('.t-sub');
            if (tSub) {
                tSub.classList.add('new-sub-highlight');
            }
        }
    });
}

//�����̵� ����
function randomIdx02()  {
	var slideTotal02 = $('.teacher-sub-list .swiper-slide:not(.swiper-slide-duplicate)').length;
	var r_slide02 = Math.floor(Math.random() * slideTotal02);
	return parseInt(r_slide02);
}

// ���ڰ� �˾�
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
//     var dday = new Date("Nov 14,2025,00:00:00").getTime(); //����
// 	setInterval(function(){
// 		var now = new Date(); //���� ��¥ ��������
// 		var distance = dday - now;
// 		var d = Math.floor(distance / (1000 * 60 * 60 * 24));
// 		$('.dday').html('D-'+d )
// 	}, 1000);
// }


//������ url �ڿ� �Ķ���Ͱ����� Ȯ�ο� ����
function dDay() {
    var dday = new Date("Nov 14, 2025 00:00:00").getTime(); // ���� ����

    // URL �Ķ���Ϳ��� now ���� �о����
    var urlParams = new URLSearchParams(window.location.search);
    var nowParam = urlParams.get("now");
    var now;

    if (nowParam && /^\d{12}$/.test(nowParam)) {
        // YYYYMMDDHHMM ������ ��� �Ľ�
        var year = parseInt(nowParam.substring(0, 4), 10);
        var month = parseInt(nowParam.substring(4, 6), 10) - 1; // 0���� ����
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

    var startTime = Date.now(); // ���� �ð� ���� (�ִϸ��̼ǿ�)
}
