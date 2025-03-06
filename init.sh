#!/bin/bash


mkdir -p src/ts src/sass data assets docs
touch README.md
touch ./data/users.json
npm install -D webpack webpack-cli webpack-dev-server
npm install -D sass sass-loader css-loader style-loader ts-loader
npm install -D prettier && touch .prettierrc.json
npm install -D eslint @eslint/js typescript typescript-eslint
npm install -D jest
npm install -D babel-jest @babel/core @babel/preset-env
npm install --save-dev @types/jest
npm install --save-dev jest-environment-jsdom
npm install --save-dev @testing-library/dom
npm install --save-dev @testing-library/user-event
npm install html-webpack-plugin copy-webpack-plugin --save-dev