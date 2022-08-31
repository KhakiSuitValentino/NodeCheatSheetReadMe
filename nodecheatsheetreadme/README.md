# NodeCheatSheetReadMe

To set up the initial javascript:
1) make a directory
2) run 'npm init' to create a 'package.json' or use 'npm init -y' to answer yes to all prompts
3) install needed package with 'npm install <package names>'
4) create a javascript entry point file (ex. index.js)

To set up a repo that uses node packages:
1) run 'git init' to create a new repo in the project directory
2) create a '.gitignore' file and add 'node_modules' to it. Good command line term 'echo node_modules >> .gitignore'
3) check to make sure node_modules folder is not being tracked with a 'git status'
4) add and commit your work

To clone down an npm project:
1) clone the repo down to your local, cd into the new directory
2) run 'npm install' or 'npm i' to install the required packages from the package.json