#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# skip chpages build step
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:psantos9/longevity-contact-form.git master:gh-pages

cd -