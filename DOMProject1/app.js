// Solution : 1
// var istatus = document.querySelector("h5");

// var btn = document.querySelector("#add");
// var check = 0;
// // Add friend & remove feature on same button.

// btn.addEventListener("click", function () {
//     if (check == 0) {
//         istatus.innerHTML = "Friends";
//         istatus.style.color = "cadetblue";
//         btn.innerHTML = "Remove Friend";
//         btn.style.
//             backgroundColor = "#dadada";
//         btn.style.color = "#111"

//         check = 1;
//     } else {
//         istatus.innerHTML = "Stranger";
//         istatus.style.color = "#dadada";
//         btn.innerHTML = "Add Friend";
//         btn.style.
//             backgroundColor = "cadetblue";
//         btn.style.color = "#fff"

//         check = 0;
//     }
// });

// Solution : 2
// var check = 0;
// document.querySelectorAll("#add").forEach((button) => {
//     button.addEventListener("click", () => {
//         if (check == 0) {
//             const card = button.closest("#card");
//             const h5 = card.querySelector("h5");
//             button.textContent = "Remove Friend";
//             button.style.backgroundColor = "#dadada";
//             button.style.color = "black";
//             h5.textContent = "Friends";
//             h5.style.color = "cadetblue";
//             check = 1;
//         } else {
//             const card = button.closest("#card");
//             const h5 = card.querySelector("h5");
//             button.textContent = " Add Friend";
//             button.style.backgroundColor = "cadetblue";
//             button.style.color = "#fff";
//             h5.textContent = "Stranger";
//             h5.style.color = "#dadada";
//             check = 0;
//         }
//     });
// });

// Solution : 3
document.querySelectorAll(".add").forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest("#card");
        const h5 = card.querySelector("h5");

        if (h5.textContent === "Stranger") {
            button.textContent = "Remove Friend";
            button.style.backgroundColor = "#dadada";
            button.style.color = "black";
            h5.textContent = "Friends";
            h5.style.color = "cadetblue";
        } else {
            button.textContent = "Add Friend";
            button.style.backgroundColor = "cadetblue";
            button.style.color = "#fff";
            h5.textContent = "Stranger";
            h5.style.color = "#dadada";
        }
    });
});
