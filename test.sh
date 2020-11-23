# /bin/bash

if [ -z "$release"  ] ; then
  echo Argument not provided && mkdir -p public && echo -n $(node -e "console.log(Math.floor(Math.random()*10000))") > public/VERSION && cat public/VERSION
else
  echo Argument is $release && mkdir -p public && echo -n $release > public/VERSION && cat public/VERSION
fi
