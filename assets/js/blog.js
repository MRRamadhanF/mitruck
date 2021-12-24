const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

let newsImageHeight = () => {
    const newsImage = document.getElementsByClassName("new-news-image")
    const mainNews = document.getElementsByClassName("new-news-main")
    if (winSize() >= 769) {
        for (let index = 0; index < newsImage.length; index++) {
            const image = newsImage[index];
            const main = mainNews[index];
            image.style.height = main.offsetHeight + 20 + "px"
        }
    }
    else if (winSize() > 603 && winSize() < 769) {
        for (let index = 0; index < newsImage.length; index++) {
            const image = newsImage[index];
            const main = mainNews[index];
            image.style.height = main.offsetHeight + 50 + "px"
        }
    }
    else {
        for (let index = 0; index < newsImage.length; index++) {
            const image = newsImage[index];
            image.style.height = "200px"
        }
    }
}

window.addEventListener("resize", () => {
    newsImageHeight()
})
newsImageHeight()
