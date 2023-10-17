const rightbtn = document.querySelector('.fa-angle-right')
const leftbtn = document.querySelector('.fa-angle-left')
const imgNuber = document.querySelectorAll('.slider_content_left_top img')
let index = 0
rightbtn.addEventListener("click", function(){
    index = index +1;
    if(index > imgNuber.length-1){
        index = 0
    }
    removeactive ()
    document.querySelector(".slider_content_left_top").style.right = index *100+"%"
    imgNuberLi[index].classList.add("active")
})
leftbtn.addEventListener("click", function(){
    index = index -1
    if(index<0){
        index = imgNuber.length-1
    }
    removeactive ()
    document.querySelector(".slider_content_left_top").style.right = index *100+"%"
    imgNuberLi[index].classList.add("active")
})
// slider1
const imgNuberLi = document.querySelectorAll('.slider_content_left_bottom li')
// console.log(imgNuberLi)
imgNuberLi.forEach(function(image, index){
    image.addEventListener("click", function(){
        removeactive ()
        document.querySelector(".slider_content_left_top").style.right = index *100+"%"
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
function imgAuto(){
    index = index+1
    imgNuberLi.forEach(function(image, index1){
        image.addEventListener("click", function(){
           index = index1
        })
    })
    if(index > imgNuber.length-1){
        index = 0
    }
    
    console.log(index)
    removeactive ()
    document.querySelector(".slider_content_left_top").style.right = index *100+"%"
    imgNuberLi[index].classList.add("active")

}
setInterval(imgAuto, 5000)