//getElementById ����ȭ
/*	/jquery �� ���ļ� �ּ�ó��
function $(id)
{
    return document.getElementById(id);
}
*/
//�ʼ��Է��׸� �� �˻�
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

//���Խ����� ��ȿ���� �˻��Ѵ�, ��ȿ�ϸ� false, ��ȿ���� ������ true
function checkExp(str, exp)
{
	//�� ��ҹ��� �������� �ʴ�(gi) ���Խ��� �����
	reg = new RegExp(exp, "gi");
	return !reg.test(str);
}

//������Ʈ�� top, left���� ���Ͽ� �迭�� �����Ѵ�
// offset[0] = Left, offset[1] = Top
function getOffset(obj)
{
    var offset = new Array();
    
    offset[0] = obj.offsetLeft;
    offset[1] = obj.offsetTop;
    
    var objParent = obj.offsetParent;
    var tagName = obj.tagName.toLowerCase();
    
    //tagName�� body������ offset���ϱ�
    while(tagName != "body")
    {
        offset[0] += objParent.offsetLeft;
        offset[1] += objParent.offsetTop;
        
        objParent = objParent.offsetParent;
        tagName = objParent.tagName.toLowerCase();
    }
    
    return offset;
}

//���õ� ������ ��������
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

//���õ� �޺��ڽ��� ��������
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

//�� ���� ��â ����
function openWindow(url,width,height,scroll)
{
	if(scroll == null) scroll = "no";
	winpos = "left=" + ((window.screen.width-width)/2) + ",top=" + ((window.screen.height-height-28)/2);
	winstyle="width=" + width + ",height=" + height + ",status=no,toolbar=no,menubar=no,location=no,resizable=no,copyhistory=no,scrollbars=" + scroll + "," + winpos;
	window.open(url,'_blank',winstyle);
}

//���â�� ����
function openModal(url, width, height, title, scroll){
	winstyle = "dialogWidth=" + width + "px; dialogHeight:" + height + "px; center:yes; help:no; scroll:no; status:no";
	value = window.showModalDialog("/Public/Modal.asp?url=" + url + "&title=" + title + "&scroll=" + scroll,'_blank', winstyle);
	return value;
}

//���â�� ������ �θ�â�� �� ��ȯ
function closeModal(value){
	window.returnValue = value;
	window.close();
}

// ���ε� ����� ����
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

//YYYYMM ��ȿ���˻�
function checkYearMonth(obj, objName, afterFocus)
{
    if(obj.value.length < 6){
        alert(objName + "�� �Է��Ͽ� �ֽʽÿ�.");
        if(afterFocus) obj.focus();
        return true;
    }else{
        var year = eval(obj.value.substring(0, 4));
        if(year < 1900 || year > 2100){
            alert(objName + "�� �⵵�� 1900��~2100�� ������ �⵵�� �Է��Ͽ� �ֽʽÿ�.");
            if(afterFocus) obj.focus();
            return true;
        }
        var month = eval(obj.value.substring(4, 6));
        if(month < 0 || month > 12){
            alert(objName + "�� ���� �߸� �ԷµǾ����ϴ�.");
            if(afterFocus) obj.focus();
            return true;
        }
    }    
    return false;
}

//�̸��� üũ
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

//���ϻ��� Ȯ��
function confirmRemoveFile(fileCode, tableName, columnName, codeName, codeValue)
{
    var agree = confirm("������ �����Ͻðڽ��ϱ�?");
    if(agree)
    {
        document.getElementById("hdnFrame").src = "/russel/admin/Public/_RemoveFile.asp?fileCode=" + fileCode + "&tableName=" + tableName + "&columnName=" + columnName + "&codeName=" + codeName + "&codeValue=" + codeValue;
    }
}

//���̵� üũ
function checkAdminID(obj, afterFocus)
{
    if(checkExp(obj.value, "^[a-zA-Z0-9]{4,12}$"))
	{
		alert("���̵�� �����ڿ� ������ �������� �ּ� 4�ڿ��� �ִ� 12�ڱ��� ����Ͻ� �� �ֽ��ϴ�.");
		if(afterFocus) obj.focus();
		return true;
	}
	
	return false;
}

//��� üũ
function checkAdminPass(obj, afterFocus)
{
    if(checkExp(obj.value, "^[a-zA-Z0-9]{4,12}$"))
	{
		alert("��й�ȣ�� �����ڿ� ������ �������� �ּ� 4�ڿ��� �ִ� 12�ڱ��� ����Ͻ� �� �ֽ��ϴ�.");
		if(afterFocus) obj.focus();
		return true;
	}
	
	return false;
}


//���ڿ� ��ü
function Replace(text, str1, str2)
{
	for(var i = 0; i < text.length; i++)
	{
		
	}
}

//��¥�� �˻�
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

//����� �Է� üũ
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

//���� ����
function trim(str) { return str.replace(/(^\s+)|(\s+)$/,""); }

//�ֹε�Ϲ�ȣ�� ��ȿ�� �˻�
function PeopleCode(peoplecode)
{

	var v = new Array(13);
	var arg = new Array(12);
	
	//�ֹε�Ϲ�ȣ �� �ڸ����� ������ �μ�, 12�ڸ����� ���ϰ� ������ �ڸ��� ������ �ʴ´�.
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

	
	//���ڸ����� ������ �μ��� ���ѵ� ������ ���Ѵ�.
	for(i = 0; i < 12; i++)
	{
		v[i] = parseFloat(peoplecode.substring(i, i+1) * arg[i]);
		sum = sum + v[i];
	}
	
	v[12] = parseFloat(peoplecode.substring(12, 13));

	//������ 11�� ���� �������� 11���� ������ �ٽ� 10���� ���� ������(result)�� ���� �̰��� �ֹε�Ϲ�ȣ
	//�� ������ ���ڿ� ���ٸ� ��ȿ�� �ֹε�� ��ȣ�̴�.
	result = (11 - sum % 11) % 10;

	return (result != v[12]);
}


//�Է¹ڽ����� ���������� ���ڰ� �ԷµǸ� ��Ŀ���� ���� �Է¹ڽ��� �̵��Ѵ�.
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

//���̿���ư�� ���õ� ���� �����´�
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

//�����Է� �Ǵ� ���� �Է¿�� ���� üũ
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
			  return true;  //������ üũ�ڽ��� �ϳ��� ������
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
/* ����Ʈ�� �󼼺���*/
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
		 // �ѱ�������
		 one_char = string.charAt(i);
		 // �ѱ��̸� 2�� ���Ѵ�.
		 if (escape(one_char).length > 4)
		 {
		     str_byte = str_byte+2;
		 }
		 // �׿��� ���� 1�� ���Ѵ�.
		 else
		 {
		     str_byte++;
         }

	     // ��ü ũ�Ⱑ li_max�� ����������
	     if(str_byte <= max_length)
	     {
	         str_length = i + 1;
	     }
    }
 

    // ��ü���̸� �ʰ��ϸ�
    if(str_byte > max_length)
    {
	    alert(" ���ڸ� �ʰ� �Է��Ҽ� �����ϴ�. \n �ʰ��� ������ �ڵ����� ���� �˴ϴ�. ");
	    obj.value = string.substr(0, str_length);
    }else{

        if(byteView) document.getElementById(byteView).innerHTML = str_byte;

	}

}

// ���콺���� ��ũ��Ʈ
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
   d = new Date();                           //Date ��ü�� ����ϴ�.  
   yy = d.getYear();                         //������ �����ɴϴ�.
   s = yy ;     //���� �����ɴϴ�.

   mon = (d.getMonth() + 1)
   if (mon < 10){
	   mon = "0" + mon
   }
   s += mon ;     //���� �����ɴϴ�.
   
   day = d.getDate()
   if (day < 10){
	   day = "0" + day
   }
   s += day ;     //���� �����ɴϴ�.
   
   hh = d.getHours()
   if (hh < 10){
	   hh = "0" + hh
   }
   s += hh ;     //�ð��� �����ɴϴ�.
   
   mm = d.getMinutes()
   if (mm < 10){
	   mm = "0" + mm
   }
   s += mm ;     //���� �����ɴϴ�.

   return(s);                                //��¥�� ��ȯ�մϴ�.
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

	//�ӽ� �б� ���� player_russel�� ����
	if (lecCd.length >= 5) {
    //��ȭ�� �Ǳ��п�(P:OT,������,F:�̺�Ʈ)
/*
    if (kbn == "20" || kbn == "72" || kbn == "90" || kbn == "80" || kbn == "91" || kbn == "82") {	//������� �������� �ڵ� �߰� 20150813 CHOIJH
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
    if (kbn == "10" || kbn == "20" || kbn == "72" || kbn == "80" || kbn == "90" || kbn == "91" || kbn == "79" || kbn == "89") { fncPreDngCnt(vPlayerParam); } //��ȸ�� ����//���������� �߰�

    //�Ϲ� ������ ������(free) - 10:�Ϲ� 15:������ ������ �λ� 31~39 : �Ϲ� ������ ����
    if ((kbn >= "10" && kbn <= "19") || (kbn >= "31" && kbn <= "39") || kbn == "50" || kbn == "51" || kbn == "62" || kbn == "79" || kbn == "80") { vPlayerLnk = "L"; }

    //�߽� �÷��� ������ ������ (free) - 20:�߽� 23:������  72:OT	82:�н�����(OT2) 41~49 : �߽� ������ ����
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


        if(confirm("3G/4G ȯ�濡���� ������ ��Ŷ����� �߻��� �� �ֽ��ϴ�.")){

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

        var options = { width: eWidth, height: eHeight, title: '�հݺҺ��� ��Ģ megastudy', top: 0, left: 0 };

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