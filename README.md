# webpack sample project 
 
Sample webpack project with ES6 and Sass.

This is a very basic setup that only includes two main app files for demo purposes: `./src/main.js` and `./src/main.scss`. You get the idea.

There's nothing in this setup that hasn't been done earlier by other people (see credits section for more advanced configuration).
This project might be useful when quick (local) development setup is needed, to play with new stuff.

For sample jspm and SystemJS project setup, you might want to take a look at https://github.com/akikoo/systemjs-jspm-setup.

## Environment setup 

```sh
  $ npm install
```

## Development

Start the Webpack server (includes live reloading when you change files):

```sh
  $ npm start
```

Open [http://localhost:3001](http://localhost:3001) in a browser. `./src/main.js` is the entry point.

## Bundling 

```sh
  $ npm run bundle
```

## Credits

- https://github.com/rauschma/webpack-es6-demo
- https://github.com/srn/react-webpack-boilerplate
- ...and probably others too