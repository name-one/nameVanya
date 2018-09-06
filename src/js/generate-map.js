import legend from './legend';

export default function genereteMap(rows, tiles) {
    rows.forEach((row, rowIdx) => {
        row.forEach((cell, cellIdx) => {
            const curCellType = legend.get(cell);
            if (tiles[curCellType]) {
                tiles[curCellType].draw(cellIdx, rowIdx);
            }
        })
    });
}