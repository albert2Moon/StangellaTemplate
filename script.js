// Navbar Items
document.addEventListener("DOMContentLoaded", function () {
    // Get the full URL from the address bar
    var url = window.location.href;

    // Get all <a> tags inside the element with id "active_Item"
    var links = document.querySelectorAll("#active_Item a");

    // Iterate over each <a> tag
    links.forEach(function (link) {
        // Check if the href attribute of the <a> tag matches the current URL
        if (url === link.href) {
            // Add the class "active" to the closest <li> ancestor of the matching <a> tag
            link.closest("li").classList.add("active");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Get the button
    var toTopBtn = document.getElementById("toTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };
});

// Function to scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}






// News and Events detail Page








// Go back button fo closing the signin page and user profile
function goBack() {
    window.history.back();
}



// Image view panel 
document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll('.image-container');
    const viewPanel = document.createElement('div');
    viewPanel.classList.add('view-panel');
    document.body.appendChild(viewPanel);

    imageContainers.forEach(container => {
        container.addEventListener('click', () => {
            const clickedImage = container.querySelector('img').cloneNode();
            viewPanel.innerHTML = '';
            viewPanel.appendChild(clickedImage);
            viewPanel.classList.add('active');
        });
    });

    viewPanel.addEventListener('click', () => {
        viewPanel.classList.remove('active');
    });
});






//User Account dropdown list

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}





// //Changing background color of the navbar on scroll
// document.addEventListener("DOMContentLoaded", function () {
//     if (window.location.pathname.includes("index.html")) {
//         window.onscroll = function () {
//             changeNavbarBackground();
//         };
//     }
//     else {
//         window.onscroll = function () {
//             revertNavbarBackground();
//         };
//     }
// });

// function changeNavbarBackground() {
//     const navbar = document.getElementById("navbar");
//     const menuitems = document.getElementsByClassName("menuList");
//     const logoSpan = document.querySelector('.logo span');
//     const userProfileIcon = document.querySelector('#user');

//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         navbar.style.backgroundColor = "#021D1B"; // Change the background color as needed
//         // navbar.classList.add("scrolled"); // Add a class to the nav tag
//         navbar.classList.toggle("scrolled");
//         // Change colors when scrolled
//         logoSpan.style.color = '#099714'; // Change to the desired color
//         userProfileIcon.style.color = '#099714'; // Change to the desired color
//         // signBtn.style.backgroundColor = '#099714'; // Change to the desired color
//     } else {
//         navbar.style.backgroundColor = "transparent";
//         // navbar.classList.remove("scrolled"); // Add a class to the nav tag
//         logoSpan.style.color = ''; // Revert to the original color
//         userProfileIcon.style.color = ''; // Revert to the original color
//         // signBtn.style.backgroundColor = ''; // Revert to the original color
//     }
// }

// function revertNavbarBackground() {
//     const navbar = document.getElementById("navbar");
//     const menuitems = document.querySelector('.menuList i');
//     const logoSpan = document.querySelector('.logo span');
//     const userProfileIcon = document.querySelector('#user');


//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//         navbar.style.backgroundColor = "#021D1B"; // Change the background color as needed
//         navbar.classList.add("navbar2"); // Add a class to the nav tag
//         // Change colors when scrolled
//         if (menuitems !== undefined && menuitems !== null) {
//             menuitems.style.color = '#021D1B';
//         }
//         logoSpan.style.color = '#006714'; // Change to the desired color
//         userProfileIcon.style.fill = '#CDFCF5';

//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    // const navbar = document.getElementById("navbar");
    const logoSpan = document.querySelector('.logo span');
    // const userProfileIcon = document.querySelector('#user');

    if (window.location.pathname.includes("index.html")) {
        window.addEventListener('scroll', function () {
            changeNavbarBackground(logoSpan);
        });
    } else {
        window.addEventListener('scroll', function () {
            revertNavbarBackground(logoSpan);
        });
    }
});

function changeNavbarBackground(logoSpan) {
    if (window.pageYOffset > 20) {
        logoSpan.style.color = '#099714';
    } else {
        logoSpan.style.color = '';
    }
}

function revertNavbarBackground(logoSpan) {
    if (window.pageYOffset > 0) {
        logoSpan.style.color = '#006714';
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener('scroll', function () {
        navbar.classList.toggle("scrolled", window.scrollY > 0);
    });
});







//   Header slide show for the index page
// JavaScript code for the infinite carousel
const items = document.querySelector('.carousel_items');
const totalItems = document.querySelectorAll('.carousel_item').length;
let currentIndex = 0;

function changeSlide(event) {
    if (event.target.classList.contains('carousel_btn')) {
        const targetIndex = parseInt(event.target.getAttribute('data-slide'));
        currentIndex = targetIndex;
        updateCarousel();
    }
}

function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    if (items !== undefined && items !== null) {
        items.style.transform = 'translateX(' + newTransformValue + ')';
    }


    // Update active state for carousel_btn
    const buttons = document.querySelectorAll('.carousel_btn');
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === currentIndex);
    });
}

function handleCarouselTransition() {
    if (currentIndex === totalItems) {
        currentIndex = 0;
        items.style.transition = 'none';
        updateCarousel();
        setTimeout(() => {
            items.style.transition = 'transform 0.5s ease';
        }, 0);
    }
}

setInterval(() => {
    currentIndex++;
    updateCarousel();
    handleCarouselTransition();
}, 8000); // Adjust the time interval as needed




// Teacher Section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 1080px
        1080: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});




    // Menu Button
    const hamburger = document.querySelector('.menu');
    const navMenu = document.querySelector('.menuList');

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle('clicked');
        navMenu.classList.toggle('clicked');

    })

    function toggleMenu() {
        var MenuContent = document.querySelector(".menuList");
        var MenuBtn = document.querySelector(".menu");
        // Toggle the display property of the dropdown content
        // MenuContent.classList.toggle = (dropdownContent.style.display === "block") ? "none" : "block";
        if (MenuBtn.className === "menu" && MenuContent.className === "menuList") {
            MenuBtn.classList.add("clicked");
            MenuContent.classList.add("clicked");
        } else {
            MenuBtn.classList.remove("clicked");
            MenuContent.classList.remove("clicked");
        }

    }











