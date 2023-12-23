console.log("Page loaded");
const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const videoNumber = +parameters.get('video');
console.log("Redicecting to video n°", videoNumber);
const videos = [
    "https://www.youtube.com/watch?v=fw8FVpNfh1M",
    "https://www.youtube.com/watch?v=8K2hoP3HojM"
]
document.location.href=videos[videoNumber - 1];