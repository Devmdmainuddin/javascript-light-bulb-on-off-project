
let images = document.getElementById("light_images");
let onImages = document.getElementById("on_images");
let offImages = document.getElementById("off_images");
let on = document.getElementById("on");
let off = document.getElementById("off");


on.addEventListener("click",function(){
    images.src = onImages.src;
    on.classList.add('active');
    off.classList.remove('active');
})

off.addEventListener("click",function(){
    images.src = offImages.src;
    on.classList.remove('active');
    off.classList.add('active');
  
})
let box = document.getElementsByClassName(".box")