$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //typing animation script
    new Typed("#typing", {
        strings: ["Game Designer", "XR Developer", "Game QA Engineer", "Motion Designer", "Unity Developer", "Creative Designer"],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true
    })
    new Typed("#typing-2", {
        strings: ["Game Designer", "XR Developer", "Game QA Engineer", "Motion Designer", "Unity Developer", "Creative Designer"],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true
    })

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav:false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav:false
            }
        }
    });
});