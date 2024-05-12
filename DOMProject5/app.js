let arr = [

    {
        dp: "https://media.gettyimages.com/id/1514866387/photo/paris-france-sydney-sweeney-attends-the-giorgio-armani-priv%C3%A9-haute-couture-fall-winter-2023.jpg?s=612x612&w=0&k=20&c=3ENvuuTEnoi7yYYzHIMTaVTgyXVkIj3KXA3JGuE0rkQ=",
        story: "https://media.gettyimages.com/id/1395181718/photo/new-york-new-york-sydney-sweeney-attends-the-2022-costume-institute-benefit-celebrating-in.jpg?s=612x612&w=0&k=20&c=TCHk8c5629EQDjshtDW_wbtArTRsL8V_Tcs88vkogaI="
    },
    {
        dp: "https://media.gettyimages.com/id/1388112937/photo/beverly-hills-california-sydney-sweeney-attends-the-2022-vanity-fair-oscar-party-hosted-by.jpg?s=612x612&w=0&k=20&c=BuAkkzX5ImmMnU9K6fUxeWo--wD0lYDLNYUZb7DZlpM=",
        story: "https://media.gettyimages.com/id/2007250063/photo/los-angeles-california-sydney-sweeney-attends-the-world-premiere-of-sony-pictures-madame-web.jpg?s=612x612&w=0&k=20&c=_oQdJVX4Z17UkUnf8cbSIhZq_2tomKGn4Jy1F0zPqlw="
    },
    {
        dp: "https://media.gettyimages.com/id/1494822147/photo/new-york-new-york-sydney-sweeney-arrives-at-the-today-show-on-may-31-2023-in-new-york-city.jpg?s=612x612&w=0&k=20&c=oftylljV0mrZVNJRBPqBGZ7L72PAxwDIb420rmi89n0=",
        story: "https://media.gettyimages.com/id/2021615463/photo/santa-monica-california-sydney-sweeney-arrives-at-the-2024-peoples-choice-awards-at-barker.jpg?s=612x612&w=0&k=20&c=64nGhKT7SezGjuT0-6QRgMVKIP7PesQ790DBOtHGKnM="
    },
    {
        dp: "https://media.gettyimages.com/id/1655418164/photo/venice-italy-sydney-sweeney-attends-giorgio-armani-one-night-in-venice-photocall-on-september.jpg?s=612x612&w=0&k=20&c=PnOYsTyHo5eZNppeh099Mp11p2J8UfMRu--B-y2hLpg=",
        story: "https://media.gettyimages.com/id/1606793644/photo/hollywood-california-sydney-sweeney-attends-the-variety-power-of-young-hollywood-at-neuehouse.jpg?s=612x612&w=0&k=20&c=1qoop3Xf84Rgs5ruDE-WHjBWeWqB3iZ65bT8qqU3mY8="
    },
    {
        dp: "https://media.gettyimages.com/id/1486922025/photo/new-york-new-york-sydney-sweeney-attends-the-2023-met-gala-celebrating-karl-lagerfeld-a-line.jpg?s=612x612&w=0&k=20&c=dVpSJ_N_2kWYE3voW_BWYrG9BBXAAvK5BJ36L81-iJ8=",
        story: "https://media.gettyimages.com/id/1848895458/photo/new-york-new-york-sydney-sweeney-attends-columbia-pictures-anyone-but-you-new-york-premiere.jpg?s=612x612&w=0&k=20&c=zaRcnFdil7u3aLUj82tZdT6ZXVhoSniQlGJq2rEDmZs="
    },
    {
        dp: "https://media.gettyimages.com/id/1423260166/photo/west-hollywood-california-sydney-sweeney-attends-the-2022-hbo-emmys-party-at-san-vicente.jpg?s=612x612&w=0&k=20&c=BW0_Kcj-C7pBbCFtV-pv3Wn67sy3VZrAQZiX6ou7244=",
        story: "https://media.gettyimages.com/id/1423268798/photo/west-hollywood-california-sydney-sweeney-attends-hbo-hbo-max-emmy-nominees-reception-at-san.jpg?s=612x612&w=0&k=20&c=cWoLJwSr7CJMRjUxHUFCYnGPSCzFBvLGScRvYB7yEiU="
    },
    {
        dp: "https://media.gettyimages.com/id/2066809685/photo/sydney-sweeney-at-the-2024-vanity-fair-oscar-party-held-at-the-wallis-annenberg-center-for.jpg?s=612x612&w=0&k=20&c=5a-mAn8C8IwRKVF7IBcFOhwVNx4NWCXQ2er2rcXPDXE=",
        story: "https://media.gettyimages.com/id/1822956009/photo/the-kelly-clarkson-show-episode-1018-pictured-sydney-sweeney.jpg?s=612x612&w=0&k=20&c=VUdIdQxUoVbi1UjCb81HoY0la0828fWVAfZeuAM6nLw="
    },
    {
        dp: "https://media.gettyimages.com/id/1851087996/photo/new-york-new-york-sydney-sweeney-is-seen-in-midtown-manhattan-on-december-12-2023-in-new-york.jpg?s=612x612&w=0&k=20&c=S-2Ys97Y0gj1nO2oqwvHUX2QBptosieojghqJ0TrHxk=",
        story: "https://media.gettyimages.com/id/1848895461/photo/new-york-new-york-sydney-sweeney-is-seen-in-midtown-manhattan-on-december-11-2023-in-new-york.jpg?s=612x612&w=0&k=20&c=w0rNc3HEjbmqThXnMo3ru-kp1z32Zc0Te60FEoQVWyE="
    },

]
var storybox = document.querySelector("#story-box");
var full = document.querySelector("#full");
var clutter = "";
arr.forEach(function (element, indx) {
    clutter += `<div class="story">
    <img id="${indx}" src="${element.dp}" alt="">
</div>`
});

storybox.innerHTML = clutter;

storybox.addEventListener("click", function (details) {
    full.style.display = "block";
    full.style.backgroundImage = `url(${arr[details.target.id].story})`;
    setTimeout(() => {
        full.style.display = "none";
    }, 2000);
});