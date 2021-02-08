$(document).ready(function(){
  $("#top_banner").css("opacity","1");
  $(".nav_tag").css("opacity","1");
  $("#header_image").css("opacity","1");
  $(".header_box").css("opacity","1");
  $(".side-box").css("transform","translateX(0px)");
  $(".side-box").css("opacity","1");

  //ADslider
  $("#slider_container").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    dots: true,
    arrows: false,
  });

  //emergency_slider
  var swiper = new Swiper('.swiper-container',{
    direction: 'vertical',
    autoplay:{
      delay: 5000,
    },

  });

  //travel_slider
  $("#travel_slider_container").slick({
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
   
  });


});