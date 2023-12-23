console.log("Page loaded");
const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const videoNumber = +parameters.get('video');
const videos = [
    "https://www.youtube.com/watch?v=fw8FVpNfh1M",
    "https://www.youtube.com/watch?v=8K2hoP3HojM"
]
const url = videos[videoNumber - 1];
console.log("Redicecting to video n°", videoNumber, url);
if (url) {
    document.location.href = url;
}