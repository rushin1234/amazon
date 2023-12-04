// ham menu icon
const ham = document.getElementsByClassName("ham")[0]
// cross icon in navbar 
const xmark = document.getElementsByClassName("xmark")[0]
// navbar body including title
const navbar = document.getElementsByClassName("navbar")[0]
// main nav list
const nav_list = document.getElementsByClassName("nav-list")[0]
// title of navbar
const hello = document.getElementsByClassName("hello")[0]
ham.addEventListener('click', ()=>{
    ham.style.display = "none"
    navbar.style.width = "340px"
    xmark.style.display = "flex"
    nav_list.style.display = "flex"
    hello.style.display = "flex"
})
xmark.addEventListener('click', ()=>{
    navbar.style.width = "0px"
    xmark.style.display = "none"
    nav_list.style.display = "none"
    hello.style.display = "none"
    ham.style.display = "flex"
})


const nav_li_item = document.getElementsByClassName("nav-li-item")
Array.from(nav_li_item).forEach((element) => {
    element.addEventListener('mouseover', ()=>{
        element.style.backgroundColor = "rgb(226, 223, 223)"
        element.style.cursor = "pointer"
        sp = element.getElementsByClassName("span")[0]
        sp.style.color = "blue"
    })
});
Array.from(nav_li_item).forEach((element) => {
    element.addEventListener('mouseout', ()=>{
        element.style.backgroundColor = "white"
        sp = element.getElementsByClassName("span")[0]
        sp.style.color = "black"
    })
});