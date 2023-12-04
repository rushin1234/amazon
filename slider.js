let box = document.getElementsByClassName("box")[0]
let img = document.getElementsByClassName("img")[0]

const imgs = ["back_imgs/1.jpg", "back_imgs/2.jpg", "back_imgs/3.jpg", "back_imgs/4.jpg", "back_imgs/5.jpg", "back_imgs/6.jpg", "back_imgs/7.jpg"]

let idx = 0

setInterval(() => {
    
    if(idx == imgs.length-1){
        idx=0
        img.src = imgs[idx]
    } 
    else {
        idx++
        img.src = imgs[idx]
    }

}, 3000);
document.getElementsByClassName("prev")[0].addEventListener('click', ()=> {
    idx--
    if(idx == -1) idx = imgs.length-1
    img.src = imgs[idx] 
})

document.getElementsByClassName("next")[0].addEventListener('click', ()=> {
    idx++
    if(idx == imgs.length) idx = 0
    img.src = imgs[idx] 
})