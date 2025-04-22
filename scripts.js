// const hamMenu = document.querySelector('.hamburger-menu');
// const offScreenMenu = document.querySelector('.off-container');

// // Show hamburger menu after scrolling down 10% of window height
// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const threshold = window.innerHeight * 0.1; // 10% of the viewport height
//     const isMobile = window.innerWidth <= 800;

//     console.log('ScrollY:', scrollY, 'Threshold:', threshold); // Debug log

//     if (scrollY > threshold) {
//         hamMenu.style.opacity = '1';
//         hamMenu.style.zIndex = '1';
//         console.log('Burger menu visible');
//     } else {
//         if (!hamMenu.classList.contains('active')) {
//             hamMenu.style.opacity = '0';
//             hamMenu.style.zIndex = '-1'; 
//             console.log('Burger menu hidden');
//         }
//     }
// });

// // Toggle menu on hamburger click
// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// });

// window.dispatchEvent(new Event('scroll'));


const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-container');

// Function to handle visibility based on scroll and screen size
function handleHamMenuVisibility() {
    const scrollY = window.scrollY;
    const threshold = window.innerHeight * 0.1;
    const isMobile = window.innerWidth <= 850;

    if (isMobile) {
        // Always show on mobile
        hamMenu.style.opacity = '1';
        hamMenu.style.zIndex = '1';
        console.log('Burger menu always visible on mobile');
    } else {
        // Show on scroll for larger screens
        if (scrollY > threshold) {
            hamMenu.style.opacity = '1';
            hamMenu.style.zIndex = '1';
            console.log('Burger menu visible after scroll');
        } else {
            if (!hamMenu.classList.contains('active')) {
                hamMenu.style.opacity = '0';
                hamMenu.style.zIndex = '-1';
                console.log('Burger menu hidden');
            }
        }
    }
}

// Handle visibility on scroll and resize
window.addEventListener('scroll', handleHamMenuVisibility);
window.addEventListener('resize', handleHamMenuVisibility);

// Run once on page load
window.addEventListener('load', handleHamMenuVisibility);

// Toggle menu on hamburger click
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});