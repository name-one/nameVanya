import loadImg from './image-loader';
import BgTile from './bg-tile';
const pathesSrc = 'assets/pathes/';
const bugsSrc = 'assets/bugs/';
const dragonSrc = '/assets/dragon/'


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
            loadImg(`${pathesSrc}vert.png`),
            loadImg(`${pathesSrc}cornerLT.png`),
            loadImg(`${pathesSrc}cornerRT.png`),
            loadImg(`${pathesSrc}edgeT.png`),
            loadImg(`${pathesSrc}edgeB.png`)
        ]).then(([rotT, cornerR, cross, horisontalLine, edge, cornerL, edgeL, tr, tb, tl, vert, cornerLT, cornerRT, edgeT, edgeB]) => {
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
            const vertLine = new BgTile(ctx, vert);
            const ltCorner = new BgTile(ctx, cornerLT);
            const rtCorner = new BgTile(ctx, cornerRT);
            const edtTile = new BgTile(ctx, edgeT);
            const edbTile = new BgTile(ctx, edgeB);
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
                vertLine,
                ltCorner,
                rtCorner,
                edtTile,
                edbTile
            ]);

        });
    });
}

function loadBugs(ctx) {
    return new Promise(resolve => {
        Promise.all([
            loadImg(`${bugsSrc}bug1.png`),
            loadImg(`${bugsSrc}bug2.png`),
            loadImg(`${bugsSrc}bug3.png`),
            loadImg(`${bugsSrc}bug4.png`)
        ]).then(([bug1, bug2, bug3, bug4]) => {
            const bugTile1 = new BgTile(ctx, bug1);
            const bugTile2 = new BgTile(ctx, bug2);
            const bugTile3 = new BgTile(ctx, bug3);
            const bugTile4 = new BgTile(ctx, bug4);

            resolve([bugTile1, bugTile2, bugTile3, bugTile4])
        });
    });
}


function loadDragon(ctx) {
    return new Promise(resolve => {
        Promise.all([
            loadImg(`${dragonSrc}vano_splash.png`),
            loadImg(`${dragonSrc}vano1.png`),
            loadImg(`${dragonSrc}vano2.png`),
            loadImg(`${dragonSrc}vano3.png`)
        ]).then(([dragonSplash, dragon1, dragon2, dragon3]) => {
            let dragonSplashTile = new BgTile(ctx, dragonSplash);
            const dragon1Tile = new BgTile(ctx, dragon1);
            const dragon2Tile = new BgTile(ctx, dragon2);
            const dragon3Tile = new BgTile(ctx, dragon3);

            resolve([dragonSplashTile, dragon1Tile, dragon2Tile, dragon3Tile])
        })
    });
}

export default function loadGraphic(ctx) {
    return new Promise(resolve => {
        Promise.all([
            loadPathes(ctx),
            loadBugs(ctx),
            loadDragon(ctx)
        ]).then(([pathes, bugs,dragon]) => {
            resolve({
                pathes,
                bugs,
                dragon
            });
        });
    })
}