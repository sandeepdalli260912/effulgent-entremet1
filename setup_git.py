import os
import sys
import urllib.request
import zipfile

MINGIT_URL = "https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/MinGit-2.44.0-64-bit.zip"
LOCAL_APP_DATA = os.environ.get("LOCALAPPDATA", os.path.expanduser("~\\AppData\\Local"))
DEST_DIR = os.path.join(LOCAL_APP_DATA, "Programs", "Git")
ZIP_PATH = os.path.join(os.environ.get("TEMP", "C:\\Temp"), "mingit.zip")

def setup_git():
    print(f"Downloading portable Git from {MINGIT_URL} ...")
    try:
        urllib.request.urlretrieve(MINGIT_URL, ZIP_PATH)
        print("Extracting Git...")
        os.makedirs(DEST_DIR, exist_ok=True)
        with zipfile.ZipFile(ZIP_PATH, 'r') as zip_ref:
            zip_ref.extractall(DEST_DIR)
        
        if os.path.exists(ZIP_PATH):
            os.remove(ZIP_PATH)
            
        git_exe = os.path.join(DEST_DIR, "cmd", "git.exe")
        print(f"Git installed at: {git_exe}")
        
        # Test git
        os.system(f'"{git_exe}" --version')
        return git_exe
    except Exception as e:
        print(f"Failed: {e}")
        return None

if __name__ == '__main__':
    setup_git()
