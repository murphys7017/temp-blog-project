@echo OFF
color 0a
Title Main System 启动工具 by Aki
Mode con cols=109 lines=30
:START
ECHO.
Echo                  ==========================================================================
ECHO.
Echo                                         Sunny-Ngrok客户端启动工具
ECHO.
Echo                                         作者: Sunny QQ：327388905
ECHO.
Echo                                         官方QQ群：426298277（一号群） 455801231（二号群）
ECHO.
Echo                                         官网：www.ngrok.cc
ECHO.
Echo                                         作者博客：www.sunnyos.com
ECHO.
Echo                  ==========================================================================
Echo.
echo.
echo.
:TUNNEL
set /p clientid= 输入需要启动的客户端id，多个客户端id请使用英文逗号（,）隔开：
echo.
sunny.exe clientid %clientid%
PAUSE
goto TUNNEL

