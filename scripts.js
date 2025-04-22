const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-container');

// this function to handle visibility based on scroll and screen size
function handleHamMenuVisibility() {
    const scrollY = window.scrollY;
    const threshold = window.innerHeight * 0.1;
    const isMobile = window.innerWidth <= 850;

    if (isMobile) {
        // this will make the burger menu always show on mobile
        hamMenu.style.opacity = '1';
        hamMenu.style.zIndex = '1';
    } else {
        // this will show the burger menu on scroll for larger screens
        if (scrollY > threshold) {
            hamMenu.style.opacity = '1';
            hamMenu.style.zIndex = '1';
        } else {
            if (!hamMenu.classList.contains('active')) {
                hamMenu.style.opacity = '0';
                hamMenu.style.zIndex = '-1';
            }
        }
    }
}

// Handle visibility on scroll and resize
window.addEventListener('scroll', handleHamMenuVisibility);
window.addEventListener('resize', handleHamMenuVisibility);

// run once on page load
window.addEventListener('load', handleHamMenuVisibility);

// make the menu on hamburger click
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});