$(document).ready(function(){
    // Toggle Navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // Changing Text Animation
    var type = new Typed(".changing", {
        strings: ["Android Developer", "Writer", "Designer", "Freelancer"],
        typespeed: 4000,
        loop: true
    });
});