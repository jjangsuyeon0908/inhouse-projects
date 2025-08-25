


$(function() {
	chanceSlide();
	studyHallSlide();
	countPlay();
  manageSlide();

});


function chanceSlide(){
	var chanSweiper = new Swiper('.chance-slide', {
		slidesPerView: 'auto',
		loop: true,
		allowTouchMove: true,
		autoHeight: true,
		spaceBetween: 20,
		centeredSlides: true,
		centeredSlidesBounds: true,
		speed: 500,
		pagination: {
			el: ".swiper-pagination.chance",
			clickable: true,
		},
	});
}

function studyHallSlide(){
	var stuSlideNav = new Swiper('.studyHall-navi', {
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		allowTouchMove:false,
	});	

	var slideCont = new Swiper('.studyHall-slide', {
		loop: true,
		centeredSlides: true,
		slidesPerView: "auto",
		spaceBetween: 10,
		autoHeight: true,
		speed : 500,
		allowTouchMove: true,
		thumbs: {
			swiper: stuSlideNav
		},
	});

	//section3 바자관 롤링 내 이미지 클릭 시 딤드처리
	$('.schedule_link.btn01').on('click',function(){
		// slideCont.autoplay.stop();
		$('.layer-tt.tbl01').addClass('on')
		$('.mask-bg').css('display','block')
	});
	$('.schedule_link.btn02').on('click',function(){
		// slideCont.autoplay.stop();
		$('.layer-tt.tbl02').addClass('on')
		$('.mask-bg').css('display','block')
	});

	$('.layer-tt .bt-close-tt').on('click',function(){
		// slideCont.autoplay.stop();
		$('.layer-tt').removeClass('on')
		$('.mask-bg').css('display','none')
	});
}

 function countPlay(){
	// DOM이 다 준비된 후 스크롤 이벤트 바인딩
	let playStart01 = true;

	$(window).on('scroll', function () {
	const $cont05 = $('.cont05');
	if(!$cont05.length || !playStart01) return;

	const scrollTop = $(window).scrollTop();
	const triggerPoint = $cont05.offset().top - 150;

	if(scrollTop >= triggerPoint){
		countNum();
		playStart01 = false;
	}
	});

 }

function countNum() {
	$('.counter').each(function() {
		var $this = $(this),
			countTo = $this.attr('data-count');
		$({ countNum: $this.text()}).animate({
			countNum: countTo
		},
		{
			duration: 1800,
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

/*데이터 산출 기준 */
$(function(){
    $('.data-txt').on('click',function(){
        $(this).next('.layer-wrap').addClass('on');
    });
    $('.js-close-mask a').on('click',function(){
        $('.layer-wrap').removeClass('on');
    });
})


function manageSlide(){
	var manageSlideNav = new Swiper('.manage-slide-navi', {
		slidesPerView: 3,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		allowTouchMove:false,
	})

	var manageCont = new Swiper('.manage-slide', {
		centeredSlides: true,
		slidesPerView: "auto",
		spaceBetween: 5, 
		autoHeight: true,
		loop:true,
		speed : 500,
		allowTouchMove: true,
		observer: true,
		observeParents: true,
		thumbs: {
			swiper: manageSlideNav
		},
    on: {
      beforeTransitionStart: function() {
        const colors = ['#5126FE', '#6B26FE', '#8526FE']; // 학습, 생활, 입시 색상
        const idx = this.realIndex;

        // 1. 모든 네비 탭 초기화 (기본색)
        document.querySelectorAll('.manage-slide-navi .swiper-slide')
          .forEach(el => {
            el.style.background = '#C0C0C0';   // 기본 gray
            el.style.color = 'rgba(255,255,255,0.55)'; // 기본 텍스트 색
          });

        // 2. 현재 활성 탭만 다시 적용
        const activeNav = document.querySelector('.manage-slide-navi .swiper-slide-thumb-active');
        if(activeNav){
          activeNav.style.background = colors[idx];
          activeNav.style.color = '#fff';
        }

        // 3. 컨텐츠 배경도 동일하게 변경
        document.querySelectorAll('.manage-slide .swiper-slide-active')
          .forEach(el => el.style.background = colors[idx]);
      }
    }
		// autoplay:{
		// 	delay: 7000,
		// 	disableOnInteraction: false,
		// },
	})
}
































/*================= VISUAL confetti =================*/
(() => {
  const svg = document.getElementById('scene');
  const root = document.getElementById('confetti');
  const vb = svg.viewBox.baseVal;
  const rand = (a,b)=>Math.random()*(b-a)+a;

  // 콘페티 색상
  const COLORS = ['#f87171','#fb923c','#fbbf24','#34d399','#60a5fa','#a78bfa'];

  // 두 영역 설정 (픽셀 단위, 217x125 기준)
  // 필요시 원하는 좌표로 바꾸면 됨
  const AREAS = [
    { x1: 15, x2: 90,  y1: 15,  y2: 60  },  // 영역 A
    { x1: 120, x2: 200, y1: 20, y2: 65 }   // 영역 B
  ];

  function spawnBurst({x, y, count=14, minR=1.5, maxR=3, life=900, spread=1.8*Math.PI, speed=220, gravity=400, wind=80}){
    const g = document.createElementNS('http://www.w3.org/2000/svg','g');
    g.setAttribute('transform',`translate(${x},${y})`);
    root.appendChild(g);

    const parts=[];
    for(let i=0;i<count;i++){
      const asRect = Math.random()<0.55; // 원+리본 혼합
      const el = document.createElementNS('http://www.w3.org/2000/svg', asRect? 'rect':'circle');
      const r = rand(minR,maxR);
      if(asRect){
        const w=r*rand(1.5,2.4), h=r*rand(0.9,1.4);
        el.setAttribute('x',(-w/2).toFixed(2));
        el.setAttribute('y',(-h/2).toFixed(2));
        el.setAttribute('width',w.toFixed(2));
        el.setAttribute('height',h.toFixed(2));
        el.setAttribute('rx',(h*0.25).toFixed(2));
      }else{
        el.setAttribute('cx','0');
        el.setAttribute('cy','0');
        el.setAttribute('r',r.toFixed(2));
      }
      el.setAttribute('fill', COLORS[i%COLORS.length]);
      el.setAttribute('opacity','1');
      g.appendChild(el);

      const angle = rand(-spread/2, spread/2) + Math.random()*Math.PI*2;
      const v0 = rand(speed*0.7, speed*1.1);
      const vx = Math.cos(angle)*v0 + rand(-wind, wind)*0.15;
      const vy = Math.sin(angle)*v0 - rand(40,120);
      parts.push({el,x:0,y:0,vx,vy,age:0,life,rot:rand(0,360),rv:rand(-260,260),rect:asRect});
    }

    let last=performance.now();
    const air=0.94;
    function tick(now){
      const dt = Math.min(32, now-last)/1000; last=now;
      let dead=true;
      for(const p of parts){
        p.age += dt*1000; if(p.age<p.life) dead=false;

        // 물리
        p.vx = p.vx*air + wind*dt*0.5;
        p.vy = p.vy*air + gravity*dt;
        p.x += p.vx*dt; p.y += p.vy*dt;
        p.rot += p.rv*dt;

        // 투명도 & 축소 효과
        const t = Math.min(1,p.age/p.life);
        const alpha = 1 - t;
        const scale = 1 - t*0.3;

        if(p.rect){
          p.el.setAttribute('transform',`translate(${p.x.toFixed(2)},${p.y.toFixed(2)}) rotate(${p.rot.toFixed(1)}) scale(${scale.toFixed(3)})`);
        } else {
          p.el.setAttribute('cx',p.x.toFixed(2));
          p.el.setAttribute('cy',p.y.toFixed(2));
          p.el.setAttribute('transform',`scale(${scale.toFixed(3)})`);
        }
        p.el.setAttribute('opacity',alpha.toFixed(3));
      }
      if(!dead) requestAnimationFrame(tick); else g.remove();
    }
    requestAnimationFrame(tick);
  }

  // 자동 루프: 두 영역 중 하나 랜덤 선택
  (function loop(){
    const A = AREAS[Math.random()<0.5 ? 0 : 1];
    const x = rand(A.x1, A.x2);
    const y = rand(A.y1, A.y2);
    spawnBurst({
      x, y,
      count: Math.round(rand(10,16)),
      life: rand(650,1000),
      speed: rand(180,260),
      gravity: rand(360,420),
      wind: rand(50,100)
    });
    setTimeout(loop, rand(380,780));
  })();

  // 외부에서 수동 호출 가능
  window.confettiBurst = (areaIndex = 0, opts = {}) => {
    const A = AREAS[Math.max(0, Math.min(AREAS.length-1, areaIndex))];
    const x = rand(A.x1, A.x2);
    const y = rand(A.y1, A.y2);
    spawnBurst({x, y, ...opts});
  };
})();