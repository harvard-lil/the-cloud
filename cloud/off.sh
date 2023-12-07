#!/bin/sh

set -x

kasa --type plug --host $1 off
echo "Plug turned off."
