// - Specify image file names
// - display first image with name of file 
// - display dots
// 

// #############################################################
// #############################################################
// MAIN
// #############################################################
// #############################################################

const pictures = [
    "pexels-cristyan-bohn-6546983.jpg",
    "pexels-gaspar-zaldo-11315013.jpg",
    "pexels-nikita-igonkin-10038447.jpg"
];

const div_picture = document.getElementById("picture");
const div_bott_dots = document.getElementById("bott-dots");
let intervalID = 0;

const imgs = createImgs(pictures);
// initial image displayed:
displayImg(imgs, 0);
// display bottom buttons:
createBottDotBtns(pictures);
// Event listeners:
listenLeftBtn(imgs);
listenRightBtn(imgs);
listenBottDotBtns(imgs);
listenPlayBtn(imgs);


// #############################################################
// #############################################################
// FUNCTIONS
// #############################################################
// #############################################################

function createImgs(pictures) {
    const imgs = [];
    for (let ii=0; ii<pictures.length; ii++) {
        console.log(pictures[ii]);
        imgs[ii] = document.createElement("img");
        imgs[ii].src = "img/" + pictures[ii];
        imgs[ii].classList.add("img");
        imgs[ii].id = "img" + ii;    
    }
    return imgs;
}

function createBottDotBtns(pictures) {
    const btns = [];

    for (let ii=0; ii<pictures.length; ii++) {
        btns[ii] = document.createElement("button");
        btns[ii].classList.add("bott-dot-btn");
        btns[ii].setAttribute("data", ii);
        btns[ii].id = "btn" + ii;
        div_bott_dots.appendChild(btns[ii]);
    }
}

function listenLeftBtn(imgs) {
    const nbImgs = imgs.length;
    const btnLeft = document.getElementById("btn-left");

    btnLeft.onclick = (e) => {
        let currI = getCurrentImgI();
        let prevI = (currI == 0)? nbImgs - 1 : currI - 1;
        displayImg(imgs, prevI);
    }
}

function listenRightBtn(imgs) {
    const nbImgs = imgs.length;
    const btnRight = document.getElementById("btn-right");

    btnRight.onclick = (e) => {
        let currI = getCurrentImgI();
        let nextI = (currI == (nbImgs - 1))? 0 : currI + 1;
        displayImg(imgs, nextI);
    }
}

function listenBottDotBtns(imgs) {
    const btns = document.querySelectorAll(".bott-dot-btn");
    btns.forEach( btn => 
        btn.onclick = (e) => {
            // e.preventDefault();
            let newIi = e.target.attributes["data"].value;
            displayImg(imgs, newIi);
        }    
    )
}

function listenPlayBtn() {

    const btnPlay = document.getElementById("btn-play");

    btnPlay.onclick = (e) => {

        if (btnPlay.classList[0] == "paused") {
            console.log("now play");
            intervalID = setInterval(playNext, 3000);
            btnPlay.textContent = "PAUSE";
        } else {
            console.log("now pause");
            clearInterval(intervalID);
            btnPlay.textContent = "PLAY";
        }

        btnPlay.classList.toggle('paused');
        btnPlay.classList.toggle('playing');
        console.log(btnPlay.classList[0]);

    }
}

function playNext() {
    const nbImgs = imgs.length;
    let currI = getCurrentImgI();
    let nextI = (currI == (nbImgs - 1))? 0 : currI + 1;
    displayImg(imgs, nextI);
}




function getCurrentImgI() {
    let pid = document.getElementById("picture").firstChild.id;
    return Number(pid.slice(3));
}

function displayImg(imgs, ii) {
        
    const div_picture = document.getElementById("picture");

    while (div_picture.lastChild) {      
        div_picture.removeChild(div_picture.lastChild);
    }

    // imgs[ii].classList.add("in");
    // imgs[ii].classList.toggle('in');
    div_picture.appendChild(imgs[ii]);
}


