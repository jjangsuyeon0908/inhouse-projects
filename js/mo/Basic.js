//getElementById 간편화
/*	/jquery 와 겹쳐서 주석처리
function $(id)
{
    return document.getElementById(id);
}
*/
//필수입력항목 값 검사
function checkValue(obj, msg, afterFocus)
{
    var result = false;
    
    if(obj.value.length == 0)
    {
        alert(msg);
        if(afterFocus) obj.focus();
        
        result = true;
    }
    
    return result;
}

//정규식으로 유효성을 검사한다, 유효하면 false, 유효하지 않으면 true
function checkExp(str, exp)
{
	//새 대소문자 구별하지 않는(gi) 정규식을 만든다
	reg = new RegExp(exp, "gi");
	return !reg.test(str);
}

//오브젝트의 top, left값을 구하여 배열로 리턴한다
// offset[0] = Left, offset[1] = Top
function getOffset(obj)
{
    var offset = new Array();
    
    offset[0] = obj.offsetLeft;
    offset[1] = obj.offsetTop;
    
    var objParent = obj.offsetParent;
    var tagName = obj.tagName.toLowerCase();
    
    //tagName이 body까지의 offset구하기
    while(tagName != "body")
    {
        offset[0] += objParent.offsetLeft;
        offset[1] += objParent.offsetTop;
        
        objParent = objParent.offsetParent;
        tagName = objParent.tagName.toLowerCase();
    }
    
    return offset;
}

//선택된 라디오값 가져오기
function getRadioValue(rdo)
{
    var value = "";
    
    for(var i = 0; i < rdo.length; i++)
    {
        if(rdo[i].checked)
        {
            value = rdo[i].value;
            break;
        }
    }
    
    return value;
}

//선택된 콤보박스값 가져오기
function getComboValue(combo)
{
    var value = "";    
    for(var i = 0; i < combo.length; i++)
    {
        if(combo[i].selected){
            value = combo[i].value;
            break;
        }
    }    
    return value;
}

//바 없는 새창 열기
function openWindow(url,width,height,scroll)
{
	if(scroll == null) scroll = "no";
	winpos = "left=" + ((window.screen.width-width)/2) + ",top=" + ((window.screen.height-height-28)/2);
	winstyle="width=" + width + ",height=" + height + ",status=no,toolbar=no,menubar=no,location=no,resizable=no,copyhistory=no,scrollbars=" + scroll + "," + winpos;
	window.open(url,'_blank',winstyle);
}

//모달창을 띄운다
function openModal(url, width, height, title, scroll){
	winstyle = "dialogWidth=" + width + "px; dialogHeight:" + height + "px; center:yes; help:no; scroll:no; status:no";
	value = window.showModalDialog("/Public/Modal.asp?url=" + url + "&title=" + title + "&scroll=" + scroll,'_blank', winstyle);
	return value;
}

//모달창을 닫으며 부모창에 값 반환
function closeModal(value){
	window.returnValue = value;
	window.close();
}

// 업로드 진행바 오픈
function showProgress(){ 
    strAppVersion = navigator.appVersion;    
    if (strAppVersion.indexOf('MSIE')!=-1 && strAppVersion.substr(strAppVersion.indexOf('MSIE')+5,1) > 4){
        winstyle = "dialogWidth=385px; dialogHeight:150px; center:yes"; 
        window.showModelessDialog("/Public/show_progress.asp?nav=ie", null, winstyle); 
    } else { 
        winpos = "left=" + ((window.screen.width-380)/2)+",top="+((window.screen.height-110)/2);
        winstyle="width=380,height=110,status=no,toolbar= no,menubar = no," +"location=no,resizable=no,scrollbars=no,copyhistory=no," + winpos; 
        window.open("/Public/show_progress.asp",null,winstyle); 
    }
    return true; 
}

//YYYYMM 유효성검사
function checkYearMonth(obj, objName, afterFocus)
{
    if(obj.value.length < 6){
        alert(objName + "를 입력하여 주십시오.");
        if(afterFocus) obj.focus();
        return true;
    }else{
        var year = eval(obj.value.substring(0, 4));
        if(year < 1900 || year > 2100){
            alert(objName + "의 년도는 1900년~2100년 사이의 년도를 입력하여 주십시오.");
            if(afterFocus) obj.focus();
            return true;
        }
        var month = eval(obj.value.substring(4, 6));
        if(month < 0 || month > 12){
            alert(objName + "의 월이 잘못 입력되었습니다.");
            if(afterFocus) obj.focus();
            return true;
        }
    }    
    return false;
}

//이메일 체크
function checkEmail(obj, msg, afterFocus)
{
    if(checkExp(obj.value, "^[_0-9a-zA-Z-]+([_0-9a-zA-Z-]+)*@[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*$"))
	{
		alert(msg);		
		if(afterFocus) obj.focus();
		return true;
	}
	return false;
}

function LineColor(n1,n2)
{
	var Tr = eval("document.getElementById('Tr"+n2+"')");
	if (n1 == 1)
	{	
		Tr.style.backgroundColor="#EDEDED";
	}
	else{
		Tr.style.backgroundColor="#FFFFFF";
	}
} 

//파일삭제 확인
function confirmRemoveFile(fileCode, tableName, columnName, codeName, codeValue)
{
    var agree = confirm("파일을 삭제하시겠습니까?");
    if(agree)
    {
        document.getElementById("hdnFrame").src = "/russel/admin/Public/_RemoveFile.asp?fileCode=" + fileCode + "&tableName=" + tableName + "&columnName=" + columnName + "&codeName=" + codeName + "&codeValue=" + codeValue;
    }
}

//아이디 체크
function checkAdminID(obj, afterFocus)
{
    if(checkExp(obj.value, "^[a-zA-Z0-9]{4,12}$"))
	{
		alert("아이디는 영문자와 숫자의 조합으로 최소 4자에서 최대 12자까지 사용하실 수 있습니다.");
		if(afterFocus) obj.focus();
		return true;
	}
	
	return false;
}

//비번 체크
function checkAdminPass(obj, afterFocus)
{
    if(checkExp(obj.value, "^[a-zA-Z0-9]{4,12}$"))
	{
		alert("비밀번호는 영문자와 숫자의 조합으로 최소 4자에서 최대 12자까지 사용하실 수 있습니다.");
		if(afterFocus) obj.focus();
		return true;
	}
	
	return false;
}


//문자열 교체
function Replace(text, str1, str2)
{
	for(var i = 0; i < text.length; i++)
	{
		
	}
}

//날짜값 검사
function CheckDate(e,div)
{
	val = e.value;

	len = val.length;
	isNum = !isNaN(val);
	
	if(isNum)
	{
		year = val.substring(0,len-4);
		month = val.substr(len-4,2);
		day = val.substr(len-2,2);
	}
	else
	{
		year = val.substr(0,len-6);
		month = val.substr(len-5,2);
		day = val.substr(len-2,2);
	}
	
	if(year.length == 2 && !isNaN(year) && eval(year) < 50)
		year = "20" + year;
	else if(year.length == 2 && !isNaN(year))
		year = "19" + year;

	if(!isNaN(year+month+day) && (1900 < eval(year) && eval(year) < 2100) && (0 < eval(month) && eval(month) < 13) && (0 < eval(day) && eval(day) < 32))
	{
		e.value = year + div + month + div + day;
		return true;
	}
	else
	{
		return false;
	}
}

//사용자 입력 체크
function Check(str, msg, focus)
{ 
	if(trim(str.value).length == 0)
	{
		if(msg != null && msg != "")
			alert(msg);
		if(focus)
		{
			str.focus();
		}
		return true;
	}
	
	return false;
}

//공백 제거
function trim(str) { return str.replace(/(^\s+)|(\s+)$/,""); }

//주민등록번호의 유효성 검사
function PeopleCode(peoplecode)
{

	var v = new Array(13);
	var arg = new Array(12);
	
	//주민등록번호 각 자리마다 곱해질 인수, 12자리까지 곱하고 마지막 자리는 곱하지 않는다.
	arg[0] = 2;
	arg[1] = 3;
	arg[2] = 4;
	arg[3] = 5;
	arg[4] = 6;
	arg[5] = 7;
	arg[6] = 8;
	arg[7] = 9;
	arg[8] = 2;
	arg[9] = 3;
	arg[10] = 4;
	arg[11] = 5;
	
	var i;
	var sum = 0;
	var result = 0;

	
	//각자리마다 정해진 인수를 곱한뒤 총합을 구한다.
	for(i = 0; i < 12; i++)
	{
		v[i] = parseFloat(peoplecode.substring(i, i+1) * arg[i]);
		sum = sum + v[i];
	}
	
	v[12] = parseFloat(peoplecode.substring(12, 13));

	//총합을 11로 나눈 나머지를 11에서 빼준후 다시 10으로 나눈 나머지(result)를 구해 이것이 주민등록번호
	//맨 마지막 숫자와 같다면 유효한 주민등록 번호이다.
	result = (11 - sum % 11) % 10;

	return (result != v[12]);
}


//입력박스에서 일정갯수의 문자가 입력되면 포커스를 다음 입력박스로 이동한다.
function NextFocus(box, count, nextBox)
{
	if(box.value.length == count)
		nextBox.focus();
}

// Replace
function ReplaceStr(strOriginal, strFind, strChange)
{
  return strOriginal.split(strFind).join(strChange);
}

//라이오버튼의 선택된 값을 가져온다
function GetRadioValue(rdo)
{
	var result = "";
	for(var i = 0; i < rdo.length; i++)
	{
		if(rdo[i].checked)
			result = rdo[i].value;
	}
	
	return result;
}

//다중입력 또는 선택 입력요소 선택 체크
function CheckBx(Obj, msg, focus) {

  var i;
  var chk = 0;

  if(Obj != null) {
	  if(Obj.length != null) {

		   for(i=0;i<Obj.length;i++) 
			  if(Obj[i].checked) chk++;

		   if(chk == 0) {
			  alert(msg);
			  if(focus)	Obj[0].focus();
			  return true;  //선택한 체크박스가 하나도 없을때
		   }

	  }else{
		 
		   if(Obj.checked == false) {
			  alert(msg);
			  if(focus) Obj.focus();
			  return true;
		   }
	  }
  }else{
      alert(msg);
	  if(focus) Obj.focus();
  }

  return false;

}

function CheckNumber() {
   if(event.keyCode < 48 || event.keyCode > 57) {
       event.returnValue = false;
   }
}

function ArrCheck(str, msg, focus) {

 var i;
 for(i=0; i<str.length; i++) {
  	if(trim(str[i].value).length == 0)
	{
		alert(msg);
		if(focus)
		{
			str[i].focus();
		}
		return true;
	}
 }
  return false;

}


function blank_Pop(pName, pWidth, pHeight)
{

  window.open("",pName,"width="+pWidth+",height="+pHeight+",location=no, status=no");

}

function ViewImg(imgfile)
{
  if(imgfile != "") {
	 openWindow("/Public/imgview.asp?filePath="+imgfile,640+"px",560+"px","no")
     //window.open("/Public/imgview.asp?filePath="+imgfile, "imgpop", "height=450,width=640,top=0,left=0,status=no,location=no,toolbar=no,scrollbars=yes,resizable=yes");
   }
   return false;
}


function ViewImg_board(imgfile)
{
  if(imgfile != "") {
     window.open("/Public/imgview_board.asp?filePath="+imgfile, "imgpop", "top=0,left=0,status=no,location=no,toolbar=no,scrollbars=yes,resizable=yes");
   }
   return false;
}


function PreView(){

     if(!document.getElementById("ufile").value) return;

     globalPic=new Image();
	 globalPic.src = document.getElementById("ufile").value;
     document.images.PreImg.src = globalPic.src;
     document.getElementById("imgArea").style.display = "";


}


//function eventControl() {
//  e = event.srcElement;
//  if(e.tagName!='DIV') return false;
//}

//document.onselectstart=eventControl;
//document.ondragstart=eventControl;


/**************************************************/
/* 리스트상 상세보기*/
/**************************************************/
var selectedContent = null;
var selectedContent_c = null;


	function ViewContents(id) 
	{
	   try 
	   {
		   var obj = document.getElementById(id);

		   if(selectedContent != null)
		   {
			  selectedContent.style.display = "none";
			
		   }
		
		   if(selectedContent != obj)
		   {
			   selectedContent = obj;
			   selectedContent.style.display = "";
		   }else{

               if(obj.style.display == "") {
                  obj.style.display = "none";
			   }else{
                  obj.style.display = "";
			   }
		   }

           if(document.getElementById(id+"_c") != null) {

				   var obj_c = document.getElementById(id+"_c");

				   if(selectedContent_c != null)
				   {
					  selectedContent_c.style.display = "none";
					
				   }
				
				   if(selectedContent_c != obj_c)
				   {
					   selectedContent_c = obj_c;
					   selectedContent_c.style.display = "";
				   }else{

					   if(obj_c.style.display == "") {
						  obj_c.style.display = "none";
					   }else{
						  obj_c.style.display = "";
					   }
				   }

		   }
           

	   }
	   catch(e)
	   {
		  alert(e.description);
	   }
	}
/****************************************************/


function checkContentLength(obj, max_length, byteView)
{
	var i;
	var string = obj.value;
	var one_char;
	var str_byte = 0;
	var str_length = 0;
  
    for(i = 0 ; i < string.length ; i++)
    {
		 // 한글자추출
		 one_char = string.charAt(i);
		 // 한글이면 2를 더한다.
		 if (escape(one_char).length > 4)
		 {
		     str_byte = str_byte+2;
		 }
		 // 그외의 경우는 1을 더한다.
		 else
		 {
		     str_byte++;
         }

	     // 전체 크기가 li_max를 넘지않으면
	     if(str_byte <= max_length)
	     {
	         str_length = i + 1;
	     }
    }
 

    // 전체길이를 초과하면
    if(str_byte > max_length)
    {
	    alert(" 글자를 초과 입력할수 없습니다. \n 초과된 내용은 자동으로 삭제 됩니다. ");
	    obj.value = string.substr(0, str_length);
    }else{

        if(byteView) document.getElementById(byteView).innerHTML = str_byte;

	}

}

// 마우스오버 스크립트
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


function NowDate(){
   var d, yy, mon, day, hh, mm, s ;                 
   d = new Date();                           //Date 개체를 만듭니다.  
   yy = d.getYear();                         //연도를 가져옵니다.
   s = yy ;     //년을 가져옵니다.

   mon = (d.getMonth() + 1)
   if (mon < 10){
	   mon = "0" + mon
   }
   s += mon ;     //월을 가져옵니다.
   
   day = d.getDate()
   if (day < 10){
	   day = "0" + day
   }
   s += day ;     //일을 가져옵니다.
   
   hh = d.getHours()
   if (hh < 10){
	   hh = "0" + hh
   }
   s += hh ;     //시각를 가져옵니다.
   
   mm = d.getMinutes()
   if (mm < 10){
	   mm = "0" + mm
   }
   s += mm ;     //분을 가져옵니다.

   return(s);                                //날짜를 반환합니다.
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


function player_free(kbn, para) {
var param = para.toString();
	var lecCd = param.match(/\d+/g)?.join('') || '';
	var flg = 99

	//임시 분기 추후 player_russel로 변경
	if (lecCd.length >= 5) {
    //고화질 탭구분용(P:OT,맛보기,F:이벤트)
/*
    if (kbn == "20" || kbn == "72" || kbn == "90" || kbn == "80" || kbn == "91" || kbn == "82") {	//논술메인 진수관련 코드 추가 20150813 CHOIJH
        PlayerKbn = "P";
    } else if (kbn == "29") {
        PlayerKbn = "I";
    } else if (kbn == "79" || kbn == "89" || kbn == "99") {
        PlayerKbn = "D";
    } else {
        PlayerKbn = "F";
    }
*/
	PlayerKbn = "F";
	vPlayerLnk = "H";
    vPlayerParam = "?dng_kbn=23&CHR_CD=" + para;

/*
    if (kbn == "10" || kbn == "20" || kbn == "72" || kbn == "80" || kbn == "90" || kbn == "91" || kbn == "79" || kbn == "89") { fncPreDngCnt(vPlayerParam); } //조회수 측정//진수맛보기 추가

    //일반 동영상 맛보기(free) - 10:일반 15:선생님 동영상 인사 31~39 : 일반 맛보기 선택
    if ((kbn >= "10" && kbn <= "19") || (kbn >= "31" && kbn <= "39") || kbn == "50" || kbn == "51" || kbn == "62" || kbn == "79" || kbn == "80") { vPlayerLnk = "L"; }

    //쌩쌩 플러스 동영상 맛보기 (free) - 20:쌩쌩 23:맛보기  72:OT	82:학습정보(OT2) 41~49 : 쌩쌩 맛보기 선택
    if ((kbn >= "20" && kbn <= "29") || (kbn >= "41" && kbn <= "49") || kbn == "60" || kbn == "72" || kbn == "82" || kbn == "90" || kbn == "91" || kbn == "88" || kbn == "89" || kbn == "99") { vPlayerLnk = "H"; }
*/

    player_div(vPlayerLnk, vPlayerParam, 'D', PlayerKbn, 'N');
    return;
} else {
		player_russel(flg, 0, lecCd);
	}
}

function player_div(lnk, par, opt, kbn, app) {
	var site = "http://www.megastudy.net";	

	var UseWidth = window.screen.availWidth;
	var UseHeight = window.screen.availHeight;

	var userBrowser=BrowserVersion="";

    var pPlayerUrl, pSetParam, pOpt, pPlayerNm;
    //pSetParam = par + "&PlayerKbn=" + kbn + "&PlayerApp=" + app + "&UseWidth=" + UseWidth + "&UseHeight=" + UseHeight + "&AppVersion=" + appVersion + "&OsVersion=" + osVersion + "&appver=" + navigator.userAgent;
    //pSetParam = par + "&PlayerKbn=" + kbn + "&PlayerApp=" + app + "&UseWidth=" + UseWidth + "&UseHeight=" + UseHeight + "&PlayerLoc=" + lnk + "&userBrowser=" + userBrowser + "&BrowserVersion=" + BrowserVersion;
	pSetParam = par + "&PlayerKbn=" + kbn + "&PlayerApp=" + app + "&UseWidth=" + UseWidth + "&UseHeight=" + UseHeight + "&PlayerLoc=" + lnk + "&userBrowser=" + userBrowser + "&BrowserVersion=" + BrowserVersion;

    if (kbn == "F" || kbn == "U") {
        if (pSetParam.indexOf("PlayerTabCtrl=") > -1) {
            if (pSetParam.indexOf("PlayerTabCtrl=OFF") == -1) {
                pSetParam = pSetParam.replace("PlayerTabCtrl=", "PlayerTabCtrl=OFF");
            }
        } else {
            pSetParam += "&PlayerTabCtrl=OFF";
        }
    }

    if (lnk == "H") {
        if (UseWidth >= 1333) {
            var eWidth = "1320";
            var eHeight = "726";
        } else {
            var eWidth = "1024";
            var eHeight = "560";
        }
    } else if (lnk == "L") {
        var eWidth = "740";
        var eHeight = "540";
    }
    
    if (lnk == "H") {
        pPlayerUrl = site+"/Player/MegaPlayer/PlayerHigh/Player.asp";
        pOpt = "width=1024,height=580,top=0,left=0,resizable=0,status=no,scrollbars=no";
    } else if (lnk == "L") {
        pPlayerUrl = site+"/Player/MegaPlayer/PlayerLow/Player.asp";
        pOpt = "width=600,height=500,top=0,left=0,resizable=0,status=no,scrollbars=no";
    } else {
        pPlayerUrl = lnk;
        pOpt = opt;
    }

    if (pSetParam.indexOf("PlayerTabCtrl=OFF") > -1) {
        eWidth = eWidth - 276;
    }

    if (navigator.userAgent.lastIndexOf('Android') > 0 || navigator.userAgent.lastIndexOf('iPhone') > 0 || navigator.userAgent.lastIndexOf('iPad') > 0) {


        if(confirm("3G/4G 환경에서는 데이터 패킷요금이 발생할 수 있습니다.")){

			// Check SmartLearing in-app -------------------------------------------------------
			var is_smartlearing_in_app = false;
			if (navigator.userAgent.lastIndexOf('net.megastudy.smartplay.main') > 0) {
				is_smartlearing_in_app = true;
			} else if (navigator.userAgent.lastIndexOf('com.megastudy.SmartPlay') > 0) {
				is_smartlearing_in_app = true;
			} else {
				//is_smartlearing_in_app = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
			}
			//-----------------------------------------------------------------------------------

			if (is_smartlearing_in_app == true)
			{
				// SmartLearning in-app
				if (lnk == "H") {
					pPlayerUrl = site+"/mobile/app_v2/player/player_high.asp";
				} else if (lnk == "L") {
					pPlayerUrl = site+"/mobile/app_v2/player/player_norm.asp";
				}		
				// <<< ################################################
				try {
					$.getJSON( pPlayerUrl + pSetParam, function( data ) {
						if (data.result == "0000") {
							if ("iOS" == data.aData[0].os){
								document.location = "toApp:setPlayUrl:"+data.aData[0].i_path;
							} else {
								window.MegaStudyApp.setPlayUrl(data.aData[0].i_path);
							}				
						}
					});
				} catch (e){}
				// <<< ################################################
				return;
			} else {
	
				// Mobile Browser
				//if (navigator.userAgent.lastIndexOf('Chrome') > 0) {
					document.location.href = pPlayerUrl + pSetParam;
				//} else {
				//	var iMobilePlayifrm = document.getElementById("iMobilePlayifrm");
				//	if (iMobilePlayifrm != null) {
				//		iMobilePlayifrm.parentNode.removeChild(iMobilePlayifrm);
				//	}
				//	var AquaiFrm = document.createElement("iframe");
				//	AquaiFrm.setAttribute("id", "iMobilePlayifrm");
				//	AquaiFrm.setAttribute("src", pPlayerUrl + pSetParam);
				//	AquaiFrm.setAttribute("width", "100px");
				//	AquaiFrm.setAttribute("height", "100px");
				//	AquaiFrm.setAttribute("scrolling", "no");
				//	AquaiFrm.style.border = "0px";
                //
				//	document.body.appendChild(AquaiFrm);
				//}
			}
        } else {
            return;
        }
    } else {

        //if ((app == "N" && kbn != "H") || (document.domain == "next.megastudy.net")) {
          // pPlayerUrl =site+ "/Player/anp/player.asp";
			pPlayerUrl =site+ "/Player/kollus/player.asp";
            pOpt = "width=" + eWidth + ",height=" + eHeight + ",top=0,left=0,resizable=1,status=no,scrollbars=no";
        //}

        try {
            if (MegastudyPlayer == "[object]") MegastudyPlayer.close();
        } catch (e) { }

        var params = "";
        var option;

        var options = { width: eWidth, height: eHeight, title: '합격불변의 법칙 megastudy', top: 0, left: 0 };

        for (option in options)
            params += option + "=" + options[option] + "&";
                
        try {
            
            if ("ActiveXObject" in window) {
                //old active-x player
                pPlayerNm = "DNGPlayer";
				console.log(pPlayerUrl + pSetParam);
                MegastudyPlayer = window.open(pPlayerUrl + pSetParam, pPlayerNm, pOpt);
                MegastudyPlayer.focus();
            } else {
				var href = "nplayer://launch?" + params + "url=" + encodeURIComponent("http://" + document.domain + pPlayerUrl + pSetParam + "&BrowserType=edge" + "&mcd=" + playerencode(getCookie("userid")));

                launchUri(href, function () { }
                    , function () { indicateDownload() }
                    , function () { indicateDownload() }
                );

            }
        } catch (e) {
            pPlayerNm = "DNGPlayer";

            MegastudyPlayer = window.open(pPlayerUrl + pSetParam, pPlayerNm, pOpt);
            MegastudyPlayer.focus();
        }

    }
    return;
}