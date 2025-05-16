(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 15000,
        smartSpeed: 700,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);

const projects = [
    { filter: 'first', label: 'Industrial Electrical Installations', imgPrefix: 'industrial', count: 15 },
    { filter: 'second', label: 'Commercial Electrical Installations', imgPrefix: 'commercial', count: 4 },
    { filter: 'third', label: 'Residential Electrical Installations', imgPrefix: 'residential', count: 8 },
    { filter: 'fourth', label: 'Renewable Energy Installations', imgPrefix: 'renewable', count: 12 },
    { filter: 'fifth', label: 'Outdoors Electrical Installations', imgPrefix: 'outdoor', count: 8 },
];

const container = document.querySelector('.portfolio-container');
const tpl = document.getElementById('portfolio-item-tpl').content;
container.innerHTML = '';

projects.forEach(({ filter, label, imgPrefix, count }) => {
    for (let i = 1; i <= count; i++) {
        // clone the template
        const clone = document.importNode(tpl, true);
        const item = clone.querySelector('.portfolio-item');
        const img = clone.querySelector('img');
        const eye = clone.querySelector('[data-lightbox]');
        const txt = clone.querySelector('p');

        // apply data
        item.classList.add(filter);
        const src = `img/${imgPrefix}${i}.jpg`;
        img.src = src;
        img.alt = `${label} #${i}`;
        eye.href = src;
        txt.textContent = label;

        container.appendChild(clone);
    }
});

// Re-init Wow.js and/or Isotope if needed:
new WOW().init();

const filters = document.querySelector('#portfolio-flters');
const items = document.querySelectorAll('.portfolio-item');

filters.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') return;
    filters.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');
    const filter = e.target.getAttribute('data-filter');
    items.forEach(item => {
        if (filter === '*' || item.classList.contains(filter.slice(1))) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

