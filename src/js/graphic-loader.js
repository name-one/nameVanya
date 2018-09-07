import loadImg from './image-loader';
import BgTile from './bg-tile';
const pathesSrc = 'assets/pathes/'


function loadPathes(ctx) {
    return new Promise(resolve => {
        Promise.all([
            loadImg(`${pathesSrc}rotated-t.png`),
            loadImg(`${pathesSrc}cornerR.png`),
            loadImg(`${pathesSrc}cross.png`),
            loadImg(`${pathesSrc}straight.png`),
            loadImg(`${pathesSrc}edge.png`),
            loadImg(`${pathesSrc}cornerL.png`),
            loadImg(`${pathesSrc}edgeL.png`),
            loadImg(`${pathesSrc}tr.png`),
            loadImg(`${pathesSrc}tb.png`),
            loadImg(`${pathesSrc}tl.png`),
            loadImg(`${pathesSrc}vert.png`)
        ]).then(([rotT, cornerR, cross, horisontalLine, edge, cornerL, edgeL, tr, tb, tl, vert]) => {
            const rotTTile = new BgTile(ctx, rotT);
            const cornerRightTile = new BgTile(ctx, cornerR);
            const crossTile = new BgTile(ctx, cross);
            const horisontalTile = new BgTile(ctx, horisontalLine);
            const rightEdge = new BgTile(ctx, edge);
            const cornerLeft = new BgTile(ctx, cornerL);
            const leftEdge = new BgTile(ctx, edgeL);
            const trTile = new BgTile(ctx, tr);
            const tbTile = new BgTile(ctx, tb);
            const tlTile = new BgTile(ctx, tl);
            const vertLine = new BgTile(ctx, vert)
            resolve([
                rotTTile,
                cornerRightTile,
                crossTile,
                horisontalTile,
                rightEdge,
                cornerLeft,
                leftEdge,
                trTile,
                tbTile,
                tlTile,
                vertLine
            ]);

        });
    });
}

export default function loadGraphic(ctx) {
    return new Promise(resolve => {
        Promise.all([
            loadPathes(ctx)
        ]).then(([pathes]) => {
            resolve({
                pathes
            });
        });
    })
}