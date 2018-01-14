# Tutorial

This is a learn react by video project.



```shell
mkdir tutorial && cd tutorial
npm init
npm install eslint eslint-loader --save-dev
npm install babel-core babel-loader babel-preset-env --save-dev
npm install webpack --save-dev
./node_modules/.bin/eslint --init
vi webpack.config.js
```

Create APP entry point `src/index.js`
```javascript
fuction hello() {
  console.log('Hello');
}
```

Create HTML template file `public/index.html` for `HtmlWebpackPlugin`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Index</title>
  </head>
  <body>
  </body>
</html>
```

You could set `favicon` and `title` in `webpack.config.js`:

```javascript
module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index',
      title: 'Hello',
      favicon: 'public/fav.ico'
    })
  ],
  ...
}
```
