document.querySelector(".tags__button").addEventListener("click", function(){
    let tagBtn = this;
    tagBtn.style.opacity = 0;
    setTimeout(function(){
        if(tagBtn.children[0].classList[0]==="tags__button_less"){
            tagBtn.children[0].innerHTML = "<i class='fas fa-chevron-down'></i>" + " Show More";
            document.querySelectorAll(".tags__container")[0].style.maxHeight = 0;
            for(i=0; i<document.querySelectorAll(".tags__tag").length; i++){
                document.querySelectorAll(".tags__tag")[i].style.opacity = 0;
            }
        } else {
            tagBtn.children[0].innerHTML = "<i class='fas fa-chevron-up'></i>" + " Show Less";
            document.querySelectorAll(".tags__container")[0].style.maxHeight = "1000px";
            for(i=0; i<document.querySelectorAll(".tags__tag").length; i++){
                document.querySelectorAll(".tags__tag")[i].style.opacity = 1;
            }
        }
        tagBtn.children[0].classList.toggle("tags__button_less");
        tagBtn.children[0].classList.toggle("tags__button_more");
        tagBtn.style.opacity = 1;
    },500);
})