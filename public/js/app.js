"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function loadImg(url) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.addEventListener('load', function () {
      resolve(img);
    });
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

function loadMap(url) {
  return new Promise(function (resolve) {
    fetch(url).then(function (response) {
      return response.text();
    }).then(function (text) {
      resolve(parseMap(text));
    });
  });
}

function parseMap(textMap) {
  return textMap.split('\n').map(function (row) {
    return row.split('');
  });
} // const legend = {
//     wall: '#',
//     road: '-'
// }


var legend = new Map();
legend.set('#', 'wall');
legend.set('-', 'road');

function genereteMap(rows, tiles) {
  rows.forEach(function (row, rowIdx) {
    row.forEach(function (cell, cellIdx) {
      var curCellType = legend.get(cell);

      if (tiles[curCellType]) {
        tiles[curCellType].draw(cellIdx, rowIdx);
      }
    });
  });
}

var tilesUrl = 'https://forum.unity.com/attachments/nes-super-mario-bros-tile-set-png.150062/';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);
Promise.all([loadImg(tilesUrl), loadMap('assets/level.txt')]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      img = _ref2[0],
      textMap = _ref2[1];

  var wall = new Tile(ctx, img, 16, 16, 16, 16, 40, 40);
  var road = new Tile(ctx, img, 48, 32, 16, 16, 40, 40);
  genereteMap(textMap, {
    wall: wall,
    road: road
  });
});