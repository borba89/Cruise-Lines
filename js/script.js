document.addEventListener("DOMContentLoaded", function() {
     var menuBtn = document.getElementById("gamburger-menu");mobMenu
     var mobMenu = document.getElementById("mobMenu");
     var mobClosed = document.getElementById("mobClosed");
     menuBtn.onclick = function() {
        mobMenu.style.display = "block";
        mobMenu.style.transition = "0.5s ease";
        mobMenu.style.right = "0";
    };
    mobClosed.onclick = function() {
        mobMenu.style.transition = "0.5s ease";
        mobMenu.style.right = "-100%";
        mobMenu.style.display = "none";
    };
});

$(document).ready(function(){    
    $('.employer_slider').slick({
        infinite: true,
        //slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.arrow-prew'),
        nextArrow: $('.arrow-next'),
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.cruise_line_header').on('click', function(){
        $(this).toggleClass("cruise_line_active");
        $(this).next().slideToggle();
    });
});
