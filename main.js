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
const div_bott = document.getElementById("bott");


const imgs = createImgs(pictures);
// initial image displayed:
displayImg(imgs, 0);
// display bottom buttons:
createBottBtns(pictures);
// Event listeners:
listenLeftBtn(imgs);
listenRightBtn(imgs);
listenBottBtns(imgs);











// #############################################################
// #############################################################
// FUNCTIONS
// #############################################################
// #############################################################


function createImgs(pictures) {
    const imgs = [];
    for (let ii=0; ii<pictures.length; ii++) {
        imgs[ii] = document.createElement("img");
        imgs[ii].src = "/img/" + pictures[ii];
        imgs[ii].classList.add("img");
        imgs[ii].id = "img" + ii;    
    }
    return imgs;
}




function createBottBtns(pictures) {
    const btns = [];

    for (let ii=0; ii<pictures.length; ii++) {
        btns[ii] = document.createElement("button");
        btns[ii].classList.add("bott-btn");
        btns[ii].setAttribute("data", ii);
        btns[ii].id = "btn" + ii;
        div_bott.appendChild(btns[ii]);
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

function listenBottBtns(imgs) {
    const btns = document.querySelectorAll(".bott-btn");
    btns.forEach( btn => 
        btn.onclick = (e) => {
            // e.preventDefault();
            let newIi = e.target.attributes["data"].value;
            displayImg(imgs, newIi);
        }    
    )
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

    div_picture.appendChild(imgs[ii]);
}


