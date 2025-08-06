<!--
 	������ home/top��ư ��������  
-->

<%
Select Case GetCampusVarsSiteMGC("_CAMPUS_CODE_")	
	Case "INTRO":  '��Ʈ��
                    acaName = "intro"

	Case "CD0247": '����
	 				acaName = "russel_gn"

	Case "CD0001":  '��ġ
	       			acaName = "russel"

	Case "CD0245":  '��
                    acaName = "russel_mokdong"

	Case "CD0250":  '��õ
                    acaName = "russel_bc"
					
	Case "CD0244":  '�д�
                    acaName = "russel_bundang"

	Case "CD0246":  '����
                    acaName = "russel_ct"

	Case "CD0249":  '����
                    acaName = "russel_yt"

	Case "CD0257":  '�߰�
                    acaName = "russel_jg"

	Case "CD0248":  '����
                    acaName = "russel_pc"
	
	Case "CD0342":  '�뱸
                    acaName = "russel_dg"

	Case "CD0349":  '���
					acaName = "russel_us"

	Case "CD0340":  '�ھ��
                    acaName = "core_gj"

	Case "CD0341":  '����
                    acaName = "core_dj"

	Case "CD0343":  '�ھ����
					acaName = "core_wj"

	Case "CD0344":  '�ھ�����
					acaName = "core_jj"

	Case "CD0345":  '�ھ�â��
					acaName = "core_cw"
	
	Case "CD0346":  '�ھ�û��
					acaName = "core_cj"

	Case "CD0363": '�ֻ����� ���
	 				acaName = "russel_hs"

 	Case "CD0347": '���л� ������
					acaName = "russel_sm"

	Case "CD0348": '���л� ������	
					acaName = "russel_w"

	Case "CD0364": '���� ���� ������
					acaName = "russel_wm"

End Select
%>


<style>
.headerWrap, .wrap_right_sky, .wrap_left_sky, .information-box, #megaMoreSite, .footer{display:none !important;}
.footer #megaMoreSite * {letter-spacing:initial;}
</style>


<div class="<%=acaName%> scroll-btn-wrap">
    <!-- top��ư -->
    <div class="scroll-btn-top"><img src="<%=Application("img_path_russel")%>/common/btn/btn_scroll_top.png" alt=""></div>
    <!-- home��ư -->
    <div class="scroll-btn-home">
        <a href="javascript:void(0)" onclick="redirectByDevice('<%=acaName%>')">
            <img src="<%=Application("img_path_russel")%>/common/btn/btn_scroll_home.png" alt="">
        </a>
    </div>    
</div>


<script>
$(document).ready(function() {
    $(window).scroll(function(){
		var scrollTop = $(window).scrollTop();	
		if (scrollTop > 0) {
			$('.scroll-btn-top').addClass('on');
		}
        else{
            $('.scroll-btn-top').removeClass('on');
        }
    });
	
	//  top��ư
	$('.scroll-btn-top').on('click', function(){
		$('html, body').animate({ scrollTop: 0 }, 300);
	});

});

	
//home��ư ��⺰ �п��� url�̵�
function redirectByDevice(target) {
	var urls = {
		intro: {
			pc: 'https://russel.megastudy.net/intro/gateway.asp',
			mo: 'https://mrussel.megastudy.net/intro/intro.asp'
		},
		russel_gn: {
			pc: 'https://russelgn.megastudy.net/russel_gn/main.asp',
			mo: 'https://mrusselgn.megastudy.net/russel_gn/main.asp'
		},
		russel: {
			pc: 'https://russeldc.megastudy.net/russel/main.asp',
			mo: 'https://mrusseldc.megastudy.net/russel/main.asp'
		},
		russel_mokdong: {
			pc: 'https://russelmd.megastudy.net/russel_mokdong/main.asp',
			mo: 'https://mrusselmd.megastudy.net/russel_mokdong/main.asp'
		},
		russel_bc: {
			pc: 'https://russelbc.megastudy.net/russel_bc/main.asp',
			mo: 'https://mrusselbc.megastudy.net/russel_bc/main.asp'
		},
		russel_bundang: {
			pc: 'https://russelbd.megastudy.net/russel_bundang/main.asp',
			mo: 'https://mrusselbd.megastudy.net/russel_bundang/main.asp'
		},
		russel_yt: {
			pc: 'https://russelyt.megastudy.net/russel_yt/main.asp',
			mo: 'https://mrusselyt.megastudy.net/russel_yt/main.asp'
		},
		russel_jg: {
			pc: 'https://russeljg.megastudy.net/russel_jg/main.asp',
			mo: 'https://mrusseljg.megastudy.net/russel_jg/main.asp'
		},
		russel_pc: {
			pc: 'https://russelpc.megastudy.net/russel_pc/main.asp',
			mo: 'https://mrusselpc.megastudy.net/russel_pc/main.asp'
		},
		russel_dg: {
			pc: 'https://russeldg.megastudy.net/russel_dg/main.asp',
			mo: 'https://mrusseldg.megastudy.net/russel_dg/main.asp'
		},
		core_dj: {
			pc: 'https://coredj.megastudy.net/core_dj/main.asp',
			mo: 'https://mcoredj.megastudy.net/core_dj/main.asp'
		},
		russel_ct: {
			pc: 'https://russelct.megastudy.net/russel_ct/main.asp',
			mo: 'https://mrusselct.megastudy.net/russel_ct/main.asp'
		},			
		russel_us: {
			pc: 'https://russelus.megastudy.net/russel_us/main.asp',
			mo: 'https://mrusselus.megastudy.net/russel_us/main.asp'
		},
		core_gj: {
			pc: 'https://coregj.megastudy.net/core_gj/main.asp',
			mo: 'https://mcoregj.megastudy.net/core_gj/main.asp'
		},
		core_wj: {
			pc: 'https://corewj.megastudy.net/core_wj/main.asp',
			mo: 'https://mcorewj.megastudy.net/core_wj/main.asp'
		},
		core_jj: {
			pc: 'https://corejj.megastudy.net/core_jj/main.asp',
			mo: 'https://mcorejj.megastudy.net/core_jj/main.asp'
		},
		core_cw: {
			pc: 'https://corecw.megastudy.net/core_cw/main.asp',
			mo: 'https://mcorecw.megastudy.net/core_cw/main.asp'
		},
		core_cj: {
			pc: 'https://corecj.megastudy.net/core_cj/main.asp',
			mo: 'https://mcorecj.megastudy.net/core_cj/main.asp'
		},
		russel_hs: {
			pc: 'https://russelhs.megastudy.net/russel_hs/main.asp',
			mo: 'https://mrusselhs.megastudy.net/russel_hs/main.asp'
		},
		russel_sm: {
			pc: 'https://russelsm.megastudy.net/russel_sm/main.asp',
			mo: 'https://mrusselsm.megastudy.net/russel_sm/main.asp'
		},
		russel_w: {
			pc: 'https://russelw.megastudy.net/russel_w/main.asp',
			mo: 'https://mrusselw.megastudy.net/russel_w/main.asp'
		},
		russel_wm: {
			pc: 'https://russelwm.megastudy.net/russel_wm/main.asp',
			mo: 'https://mrusselwm.megastudy.net/russel_wm/main.asp'
		}
	};
	var userAgent = navigator.userAgent.toLowerCase();
	var isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
	var urlSet = urls[target];
	if (urlSet) {
		window.location.href = isMobile ? urlSet.mo : urlSet.pc;
	}
}

</script>