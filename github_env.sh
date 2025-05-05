#!/bin/bash

echo ~/.bashrc > ~/.bashrc.bak
echo "alias clone_hub='git clone https://github.com/Studidavidberger/studidavidberger.github.io hub'" >> ~/.bashrc
source ~/.bashrc
alias

exit 0

