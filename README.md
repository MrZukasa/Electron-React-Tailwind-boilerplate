- mkdir project-name
- `npm init -y`
- `npm insall --save electron react react-dom react-router-dom@5`
- set a "main": "startElectron.js" entrypoint in package.json file
- make a "start":"electron ." script in package.json file
- create a startElectron.js file or use the template on the website
- create the index.html file that have the `<meta charset="UTF-8" />` and the `<meta http-equiv="Content-Security-Policy" content="script-src 'self'">` set
- create the react app and the index/main js file
- `npm install --save-dev @babel/core @babel/preset-env @babel/preset-react css-loader style-loader sass-loader sass webpack webpack-cli babel-loader postcss-loader electron-reload`
- create a webpack.common.js file or use my template
- set the entry point on the webpack.common.js file
- add a "watch": "webpack --config webpack.common.js --watch" script to the package.json
- make watch run and add the new app.js file just created into index.html file
- install tailwind
  - `npm install -D tailwindcss postcss autoprefixer`
  - `npx tailwindcss init -p`
- place this in tailwind.config.js
  - ```
    module.exports = {
        content: [
            "./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx}",
        ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```
- import this in the main .css file of the project
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

Done for now.