var conatiner = document.querySelector("#conatiner");
var loveicon = document.querySelector("i");

conatiner.addEventListener("dblclick", function () {
    loveicon.style.transform = 'translate(-50%,-50%) scale(1)';
    loveicon.style.opacity = 0.8;
    setTimeout(function () {
        loveicon.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 1000);
});




