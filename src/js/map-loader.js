export default function loadMap(url) {
    return new Promise(resolve => {
        fetch(url)
            .then(response => response.text())
            .then(text => {
                resolve(parseMap(text))
            })
    });
}


function parseMap(textMap) {
    return textMap.split('\n')
        .map(row => row.split(''));
}
