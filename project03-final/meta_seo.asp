<%

Select Case GetCampusVarsSiteMGC("_CAMPUS_CODE_")


    Case "CD0247": areaName = "러셀 강남" '강남
                    areaName02 = "강남"
    Case "CD0001": areaName = "러셀 대치" '대치
                    areaName02 = "대치"
    Case "CD0245": areaName = "러셀 목동" '목동
                    areaName02 = "목동"
    Case "CD0250": areaName = "러셀 부천" '부천
                    areaName02 = "부천"
	Case "CD0244": areaName = "러셀 분당" '분당
                    areaName02 = "분당"
	Case "CD0246": areaName = "러셀 센텀" '센텀
                    areaName02 = "센텀"
    Case "CD0249": areaName = "러셀 영통"  '영통
                    areaName02 = "영통"
    Case "CD0257": areaName = "러셀 중계"  '중계
					areaName02 = "중계"		
	Case "CD0248": areaName = "러셀 평촌"  '평촌
                    areaName02 = "평촌"
    Case "CD0342": areaName = "러셀 대구" '대구
					areaName02 = "대구"        
    Case "CD0349": areaName = "러셀 울산"  '울산
                    areaName02 = "울산"
	Case "CD0340": areaName = "러셀CORE 광주"  '코어광주
                    areaName02 = "광주"
	Case "CD0341": areaName = "러셀CORE 대전"  '대전
                    areaName02 = "대전"
    Case "CD0343": areaName = "러셀CORE 원주" '코어원주
                    areaName02 = "원주"
    Case "CD0344": areaName = "러셀CORE 전주"  '코어전주
                    areaName02 = "전주"
    Case "CD0345": areaName = "러셀CORE 창원"  '코어창원
                    areaName02 = "창원"
    Case "CD0346": areaName = "러셀CORE 청주"  '코어청주
                    areaName02 = "청주"

End Select
%>

<% If Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "INTRO" Then '인트로 %>

<meta name="keywords" content="러셀, 러셀학원, 입시학원, 러셀CORE, 러셀기숙학원, 러셀기숙, 입시전문학원, 수능학원, 입시컨설팅, 수시컨설팅, 정시컨설팅, 정시학원, 수능등급컷, 재수학원, 고3, 재수생, 수능, 논술, 2025수능, 2026수능, 반수, 모의고사, 9월모의고사, 6월모의고사, 수능디데이, 등급컷, 수시, 정시, 원서접수, 파이널, 파이널정규반" />
<meta name="description" content="최상위권 목표를 향한 마지막 기회, 러셀 파이널 정규반" />
<meta property="og:type" content="website">
<meta property="og:title" content="2026 파이널 정규반">
<meta property="og:description" content="최상위권 목표를 향한 마지막 기회, 러셀 파이널 정규반"/>

<% ElseIf Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0340" OR Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0343" OR Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0344" OR Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0345" OR Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0346" Then '광주/원주/전주/창원/청주(코어) %>

<meta name="keywords" content="러셀, 러셀학원, 입시학원, 러셀CORE, 러셀기숙학원, 러셀기숙, 입시전문학원, 수능학원, 입시컨설팅, 수시컨설팅, 정시컨설팅, 정시학원, 수능등급컷, 재수학원, 고3, 재수생, 수능, 논술, 2025수능, 2026수능, 반수, 모의고사, 9월모의고사, 6월모의고사, 수능디데이, 등급컷, 수시, 정시, 원서접수, 파이널, 파이널정규반, <%=areaName02%>입시학원, <%=areaName02%>재수학원, <%=areaName02%>러셀" />
<meta name="description" content="최상위권 목표를 향한 마지막 기회, <%=areaName%> 파이널 정규반" />
<meta property="og:type" content="website">
<meta property="og:title" content="2026 파이널 정규반">
<meta property="og:description" content="최상위권 목표를 향한 마지막 기회, <%=areaName%> 파이널 정규반"/>

<% Else %>
	<meta name="keywords" content="러셀, 러셀학원, 입시학원, 러셀CORE, 러셀기숙학원, 러셀기숙, 입시전문학원, 수능학원, 입시컨설팅, 수시컨설팅, 정시컨설팅, 정시학원, 수능등급컷, 재수학원, 고3, 재수생, 수능, 논술, 2025수능, 2026수능, 반수, 모의고사, 9월모의고사, 6월모의고사, 수능디데이, 등급컷, 수시, 정시, 원서접수, 파이널, 파이널정규반, <%=areaName02%>입시학원, <%=areaName02%>재수학원, <%=areaName02%>러셀" />
	<% If Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0257" Then '중계 %>
	<meta name="description" content="최종 목표를 향한 마지막 기회, <%=areaName%> 파이널 정규반" />
	<meta property="og:type" content="website">
	<meta property="og:title" content="2026 파이널 정규반">
	<meta property="og:description" content="최종 목표를 향한 마지막 기회, <%=areaName%> 파이널 정규반"/>
	<% Else %>
	<meta name="description" content="최상위권 목표를 향한 마지막 기회, <%=areaName%> 파이널 정규반" />
	<meta property="og:type" content="website">
	<meta property="og:title" content="2026 파이널 정규반">
	<meta property="og:description" content="최상위권 목표를 향한 마지막 기회, <%=areaName%> 파이널 정규반"/>
	<% End If %>
<% End If %>