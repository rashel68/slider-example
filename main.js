// image source 
const imgContainer = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg'
];

// image caption source 
const imgCaption = [
    'away-hill-fields-tree-lane-lonely',
    'sunset-tree-water-silhouette',
    'fantasy-light-mood-sky-beautiful',
    'away-hill-fields-tree-lane-lonely',
    'sunset-tree-water-silhouette',
    'fantasy-light-mood-sky-beautiful'
]

let slideImage = document.getElementById('slider-image');
let slideCaption = document.getElementById('slide-caption');

let slideIndex = 0;
setInterval(() => {
    // console.log(slideIndex);
    if (slideIndex >= imgContainer.length) {
        slideIndex = 0;
    }
    let img = imgContainer[slideIndex];
    let imgCap = imgCaption[slideIndex];
    slideCaption.innerText = `${slideIndex + 1} | ${imgCap}`;
    slideImage.setAttribute('src', img);
    slideIndex++

    // console.log(img);
}, 1400)
