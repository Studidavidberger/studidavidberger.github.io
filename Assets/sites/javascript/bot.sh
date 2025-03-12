#!/bin/sh
# BOT AUTOMATION GITHUB

cd ~/Desktop/formation/cours/distant/javascript/
cp -R ../../javascript/* .
git status
git add -A
git commit -m "BOT AUTOMATION~"
git push
xdg-open https://github.com/Studidavidberger/javascript

exit 0
