/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
    document.querySelector(".hearts-container");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.floor(
            Math.random() * 13 + 12
        ) + "px";

    const duration =
        Math.floor(
            Math.random() * 6 + 7
        );

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, (duration + 1) * 1000);
}


/* Tạo tim liên tục */

setInterval(createHeart, 900);