document.getElementById("js-btn").addEventListener("click", function(){
    document.querySelector(".form-container").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
});


document.getElementById("btn-close").addEventListener("click", function(){
    document.querySelector(".form-container").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    window.scrollTo(0-coord, 0-coord);
});
//gambiarra q n sei usar 

