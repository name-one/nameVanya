export default function loadImg(url) {
    return new Promise(resolve => {
        const img = new Image();
        img.addEventListener('load', () => {
            resolve(img);
        });
        img.addEventListener('error', (err) => {
        });
        img.src = url;
    });
}