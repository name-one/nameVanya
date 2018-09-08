"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function loadImg(url) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.addEventListener('load', function () {
      resolve(img);
    });
    img.addEventListener('error', function (err) {});
    img.src = url;
  });
}

var Tile =
/*#__PURE__*/
function () {
  function Tile(context, img, tileStartX, tileStartY, tileEndX, tileEndY, width, height) {
    _classCallCheck(this, Tile);

    this.ctx = context;
    this.img = img;
    this.tileStartX = tileStartX;
    this.tileStartY = tileStartY;
    this.tileEndX = tileEndX;
    this.tileEndY = tileEndY;
    this.width = width;
    this.height = height;
  }

  _createClass(Tile, [{
    key: "draw",
    value: function draw(x, y) {
      var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.ctx.drawImage(this.img, this.tileStartX, this.tileStartY, this.tileEndX, this.tileEndY, x * (absolute ? 1 : this.width), y * (absolute ? 1 : this.height), this.width, this.height);
    }
  }]);

  return Tile;
}();

var tileSize = 64;

var BgTile =
/*#__PURE__*/
function (_Tile) {
  _inherits(BgTile, _Tile);

  function BgTile(context, img) {
    _classCallCheck(this, BgTile);

    return _possibleConstructorReturn(this, _getPrototypeOf(BgTile).call(this, context, img, 0, 0, 64, 64, tileSize, tileSize));
  }

  return BgTile;
}(Tile);

var pathesSrc = 'assets/pathes/';
var bugsSrc = 'assets/bugs/';
var dragonSrc = '/assets/dragon/';

function loadPathes(ctx) {
  return new Promise(function (resolve) {
    Promise.all([loadImg("".concat(pathesSrc, "rotated-t.png")), loadImg("".concat(pathesSrc, "cornerR.png")), loadImg("".concat(pathesSrc, "cross.png")), loadImg("".concat(pathesSrc, "straight.png")), loadImg("".concat(pathesSrc, "edge.png")), loadImg("".concat(pathesSrc, "cornerL.png")), loadImg("".concat(pathesSrc, "edgeL.png")), loadImg("".concat(pathesSrc, "tr.png")), loadImg("".concat(pathesSrc, "tb.png")), loadImg("".concat(pathesSrc, "tl.png")), loadImg("".concat(pathesSrc, "vert.png")), loadImg("".concat(pathesSrc, "cornerLT.png")), loadImg("".concat(pathesSrc, "cornerRT.png")), loadImg("".concat(pathesSrc, "edgeT.png")), loadImg("".concat(pathesSrc, "edgeB.png"))]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 15),
          rotT = _ref2[0],
          cornerR = _ref2[1],
          cross = _ref2[2],
          horisontalLine = _ref2[3],
          edge = _ref2[4],
          cornerL = _ref2[5],
          edgeL = _ref2[6],
          tr = _ref2[7],
          tb = _ref2[8],
          tl = _ref2[9],
          vert = _ref2[10],
          cornerLT = _ref2[11],
          cornerRT = _ref2[12],
          edgeT = _ref2[13],
          edgeB = _ref2[14];

      var rotTTile = new BgTile(ctx, rotT);
      var cornerRightTile = new BgTile(ctx, cornerR);
      var crossTile = new BgTile(ctx, cross);
      var horisontalTile = new BgTile(ctx, horisontalLine);
      var rightEdge = new BgTile(ctx, edge);
      var cornerLeft = new BgTile(ctx, cornerL);
      var leftEdge = new BgTile(ctx, edgeL);
      var trTile = new BgTile(ctx, tr);
      var tbTile = new BgTile(ctx, tb);
      var tlTile = new BgTile(ctx, tl);
      var vertLine = new BgTile(ctx, vert);
      var ltCorner = new BgTile(ctx, cornerLT);
      var rtCorner = new BgTile(ctx, cornerRT);
      var edtTile = new BgTile(ctx, edgeT);
      var edbTile = new BgTile(ctx, edgeB);
      resolve([rotTTile, cornerRightTile, crossTile, horisontalTile, rightEdge, cornerLeft, leftEdge, trTile, tbTile, tlTile, vertLine, ltCorner, rtCorner, edtTile, edbTile]);
    });
  });
}

function loadCoffee(ctx) {
  return new Promise(function (resolve) {
    loadImg('/assets/coffee.png').then(function (img) {
      resolve(new Tile(ctx, img, 0, 0, 33, 23, 33, 23));
    });
  });
}

function loadBugs(ctx) {
  return new Promise(function (resolve) {
    Promise.all([loadImg("".concat(bugsSrc, "bug1.png")), loadImg("".concat(bugsSrc, "bug2.png")), loadImg("".concat(bugsSrc, "bug3.png")), loadImg("".concat(bugsSrc, "bug4.png"))]).then(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 4),
          bug1 = _ref4[0],
          bug2 = _ref4[1],
          bug3 = _ref4[2],
          bug4 = _ref4[3];

      var bugTile1 = new Tile(ctx, bug1, 0, 0, 38, 32, 38, 32);
      var bugTile2 = new Tile(ctx, bug2, 0, 0, 38, 32, 38, 32);
      var bugTile3 = new Tile(ctx, bug3, 0, 0, 38, 32, 38, 32);
      var bugTile4 = new Tile(ctx, bug4, 0, 0, 38, 32, 38, 32);
      resolve([bugTile1, bugTile2, bugTile3, bugTile4]);
    });
  });
}

function loadDragon(ctx) {
  return new Promise(function (resolve) {
    Promise.all([loadImg("".concat(dragonSrc, "vano_splash.png")), loadImg("".concat(dragonSrc, "vano1.png")), loadImg("".concat(dragonSrc, "vano2.png")), loadImg("".concat(dragonSrc, "vano3.png"))]).then(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 4),
          dragonSplash = _ref6[0],
          dragon1 = _ref6[1],
          dragon2 = _ref6[2],
          dragon3 = _ref6[3];

      var dragonSplashTile = new BgTile(ctx, dragonSplash);
      var dragon1Tile = new Tile(ctx, dragon1, 0, 0, 174, 225, 50, 60);
      var dragon2Tile = new BgTile(ctx, dragon2);
      var dragon3Tile = new BgTile(ctx, dragon3);
      resolve([dragonSplashTile, dragon1Tile, dragon2Tile, dragon3Tile]);
    });
  });
}

function loadGraphic(ctx) {
  return new Promise(function (resolve) {
    Promise.all([loadPathes(ctx), loadBugs(ctx), loadDragon(ctx), loadCoffee(ctx)]).then(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 4),
          pathes = _ref8[0],
          bugs = _ref8[1],
          dragon = _ref8[2],
          coffee = _ref8[3];

      resolve({
        pathes: pathes,
        bugs: bugs,
        dragon: dragon,
        coffee: coffee
      });
    });
  });
}

var GameState =
/*#__PURE__*/
function () {
  function GameState(ctx, canvas, bg) {
    _classCallCheck(this, GameState);

    this.collectedBugs = 0;
    this.uncollectedBugs = 0;
    this.gameTime = '';
    this.coffeeCups = 0;
    this.isWin = false;
    this.isLose = false;
    this.graphics = null;
    this.gameMap = [];
    this.ctx = ctx;
    this.canvas = canvas;
    this.textMap;
    this.tileStore = new Map();
    this.bg = bg;
  }

  _createClass(GameState, [{
    key: "initTilesHash",
    value: function initTilesHash() {
      var _this = this;

      var keys = [327, 485, 325, 455, 463, 461, 487, 357, 453, 333, 365, 335, 359, 493, 367];
      keys.forEach(function (item, idx) {
        _this.tileStore.set(item, _this.graphics.pathes[idx]);
      });
    }
  }, {
    key: "setGraphics",
    value: function setGraphics(graphics) {
      this.graphics = graphics;
      this.initTilesHash();
    }
  }, {
    key: "loadLevel",
    value: function loadLevel(txtFile) {
      var _this2 = this;

      fetch(txtFile).then(function (response) {
        return response.text();
      }).then(function (text) {
        _this2.textMap = text;

        _this2.renderLevel(text.split('\n').map(function (row) {
          return row.split('');
        }));
      });
    }
  }, {
    key: "renderLevel",
    value: function renderLevel(level) {
      var _this3 = this;

      level.forEach(function (row, rowIdx) {
        row.forEach(function (cell, cellIdx) {
          _this3.ctx.drawImage(_this3.bg, cellIdx * 64, rowIdx * 64, 64, 64);

          if (cell !== '#') {
            var hashIdx = _this3.encode(level, cellIdx, rowIdx);

            if (!_this3.tileStore.get(hashIdx)) {
              hashIdx |= 325;
            }

            if (!_this3.tileStore.get(hashIdx)) {
              return;
            }

            _this3.tileStore.get(hashIdx).draw(cellIdx, rowIdx);

            if (cell === '*') {
              _this3.graphics.bugs[Math.round(Math.random() * 3)].draw(cellIdx * 64 + 16, rowIdx * 64 + 16, 1);
            }

            if (cell === '@') {
              _this3.graphics.coffee.draw(cellIdx * 64 + 16, rowIdx * 64 + 20, 1);
            }

            if (cell === 'D') {
              _this3.graphics.dragon[1].draw(cellIdx * 64 + 14, rowIdx * 64 + 2, 1);
            }
          }
        });
      });
    }
  }, {
    key: "encode",
    value: function encode(level, x, y) {
      var res = 0; //-1 row

      res |= x === 0 || y === 0 || level[y - 1][x - 1] === '#' ? 1 : 0;
      res <<= 1;
      res |= y === 0 || level[y - 1][x] === '#' ? 1 : 0;
      res <<= 1;
      res |= y === 0 || x === level[y - 1].length - 1 || level[y - 1][x + 1] === '#' ? 1 : 0;
      res <<= 1; // 0 row

      res |= x === 0 || level[y][x - 1] === '#' ? 1 : 0;
      res <<= 1;
      res |= level[y][x] === '#' ? 1 : 0;
      res <<= 1;
      res |= x === level[y].length - 1 || level[y][x + 1] === '#' ? 1 : 0;
      res <<= 1; // +1 row

      res |= x === 0 || y === level.length - 1 || level[y + 1][x - 1] === '#' ? 1 : 0;
      res <<= 1;
      res |= y === level.length - 1 || level[y + 1][x] === '#' ? 1 : 0;
      res <<= 1;
      res |= y === level.length - 1 || x === level[y + 1].length - 1 || level[y + 1][x + 1] === '#' ? 1 : 0;
      return res;
    }
  }, {
    key: "emitMovement",
    value: function emitMovement(direction) {}
  }]);

  return GameState;
}();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
loadImg('assets/canvas-bg.png').then(function (img) {
  var gameState = new GameState(ctx, canvas, img);
  loadGraphic(ctx).then(function (graphic) {
    console.log(graphic);
    gameState.setGraphics(graphic);
    gameState.loadLevel('/assets/level.txt');
  });
});