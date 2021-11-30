GitHub Intro 11/30/2021

Mac Tricks
- Creating multiple windows - three fingers swipe up on the track pad, add a desktop with the `+`, three fingers swipe side to side to nav between the desktops

Git and GitHub
- Git - version control software
- GitHub - online platform that uses git, GitHub is a GUI for git software
- GUI - Graphical User Interface (pronounced goo-ey)
- The opposite of a GUI is the command line
- CLI - command line interface
- CLT - command line tools

GitHub Vocab
- Repository (repo) - named storage place on GitHub, folder
- Remote - GitHub, cloud, online platforms
- Local - on your computer (when not connected to the internet)
- Branch - connection between local and remote
- Main - conventional name for the default branch, the single source of truth on a repo

Creating a Repo:
- Create new repo on Github
- Nav in terminal to Desktop
- $ git clone https://github.com/sjproctor/echo-first-repo.git (copy name of repo)

Naming Things
- Naming things is hard!
- NO spaces!
- When in doubt, use lowercase
- File extension - what type of file it is
- .md - markdown, text file with a developer flair
- README - special file on the front of repo, written in markdown

The best command ever:
- $ git status

Configuring GitHub
- $ git config --global user.name "Mona Lisa"
- $ git config --global user.email "email@example.com"
- $ git config --global credential.helper osxkeychain
- git config -l
- Add personal access token

Three (but kinda four) really important commands:
- $ git status (informational)
- $ git add .
- $ git commit -m "descriptive message"
- $ git push origin <branch-name>


Branching
- Make sure you are in a good spot on your computer (desktop)
- $ git clone https://github.com/learn-academy-2021-echo/my-first-repo.git
- $ cd my-first-repo
- $ git branch (informational)
- $ git checkout -b sarah-pairing-demo
- $ touch my-first-pairing-exercise.md
- Add some code
- $ git status (what did we change and what branch are we on)
- $ git add .
- $ git commit -m 'added more info about pairing and branching'
- $ git push origin sarah-pairing-demo


Pairing on a branch
- checkout - navigating between branches
- checkout -b creates a new branch
- git fetch origin kevin-new-branch
- git checkout kevin-new-branch
- coded cool stuff
- $ git status (what did we change and what branch are we on)
- $ git add .
- $ git commit -m 'added more info about pairing and branching'
- $ git push origin kevin-new-branch
- coding
- git pull origin <branch-name>
