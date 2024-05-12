var card = document.querySelector("#card");
var btn = document.querySelector(".add");
var check = 0;

btn.addEventListener("click", function () {
    if (check == 0) {
        let h5 = document.querySelector("h5");
        h5.innerHTML = "Friends";
        h5.style.color = "cadetblue";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "#111";
        btn.innerHTML = "Remove friend";
        check = 1;
    } else {
        let h5 = document.querySelector("h5");
        h5.innerHTML = "Stranger";
        h5.style.color = "#dadada";
        btn.style.backgroundColor = "cadetblue";
        btn.style.color = "#fff";
        btn.innerHTML = "Add friend";
        check = 0;
    }
});

card.addEventListener("dblclick", function () {
    let loveicon = document.querySelector("i");
    loveicon.style.transform = 'translate(-50%,-50%) scale(1)';
    setTimeout(() => {
        loveicon.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 1000);
})
