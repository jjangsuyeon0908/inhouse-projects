<%
' ���� Open Graph ��Ÿ �±� ����
If VarType(pageOgMeta) = 0 Then ' ���±׷����� ���� ��� �⺻ ���±׷��� ���
    pageOgMeta = "<meta property='og:image' content='https://russeldata.megastudy.net/campus/images/opengraph.jpg'>"
End If

' ���±׷��� ���
Response.Write pageOgMeta
%>

<title><%=gMGC_Campus_KN %></title>

<!-- �⺻ ��Ÿ �±� -->
<meta charset="euc-kr">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="format-detection" content="telephone=no">

<!-- �ĺ���/������ -->
<link rel="shortcut icon" type="image/x-icon" href="https://russeldata.megastudy.net/campus/images/favicon.ico" />
<link rel="shortcut icon" type="image/icon" href="https://russeldata.megastudy.net/campus/images/favicon.ico">
<link rel="apple-touch-icon" href="https://russel.megastudy.net/russel/Data/apple-touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="76x76" href="https://russel.megastudy.net/russel/Data/apple-touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="120x120" href="https://russel.megastudy.net/russel/Data/apple-touch-icon-iphone4.png" />


<!-- ���� CSS -->
<link rel="stylesheet" type="text/css" href="/common/responsive/css/common.css" />
<link rel="stylesheet" type="text/css" href="/common/responsive/css/reset.css" />

<!-- swiper CSS -->
<link rel="stylesheet" href="/common/css/swiper.min.css">

<!-- ���� JS -->
<script LANGUAGE="JavaScript" src="/russel/Public/js/Util.js"></script>
<!-- #include virtual="/russel/public/jquery.asp" -->
<SCRIPT LANGUAGE="JavaScript" src="/russel/Public/js/popup_lib.js"></SCRIPT>

<!-- swiper JS -->
<script src="/common/js/swiper.min.js"></script>

<%'�÷��̾� ȣ���%>
<script src="/russel/public/Js/tui-code-snippet.js"></script>
<script src="/russel/public/Js/ua-parser.min.js"></script>
<script src="/russel/public/Js/tui-app-loader.js"></script>
<script src="/russel/Public/Js/player.js"></script>
<%'�÷��̾� ȣ���%>

<!-- ���� �±� �Ŵ��� -->
<!--#include virtual="/russel/library/include/common/russel/logger_area_head.asp" -->
