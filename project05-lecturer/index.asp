<!-- #include virtual="/Public/Method.asp" -->
<!-- #include virtual="/Public/class.Mssql.asp" -->
<!-- #include virtual="/member/inc/member.asp" -->

<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- #include virtual = "/inc/head.asp" -->
  <meta name="title" content="" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <link rel="stylesheet" type="text/css" href="./ui.css">
</head>
<body>

  <!-- #include virtual = "/inc/header.asp" -->
  <h2 class="sub-tit">
    <!-- #include virtual = "/inc/bt_back.asp" -->
    <strong class="tit">����CORE���� ���� �ܰ� ������</strong>
  </h2>
  <section class="sub-wrap lecturer-wrap">
    <div class="visual-wrap">
      <!-- <a href="javascript:void(0)" class="top-banner" onclick="fncAlarmPop()"><img src="<%=Application("img_path_russel")%>/m_russel/core_dj/2023/lecturer/banner_alarm.jpg" alt="�п� ���� ���� �˸��� ��û"></a> -->
      <div class="visual">
        <div class="inner">
          <div class="v-info">
            <p class="tit tit01"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/v-tit01.png" alt="����CORE ����" /></p>
            <p class="tit tit02"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/v-tit02.png" alt="źź�� ���Ƿ°� �������� ��� ���� �� �ִ�, ���� ���� ������" /></p>
            <p class="tit tit03"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/v-tit03.png" alt="�غ�� ���� X ö���� ������ �Ƿ� �ϼ�!" /></p>
            <p class="tit tit04"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/v-tit04.png" alt="���� �ܰ� ������ �Ұ�" /></p>
            <p class="tit tit05"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/v-tit05.png" alt="2024�� ����CORE ���ֿ��� ���� ���Ǹ� �����մϴ�." /></p>
          </div>
        </div>
      </div>
    </div>

    <div class="cont-wrap"> 
      <div class="inner">
        <p><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/cont01_tit01.png" alt="" /></p>
        <div class="tit-box">
          <p><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/cont01_tit02.png" alt="" /></p>
          <p><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/cont01_tit03.png" alt="" /></p>
        </div>
        <div class="teacher-wrap">
          <div class="box-wrap">
            <!-- <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box01.png" alt="���̳�T" /></a>
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box02.png" alt="������T" /></a> -->
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box15.png" alt="���α�T" /></a>
            <a class="t-box" href="javascript:void(0)"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box16.png" alt="������T" /></a>
            <!-- <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box03.png" alt="������T" /></a> -->
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box04.png" alt="������T" /></a>
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box14.png" alt="�տ���T" /></a>
            <!-- <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box05.png" alt="������T" /></a> -->
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box06.png" alt="�̿��T" /></a>
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box07.png" alt="������T" /></a>
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box08.png" alt="�輱��T" /></a>
            <!-- <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box09.png" alt="�ɱԼ�T" /></a>
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box10.png" alt="���ſ�T" /></a> -->
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box11.png" alt="�����T" /></a>
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box12.png" alt="Ȳ����T" /></a>
            <a class="t-box" href="javascript:void(0);"><img src="<%=Application("img_path_russel")%>/m_russel/core_gj/2023/lecturer/t-box13.png" alt="���̼�T" /></a>
          </div>
        </div>
        <div class="btnbox">
          <a class="btn" href="https://mcoregj.megastudy.net/common/russel_danka/russel_danka.asp?idx=1982">����CORE ���� �ܰ� ���� �ڼ��� ����</a>
        </div>
      </div>
      <!-- #include virtual = "/core_gj/2023/lecturer/layer.asp" -->
    </div>
    <div class="dim"></div>
    
  </section>
  
  <!-- #include virtual = "/inc/footer.asp" -->
  <script src="./ui.js"></script>
  <script>
    // //quick �˾�â
    // var popH = screen.availHeight;
    // var popupWidth = '100%';
    // var popupX = (window.screen.width / 2) - (popupWidth / 2);
    // //�п� ���ڼ��� �˸��� ��û �ٷΰ���
    // function fncAlarmPop(){        
    //     <% If IsRealSvr = true Then  '�Ǽ��� %>
    //       var em_num = "112";
    //     <% Else                      '���߼��� %>
    //       var em_num = "9082";
    //     <% End If %>
    //     var url = "/popup/popup_sms_alarm.asp?EM_NUM="+em_num;
    //     window.open(url,'popup_smsalarm','scrollbars=yes, top=0,left='+ popupX);
    // }
  </script>
</body>
</html>