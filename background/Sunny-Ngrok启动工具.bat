@echo OFF
color 0a
Title Main System �������� by Aki
Mode con cols=109 lines=30
:START
ECHO.
Echo                  ==========================================================================
ECHO.
Echo                                         Sunny-Ngrok�ͻ�����������
ECHO.
Echo                                         ����: Sunny QQ��327388905
ECHO.
Echo                                         �ٷ�QQȺ��426298277��һ��Ⱥ�� 455801231������Ⱥ��
ECHO.
Echo                                         ������www.ngrok.cc
ECHO.
Echo                                         ���߲��ͣ�www.sunnyos.com
ECHO.
Echo                  ==========================================================================
Echo.
echo.
echo.
:TUNNEL
set /p clientid= ������Ҫ�����Ŀͻ���id������ͻ���id��ʹ��Ӣ�Ķ��ţ�,��������
echo.
sunny.exe clientid %clientid%
PAUSE
goto TUNNEL

