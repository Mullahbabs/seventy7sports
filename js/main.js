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
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.fixed-top .container').addClass('shadow-sm').css('max-width', '100%');
        } else {
            $('.fixed-top .container').removeClass('shadow-sm').css('max-width', '85%');
        }
    });


    // Donation
    $('.progress').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Event carousel
    $(".event-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    document.addEventListener("DOMContentLoaded", function () {
        // Select all like buttons
        const likeButtons = document.querySelectorAll(".likeButton");
    
        likeButtons.forEach(button => {
            const postId = button.getAttribute("data-post-id");
            const likeCountElement = button.querySelector(".likeCount");
    
            // Load saved like count from localStorage
            let likeCount = localStorage.getItem(postId) ? parseInt(localStorage.getItem(postId)) : 0;
            likeCountElement.textContent = likeCount; 
    
            // Click event listener
            button.addEventListener("click", function () {
                likeCount += 1;
                likeCountElement.textContent = likeCount;
                localStorage.setItem(postId, likeCount); // Save count in localStorage
            });
        });
    });
    
    
    document.addEventListener('DOMContentLoaded', function () {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabPanes = document.querySelectorAll('.tab-pane');
    
        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
    
                // Add active class to the clicked button and corresponding pane
                const tabId = this.getAttribute('data-tab');
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    });
    


})(jQuery);

