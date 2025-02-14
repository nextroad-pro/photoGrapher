document.addEventListener('DOMContentLoaded', () => {
    // 背景图片数组
    const backgroundImages = [
        'https://source.unsplash.com/random/1920x1080/?landscape',
        'https://source.unsplash.com/random/1920x1080/?city',
        'https://source.unsplash.com/random/1920x1080/?nature',
        'https://source.unsplash.com/random/1920x1080/?architecture'
    ];

    let currentImageIndex = 0;
    const heroBackground = document.querySelector('.hero-background');

    // 创建背景图片轮播
    function createBackgroundSlideshow() {
        const img = document.createElement('img');
        img.src = backgroundImages[currentImageIndex];
        img.style.cssText = 'position: absolute; width: 100%; height: 100%; object-fit: cover; transition: opacity 1s ease-in-out;';
        heroBackground.appendChild(img);

        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
            const newImg = document.createElement('img');
            newImg.src = backgroundImages[currentImageIndex];
            newImg.style.cssText = 'position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 1s ease-in-out;';
            heroBackground.appendChild(newImg);

            setTimeout(() => {
                newImg.style.opacity = '1';
            }, 100);

            setTimeout(() => {
                if (heroBackground.children.length > 1) {
                    heroBackground.removeChild(heroBackground.children[0]);
                }
            }, 1000);
        }, 5000);
    }

    createBackgroundSlideshow();

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});