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
      this.ctx.drawImage(this.img, this.tileStartX, this.tileStartY, this.tileEndX, this.tileEndY, x * this.width, y * this.height, this.width, this.height);
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
}(Tile); // const legend = {
//     wall: '#',
//     road: '-'
// }


var legend = new Map();
legend.set('#', 'wall');
legend.set('-', 'road');
var pathesSrc = 'assets/pathes/';

function loadPathes(ctx) {
  return new Promise(function (resolve) {
    Promise.all([loadImg("".concat(pathesSrc, "rotated-t.png")), loadImg("".concat(pathesSrc, "cornerR.png")), loadImg("".concat(pathesSrc, "cross.png")), loadImg("".concat(pathesSrc, "straight.png")), loadImg("".concat(pathesSrc, "edge.png")), loadImg("".concat(pathesSrc, "cornerL.png")), loadImg("".concat(pathesSrc, "edgeL.png")), loadImg("".concat(pathesSrc, "tr.png")), loadImg("".concat(pathesSrc, "tb.png")), loadImg("".concat(pathesSrc, "tl.png")), loadImg("".concat(pathesSrc, "vert.png"))]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 11),
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
          vert = _ref2[10];

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
      resolve([rotTTile, cornerRightTile, crossTile, horisontalTile, rightEdge, cornerLeft, leftEdge, trTile, tbTile, tlTile, vertLine]);
    });
  });
}

function loadGraphic(ctx) {
  return new Promise(function (resolve) {
    Promise.all([loadPathes(ctx)]).then(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          pathes = _ref4[0];

      resolve({
        pathes: pathes
      });
    });
  });
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#5fa2b9';
ctx.fillRect(0, 0, canvas.width, canvas.height); // Promise.all([
//     imgLoad(tile),
//     loadMap('assets/pathes/level.txt')
// ]).then(([img, textMap]) => {
//     //const wall = new Tile(ctx, img, 16, 16, 16, 16, 40, 40);
//     const road = new Tile(ctx, img, 48, 32, 16, 16, 40, 40);
//     const wall = new BgTile(ctx, img, 64, 64)
//     wall.draw(0,0)
//     // genereteMap(textMap, {
//     //     wall,
//     //     road
//     // });
// })

loadGraphic(ctx).then(function (graphic) {
  console.log(graphic);
  graphic.pathes.forEach(function (tile, idx) {
    tile.draw(idx, 0);
  });
});