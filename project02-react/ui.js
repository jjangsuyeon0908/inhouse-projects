		$(document).ready(function(){

			$('.scroll-top-btn').off('click');

			// 기존의 이벤트 핸들러를 유지한 채로 추가 작업 수행
			$('.scroll-top-btn').on('click', function(event) {
				// 기본 동작을 막고 새로 정의한 동작 실행
				event.preventDefault();
		
				// 새로운 GSAP 스크롤 탑 애니메이션
				gsap.to(window, {
					scrollTo: { y: 0, autoKill: false },
					duration: 0.3
				});
			});

			/*======= Tab =======*/
			// 페이지 로드 후 첫 번째 탭을 기본으로 활성화
			$('.tab-link').first().addClass('on');
			var firstImg = $('.tab-link').first().find('img');
			var firstImgSrc = firstImg.attr('src');
			firstImg.attr('src', firstImgSrc.replace('.png', '_on.png'));
			$('#tab-content-1').addClass('on');

			// 탭 클릭 이벤트 처리
			$('.tab-link').click(function(event) {
				event.preventDefault();

				// 모든 탭의 이미지를 원래 상태로 되돌림
				$('.tab-link img').each(function() {
					var imgSrc = $(this).attr('src');
					if (imgSrc.includes('_on.png')) {
						$(this).attr('src', imgSrc.replace('_on.png', '.png'));
					}
				});

				// 클릭한 탭의 이미지에 _on 추가
				var clickedImg = $(this).find('img');
				var clickedImgSrc = clickedImg.attr('src');
				clickedImg.attr('src', clickedImgSrc.replace('.png', '_on.png'));

				// 모든 탭에서 on 클래스 제거
				$('.tab-link').removeClass('on');

				// 클릭한 탭에 on 클래스 추가
				$(this).addClass('on');

				// 모든 컨텐츠 숨기기
				$('.cont-benefit').removeClass('on');

				// 클릭한 탭에 해당하는 컨텐츠 보여주기
				var contentId = '#tab-content-' + $(this).data('tab');
				$(contentId).addClass('on');
			});
			
			/*======= //Tab =======*/

			
			/*======= section별 class="on" 추가 =======*/
			$(window).scroll(function(){
				var scroll = $(window).scrollTop(); 
				var currentSection = null;
			
				$("section").each(function(){
					var sectionOffset = $(this).offset().top;
			
					if (scroll >= sectionOffset) {
						currentSection = $(this); // 현재 스크롤 위치에 해당하는 섹션 저장
					}
				});
			
				if (currentSection && !currentSection.hasClass("on")) {
					$("section").removeClass("on");  // 모든 섹션에서 'on' 클래스 제거
					currentSection.addClass("on");    // 새로 활성화된 섹션에만 'on' 클래스 추가
				}
			});
			/*======= //section별 class="on" 추가 =======*/



		
		});

		/*======= GSAP =======*/
		const sections = document.querySelectorAll(".sec section");
		const sections03 = document.querySelectorAll(".sec03 section");
		
		function goToSection(section) {
			
		  gsap.to(window, {
			scrollTo: { y: section, autoKill: false },
			duration: 1
		  });
		 
		}
		
		sections.forEach(section => {
			ScrollTrigger.create({
				trigger: section,
				// markers: true,
				start: "top bottom",
				end: "bottom bottom",
				onEnter: () => goToSection(section),
			});
		  
		  ScrollTrigger.create({
			trigger: section,
			//   markers: true,
			  start: "top bottom",
			onEnterBack: () => goToSection(section),
		  });
		  
		});
		
		gsap.timeline({  
			scrollTrigger: {
			trigger: ".sec02", // 객체기준범위
			pin: true, // 고정
			start: "top top",
			end: "=+2000",
			scrub: 1, // 모션바운스
			// markers: true, // 개발가이드선
			}
		})
		.to('.sec02 .box01', {duration: 1, delay: 0})
		.to('.sec02 .box01', {duration: 0, opacity: 0, y: -100})

		.to('.sec02 .box02', {duration: 0, opacity: 1, y: 0})
		.to('.sec02 .box02', {duration: 1, delay: 0})
		.to('.sec02 .box02', {duration: 0, opacity: 0, y: -100})
		
		.to('.sec02 .box03', {duration: 0, opacity: 1, y: 0})
		.to('.sec02 .box03', {duration: 1, delay: 0})

		function goToSection02(section02) {
			
			gsap.to(window, {
			  scrollTo: { y: section02, autoKill: false },
			  duration: 1
			});
		   
		  }
		sections03.forEach(section02 => {
		
			ScrollTrigger.create({
				trigger: section02,
				// markers: true,
				start: "top bottom",
				end: "bottom bottom",
				onEnter: () => goToSection02(section02),
				fastScrollEnd: true, // 이 옵션을 추가하여 빠르게 스크롤할 때 종료 위치로 자동 이동
				preventOverlaps: true, // 섹션 간의 중첩을 방지
			});
		  
			ScrollTrigger.create({
				trigger: section02,
				start: "center bottom",
				// end: "bottom bottom-=450",
				// end: "bottom+=300 bottom-=450",
				end: "bottom+=50% bottom-=30%", //화면비율에 따라 동작 가능
				// markers: true,
				onEnterBack: () => goToSection02(section02),
				fastScrollEnd: true, // 이 옵션을 추가하여 빠르게 스크롤할 때 종료 위치로 자동 이동
				preventOverlaps: true, // 섹션 간의 중첩을 방지
			});
		
		});


