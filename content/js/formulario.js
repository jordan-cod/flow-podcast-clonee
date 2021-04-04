document.getElementById("js-btn").addEventListener("click", function(){
    document.querySelector(".form-container").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
});


document.getElementById("btn-close").addEventListener("click", function(){
    document.querySelector(".form-container").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    
});
//gambiarra q n sei usar 

var btn = document.querySelector("#js-btn");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

//Scipt mobile

document.getElementById("btn-mbl").addEventListener("click", function(){
    document.querySelector(".form-container").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
});
