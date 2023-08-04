#!/bin/sh

set -x

echo "Plug turning on..."
kasa --type plug --host $1 on
echo "Plug turned on."
sleep $2
echo "Plug waiting."
kasa --type plug --host $1 off
echo "Plug turned off."
