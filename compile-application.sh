#!/bin/bash/
utilities/compressJS.sh game/src/*.js game/package.js
DATE="$(date "+%Y%m%d%H%M")"
mkdir -p rel/"$(DATE)"
cp game/index.html game/package.js  rel/"$(DATE)"
