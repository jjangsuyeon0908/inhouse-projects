		$(document).ready(function(){

			$('.scroll-top-btn').off('click');

			// ������ �̺�Ʈ �ڵ鷯�� ������ ä�� �߰� �۾� ����
			$('.scroll-top-btn').on('click', function(event) {
				// �⺻ ������ ���� ���� ������ ���� ����
				event.preventDefault();
		
				// ���ο� GSAP ��ũ�� ž �ִϸ��̼�
				gsap.to(window, {
					scrollTo: { y: 0, autoKill: false },
					duration: 0.3
				});
			});

			/*======= Tab =======*/
			// ������ �ε� �� ù ��° ���� �⺻���� Ȱ��ȭ
			$('.tab-link').first().addClass('on');
			var firstImg = $('.tab-link').first().find('img');
			var firstImgSrc = firstImg.attr('src');
			firstImg.attr('src', firstImgSrc.replace('.png', '_on.png'));
			$('#tab-content-1').addClass('on');

			// �� Ŭ�� �̺�Ʈ ó��
			$('.tab-link').click(function(event) {
				event.preventDefault();

				// ��� ���� �̹����� ���� ���·� �ǵ���
				$('.tab-link img').each(function() {
					var imgSrc = $(this).attr('src');
					if (imgSrc.includes('_on.png')) {
						$(this).attr('src', imgSrc.replace('_on.png', '.png'));
					}
				});

				// Ŭ���� ���� �̹����� _on �߰�
				var clickedImg = $(this).find('img');
				var clickedImgSrc = clickedImg.attr('src');
				clickedImg.attr('src', clickedImgSrc.replace('.png', '_on.png'));

				// ��� �ǿ��� on Ŭ���� ����
				$('.tab-link').removeClass('on');

				// Ŭ���� �ǿ� on Ŭ���� �߰�
				$(this).addClass('on');

				// ��� ������ �����
				$('.cont-benefit').removeClass('on');

				// Ŭ���� �ǿ� �ش��ϴ� ������ �����ֱ�
				var contentId = '#tab-content-' + $(this).data('tab');
				$(contentId).addClass('on');
			});
			
			/*======= //Tab =======*/

			
			/*======= section�� class="on" �߰� =======*/
			$(window).scroll(function(){
				var scroll = $(window).scrollTop(); 
				var currentSection = null;
			
				$("section").each(function(){
					var sectionOffset = $(this).offset().top;
			
					if (scroll >= sectionOffset) {
						currentSection = $(this); // ���� ��ũ�� ��ġ�� �ش��ϴ� ���� ����
					}
				});
			
				if (currentSection && !currentSection.hasClass("on")) {
					$("section").removeClass("on");  // ��� ���ǿ��� 'on' Ŭ���� ����
					currentSection.addClass("on");    // ���� Ȱ��ȭ�� ���ǿ��� 'on' Ŭ���� �߰�
				}
			});
			/*======= //section�� class="on" �߰� =======*/



		
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
			trigger: ".sec02", // ��ü���ع���
			pin: true, // ����
			start: "top top",
			end: "=+2000",
			scrub: 1, // ��ǹٿ
			// markers: true, // ���߰��̵弱
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
				fastScrollEnd: true, // �� �ɼ��� �߰��Ͽ� ������ ��ũ���� �� ���� ��ġ�� �ڵ� �̵�
				preventOverlaps: true, // ���� ���� ��ø�� ����
			});
		  
			ScrollTrigger.create({
				trigger: section02,
				start: "center bottom",
				// end: "bottom bottom-=450",
				// end: "bottom+=300 bottom-=450",
				end: "bottom+=50% bottom-=30%", //ȭ������� ���� ���� ����
				// markers: true,
				onEnterBack: () => goToSection02(section02),
				fastScrollEnd: true, // �� �ɼ��� �߰��Ͽ� ������ ��ũ���� �� ���� ��ġ�� �ڵ� �̵�
				preventOverlaps: true, // ���� ���� ��ø�� ����
			});
		
		});


