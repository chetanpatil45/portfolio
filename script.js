$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) { $('.navbar').addClass("sticky"); }
        else { $('.navbar').removeClass("sticky"); }

        if (this.scrollY > 500) { $('.scroll-up-btn').addClass("show"); }
        else { $('.scroll-up-btn').removeClass("show"); }
    });

    $('.scroll-up-btn').click(function () { $('html').animate({ scrollTop: 0 }); });

    new Typed(".typing", {
        strings: ["Software Developer", "Quick Learner", "Tech Enthusiast"],
        typeSpeed: 100, backSpeed: 60, loop: true
    });

    new Typed(".typing-2", {
        strings: ["Detail Oriented", "Problem Solver", "Persistent","Self-Motivated"],
        typeSpeed: 100, backSpeed: 60, loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20, loop: true, autoplay: true, autoplayTimeOut: 2000,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
    });

    $('.menu-btn').click(function () { $('.navbar .menu').toggleClass("active"); $('.menu-btn i').toggleClass("active"); });
});

// MODAL LOGIC – FIXED FOR OWL CAROUSEL
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

// Use EVENT DELEGATION (IMPORTANT)
$(document).on('click', '.certifications img', function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});

// Close modal
$('.close-modal, #imageModal').on('click', function (e) {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});



$('.certifications .carousel').owlCarousel({
    margin: 25,
    loop: true,
    autoplay: false,
    nav: true,        // 🔥 ENABLE ARROWS
    dots: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1 },
        700: { items: 2 },
        1050: { items: 3 }
    }
});


$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        700: { items: 2 },
        1050: { items: 3 } // Shows 3 projects at once on big screens
    }
});

$('.projects .carousel').owlCarousel({
    margin: 25,
    loop: true,
    autoplay: false,
    nav: true,
    dots: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1 },
        700: { items: 2 },
        1050: { items: 3 }
    }
});



let projectImages = [];
let currentIndex = 0;

// Open modal when clicking project card box
$(document).on('click', '.projects .card .box', function (e) {

    // Prevent modal when clicking buttons/links
    if ($(e.target).closest('a').length) return;

    const card = $(this).closest('.card');
    const images = card.attr('data-images');

    console.log('Clicked project card');
    console.log('Images:', images);

    if (!images) {
        console.warn('❌ data-images attribute missing');
        return;
    }

    projectImages = images.split(',');
    currentIndex = 0;

    $('#imageModal').css('display', 'flex');
    $('#img01').attr('src', projectImages[currentIndex]);
    $('#caption').text('Project Preview');
});


// Next
$('.modal-next').click(function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % projectImages.length;
    $('#img01').attr('src', projectImages[currentIndex]);
});

// Previous
$('.modal-prev').click(function (e) {
    e.stopPropagation();
    currentIndex =
        (currentIndex - 1 + projectImages.length) % projectImages.length;
    $('#img01').attr('src', projectImages[currentIndex]);
});


// Prevent modal when clicking links
$(document).on('click', '.projects a', function (e) {
    e.stopPropagation();
});


// Keyboard navigation for modal
$(document).on('keydown', function (e) {

    // Modal must be open
    if ($('#imageModal').css('display') !== 'flex') return;

    // ESC key
    if (e.key === 'Escape') {
        $('#imageModal').css('display', 'none');
    }

    // Right arrow
    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % projectImages.length;
        $('#img01').attr('src', projectImages[currentIndex]);
    }

    // Left arrow
    if (e.key === 'ArrowLeft') {
        currentIndex =
            (currentIndex - 1 + projectImages.length) % projectImages.length;
        $('#img01').attr('src', projectImages[currentIndex]);
    }
});

$(window).scroll(function () {
    if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
    } else {
        $('.scroll-up-btn').removeClass("show");
    }
});

// Scroll to top on click
$('.scroll-up-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
});