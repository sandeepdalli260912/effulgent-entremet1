@echo off
setlocal
if "%~1"=="" (
    echo ================================================================
    echo  Delhi Bhu-Praman - Push to GitHub
    echo ================================================================
    echo  Usage: push.bat ^<YOUR_GITHUB_REPO_URL^>
    echo  Example: push.bat https://github.com/your-username/delhi-bhu-praman.git
    echo ================================================================
    set /p REPO_URL="Enter your GitHub Repository URL: "
) else (
    set REPO_URL=%~1
)

if "%REPO_URL%"=="" (
    echo Error: No GitHub repository URL provided.
    pause
    exit /b 1
)

set GIT_EXE="%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
if not exist %GIT_EXE% set GIT_EXE=git

%GIT_EXE% remote remove origin >nul 2>&1
%GIT_EXE% remote add origin %REPO_URL%
%GIT_EXE% branch -M main
echo Pushing to %REPO_URL% ...
%GIT_EXE% push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ================================================================
    echo  SUCCESS! Your project has been pushed to GitHub.
    echo ================================================================
) else (
    echo.
    echo Push failed. Please check your GitHub repository URL and authentication.
)
pause
