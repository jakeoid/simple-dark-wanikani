<img src="https://i.imgur.com/S0xEZs8.png" align="right" />

# simple-dark-wanikani

[![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://github.com/jakeoid/waste-basket/blob/master/LICENSE.md)

Make your eyes safer when using WaniKani, no longer be killed by the thought of using WaniKani late at night. With this user-style, I garuntee (not really) that you'll be able to rest easier at night after a long session of WaniKani.

## Screenshots

<img src="https://i.imgur.com/froMnot.png" align="center" />

<img src="https://i.imgur.com/WhM5z0P.png" align="center" />

<img src="https://i.imgur.com/vHcVPyn.png" align="center" />

## Installation

### Simple

This is a userstyle, so you're going to need either..

- Firefox [Stylish](https://addons.mozilla.org/en-US/firefox/addon/2108/) [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
- Chrome [Stylish](https://chrome.google.com/extensions/detail/fjnbnpbmkenffdnngjfgmeleoegfcffe) [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
- Opera [Stylish](https://addons.opera.com/en/extensions/details/stylish/) [Stylus](https://addons.opera.com/en-gb/extensions/details/stylus/)
- Safari [Stylish](http://sobolev.us/stylish/)

Then you can head to the [userstyles.org page](https://userstyles.org/styles/149427/wanikani-simple-dark) and press install!

### Advanced

#### 1. Install gulp-cli:

```sh
$ npm install gulp-cli --global
```

#### 2. Install gulp and dependencies:
```sh
$ npm install browser-sync gulp gulp-sass gulp-strip-css-comments
```

#### 3. Run gulpfile
```sh
$ gulp
```

#### 4. Inject the stylesheet.css into given pages.
```html
<link href="css/stylesheet.css" rel="stylesheet" type="text/css">
```

## License

See `LICENSE.md` for details on that.

## Contributing

See `CONTRIBUTING.md` for details on that.