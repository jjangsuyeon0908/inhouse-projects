<!-- ���ǰ�� ������ -->
<div class="mock-schedule mt40">	
    <div class="tbl-wrap">
        <table>
            <colgroup>
                <col style="width:155px" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
                <col style="width:8%" />
            </colgroup>
            <thead>
                <tr>
                    <th rowspan="2" class="bg-01">����</th>
                    <th colspan="4" class="bg-01">9��</th>
                    <th colspan="4" class="bg-01">10��</th>
                    <th colspan="3" class="bg-01 br-0">11��</th>
                </tr>
                <tr class="low">
                    <th>1����</th>
                    <th>2����</th>
                    <th>3����</th>
                    <th>4����</th>
                    <th>1����</th>
                    <th>2����</th>
                    <th>3����</th>
                    <th>4����</th>
                    <th>1����</th>
                    <th>2����</th>
                    <th class="br-0">3����</th>
                </tr>
            </thead>
            <tbody>
                <% If sCampusCode = "CD0341" or sCampusCode = "CD0340" or sCampusCode = "CD0344" or sCampusCode = "CD0345" or sCampusCode = "CD0346" Then '�ھ����/�ھ��/�ھ�����/�ھ�â��/�ھ�û�� %>    
                <tr>
                    <th>����CORE <br>
                        Weekly ���ǰ��
                    </th>
                    <td></td>
                    <td class="bg-05">20ȸ��</td>
                    <td></td>
                    <td class="bg-05">21ȸ��</td>
                    <td class="bg-05">22ȸ��</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="bg-05">23ȸ��</td>
                    <td></td>
                </tr>
                <% End If %>
                <tr>
                    <th>QUEL���ǰ��</th>
                    <td></td>
                    <td></td>
                    <td class="bg-02">3ȸ</td>
                    <td></td>
                    <td></td>
                    <td class="bg-02">4ȸ</td>
                    <td class="bg-02">5ȸ</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>E-QUEL ���ǰ��</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="bg-03">11��</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>�޴��� ���ǰ��</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <% If sCampusCode = "CD0001" or sCampusCode = "CD0246" Then '��ġ/���� %>   
                    <td></td>        
                    <% Else %>
                    <td class="bg-04">9��</td>                  
                    <% End If %>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="bg-04">10��</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <% If sCampusCode <> "CD0247" and sCampusCode <> "CD0249" and sCampusCode <> "CD0246" and sCampusCode <> "CD0341" and sCampusCode <> "CD0340" and sCampusCode <> "CD0344" and sCampusCode <> "CD0345" and sCampusCode <> "CD0346" Then '����/����/����/�ھ����/�ھ��/�ھ�����/�ھ�â��/�ھ�û�� ���� %>    
                <tr>
                    <th>����CORE <br>
                        Weekly ���ǰ��
                    </th>
                    <td></td>
                    <td class="bg-05">20ȸ��</td>
                    <td></td>
                    <td class="bg-05">21ȸ��</td>
                    <td class="bg-05">22ȸ��</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="bg-05">23ȸ��</td>
                    <td></td>
                </tr>
                <% End If %>
                <tr>
                    <th>���� �念��<br>
                        ���ǰ��
                    </th>
                    <td class="bg-06">9��ȣ</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <% If sCampusCode = "CD0247" Then '���� %>    
                <tr>
                    <th>���� ��ī (����T)</th>
                    <td class="bg-07">1ȸ</td>
                    <td class="bg-07">2ȸ</td>
                    <td class="bg-07">3ȸ</td>
                    <td class="bg-07">4ȸ</td>
                    <td class="bg-07">5ȸ</td>
                    <td class="bg-07">6ȸ</td>
                    <td class="bg-07">7ȸ</td>
                    <td class="bg-07">8ȸ</td>                   
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <% End If %>
                <% If sCampusCode = "INTRO" Then '��Ʈ�� %>    
                <tr>
                    <th>�п� ���� ���ǰ��</th>
                    <td colspan="11" class="txt">�п� ��ü������ ���� ����</td>
                </tr>
                <% End If %>
            </tbody>
        </table>
    </div>
    <p>�� �� ���� �������� ���� �� ���� ������ �п� � ��Ȳ�� ���� ���� �� ������ �� �ֽ��ϴ�.</p>
</div>
<!-- //���ǰ�� ������ -->