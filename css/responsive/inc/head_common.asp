<%
' 공통 Open Graph 메타 태그 설정
If VarType(pageOgMeta) = 0 Then ' 오픈그래프가 없을 경우 기본 오픈그래프 출력
    pageOgMeta = "<meta property='og:image' content='https://russeldata.megastudy.net/campus/images/opengraph.jpg'>"
End If

' 오픈그래프 출력
Response.Write pageOgMeta
%>

<title><%=gMGC_Campus_KN %></title>

<!-- 기본 메타 태그 -->
<meta charset="euc-kr">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="format-detection" content="telephone=no">

<!-- 파비콘/아이콘 -->
<link rel="shortcut icon" type="image/x-icon" href="https://russeldata.megastudy.net/campus/images/favicon.ico" />
<link rel="shortcut icon" type="image/icon" href="https://russeldata.megastudy.net/campus/images/favicon.ico">
<link rel="apple-touch-icon" href="https://russel.megastudy.net/russel/Data/apple-touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="76x76" href="https://russel.megastudy.net/russel/Data/apple-touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="120x120" href="https://russel.megastudy.net/russel/Data/apple-touch-icon-iphone4.png" />


<!-- 공통 CSS -->
<link rel="stylesheet" type="text/css" href="/common/responsive/css/common.css" />
<link rel="stylesheet" type="text/css" href="/common/responsive/css/reset.css" />

<!-- swiper CSS -->
<link rel="stylesheet" href="/common/css/swiper.min.css">

<!-- 공통 JS -->
<script LANGUAGE="JavaScript" src="/russel/Public/js/Util.js"></script>
<!-- #include virtual="/russel/public/jquery.asp" -->
<SCRIPT LANGUAGE="JavaScript" src="/russel/Public/js/popup_lib.js"></SCRIPT>

<!-- swiper JS -->
<script src="/common/js/swiper.min.js"></script>

<%'플레이어 호출용%>
<script src="/russel/public/Js/tui-code-snippet.js"></script>
<script src="/russel/public/Js/ua-parser.min.js"></script>
<script src="/russel/public/Js/tui-app-loader.js"></script>
<script src="/russel/Public/Js/player.js"></script>
<%'플레이어 호출용%>

<!-- 구글 태그 매니저 -->
<!--#include virtual="/russel/library/include/common/russel/logger_area_head.asp" -->
