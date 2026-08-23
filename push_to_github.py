import os
import sys
import subprocess

GIT_EXE = os.path.expandvars(r"%LOCALAPPDATA%\Programs\Git\cmd\git.exe")

def run_git_cmd(args):
    cmd = [GIT_EXE] + args
    print(f"Running: {' '.join(cmd)}")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.stdout:
        print(res.stdout.strip())
    if res.stderr:
        print(res.stderr.strip())
    return res.returncode

def main():
    run_git_cmd(["config", "user.name", "Aishu Developer"])
    run_git_cmd(["config", "user.email", "developer@delhi-bhu-praman.gov.in"])
    run_git_cmd(["add", "."])
    run_git_cmd(["commit", "-m", "Initial commit: Delhi Bhu-Praman Portal (Decoupled Frontend & Backend Architecture)"])
    run_git_cmd(["log", "-1", "--oneline"])

if __name__ == '__main__':
    main()
