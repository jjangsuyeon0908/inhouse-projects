<%

Select Case GetCampusVarsSiteMGC("_CAMPUS_CODE_")


    Case "CD0247": areaName = "���� ����" '����
                    areaName02 = "����"
    Case "CD0001": areaName = "���� ��ġ" '��ġ
                    areaName02 = "��ġ"
    Case "CD0245": areaName = "���� ��" '��
                    areaName02 = "��"
    Case "CD0250": areaName = "���� ��õ" '��õ
                    areaName02 = "��õ"
	Case "CD0244": areaName = "���� �д�" '�д�
                    areaName02 = "�д�"
	Case "CD0246": areaName = "���� ����" '����
                    areaName02 = "����"
    Case "CD0249": areaName = "���� ����"  '����
                    areaName02 = "����"
    Case "CD0257": areaName = "���� �߰�"  '�߰�
					areaName02 = "�߰�"		
	Case "CD0248": areaName = "���� ����"  '����
                    areaName02 = "����"
    Case "CD0342": areaName = "���� �뱸" '�뱸
					areaName02 = "�뱸"        
    Case "CD0349": areaName = "���� ���"  '���
                    areaName02 = "���"
	Case "CD0340": areaName = "����CORE ����"  '�ھ��
                    areaName02 = "����"
	Case "CD0341": areaName = "����CORE ����"  '����
                    areaName02 = "����"
    Case "CD0343": areaName = "����CORE ����" '�ھ����
                    areaName02 = "����"
    Case "CD0344": areaName = "����CORE ����"  '�ھ�����
                    areaName02 = "����"
    Case "CD0345": areaName = "����CORE â��"  '�ھ�â��
                    areaName02 = "â��"
    Case "CD0346": areaName = "����CORE û��"  '�ھ�û��
                    areaName02 = "û��"

End Select
%>

<% If Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "INTRO" Then '��Ʈ�� %>

<meta name="keywords" content="����, �����п�, �Խ��п�, ����CORE, ��������п�, �������, �Խ������п�, �����п�, �Խ�������, ����������, ����������, �����п�, ���ɵ����, ����п�, ��3, �����, ����, ���, 2025����, 2026����, �ݼ�, ���ǰ��, 9�����ǰ��, 6�����ǰ��, ���ɵ���, �����, ����, ����, ��������, ���̳�, ���̳����Թ�" />
<meta name="description" content="�ֻ����� ��ǥ�� ���� ������ ��ȸ, ���� ���̳� ���Թ�" />
<meta property="og:type" content="website">
<meta property="og:title" content="2026 ���̳� ���Թ�">
<meta property="og:description" content="�ֻ����� ��ǥ�� ���� ������ ��ȸ, ���� ���̳� ���Թ�"/>

<% ElseIf Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0340" OR Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0343" OR Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0344" OR Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0345" OR Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0346" Then '����/����/����/â��/û��(�ھ�) %>

<meta name="keywords" content="����, �����п�, �Խ��п�, ����CORE, ��������п�, �������, �Խ������п�, �����п�, �Խ�������, ����������, ����������, �����п�, ���ɵ����, ����п�, ��3, �����, ����, ���, 2025����, 2026����, �ݼ�, ���ǰ��, 9�����ǰ��, 6�����ǰ��, ���ɵ���, �����, ����, ����, ��������, ���̳�, ���̳����Թ�, <%=areaName02%>�Խ��п�, <%=areaName02%>����п�, <%=areaName02%>����" />
<meta name="description" content="�ֻ����� ��ǥ�� ���� ������ ��ȸ, <%=areaName%> ���̳� ���Թ�" />
<meta property="og:type" content="website">
<meta property="og:title" content="2026 ���̳� ���Թ�">
<meta property="og:description" content="�ֻ����� ��ǥ�� ���� ������ ��ȸ, <%=areaName%> ���̳� ���Թ�"/>

<% Else %>
	<meta name="keywords" content="����, �����п�, �Խ��п�, ����CORE, ��������п�, �������, �Խ������п�, �����п�, �Խ�������, ����������, ����������, �����п�, ���ɵ����, ����п�, ��3, �����, ����, ���, 2025����, 2026����, �ݼ�, ���ǰ��, 9�����ǰ��, 6�����ǰ��, ���ɵ���, �����, ����, ����, ��������, ���̳�, ���̳����Թ�, <%=areaName02%>�Խ��п�, <%=areaName02%>����п�, <%=areaName02%>����" />
	<% If Trim(GetCampusVarsSiteMGC("_CAMPUS_CODE_")) = "CD0257" Then '�߰� %>
	<meta name="description" content="���� ��ǥ�� ���� ������ ��ȸ, <%=areaName%> ���̳� ���Թ�" />
	<meta property="og:type" content="website">
	<meta property="og:title" content="2026 ���̳� ���Թ�">
	<meta property="og:description" content="���� ��ǥ�� ���� ������ ��ȸ, <%=areaName%> ���̳� ���Թ�"/>
	<% Else %>
	<meta name="description" content="�ֻ����� ��ǥ�� ���� ������ ��ȸ, <%=areaName%> ���̳� ���Թ�" />
	<meta property="og:type" content="website">
	<meta property="og:title" content="2026 ���̳� ���Թ�">
	<meta property="og:description" content="�ֻ����� ��ǥ�� ���� ������ ��ȸ, <%=areaName%> ���̳� ���Թ�"/>
	<% End If %>
<% End If %>