#### 1. Creating a package.json file.

- ```bash
  npm init
  ```

#### 2. Setup Typescript Dev Dependency

- ```bash
  npm i --save-dev typescript
  touch tsconfig.json
  ```

#### 3. Setup React Dev Dependency

- ```bash
   npm i --save-dev react@17.0.1
  ```

#### 4. Add Webpack and other related Dev Dependencies

- Webpack packages all JS Code and compiles it into a single static asset/JS file

- ```bash
   npm i --save-dev webpack webpack-cli ts-loader copy-webpack-plugin html-webpack-plugin react-dom@17.0.1
   touch webpack.config.js style-loader css-loader @types/react @types/react-dom @types/chrome webpack-merge clean-webpack-plugin
  ```

# TO RUN:

```bash
npm start
```

TODO:
npm install -g
https://stackoverflow.com/questions/54802330/missing-write-access-in-mac-to-usr-local-lib-node-modules

https://www.youtube.com/watch?v=aFrR56sqC_A&ab_channel=EricMurphy

https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
