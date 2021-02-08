


$("#go_top").on("click",function(){
  $('html,body').animate({scrollTop:0},1000);
});




$(function(){
  $("#phone_btn").on("click",function(){
    if($("#nav_container").height() == 0){  
      $("#nav_container").css("height","350px");
      var nav_height =  $("#nav_container").height();
    }else if($("#nav_container").height() >= 308){
      $("#nav_container").css("height","0px");
    };
  });

  if($("#nav_container").height() >= 308){
    $(window).scroll(function(){
      $("#nav_container").css("height","0px");
    });
  };
});

$(window).scroll(function(){
  $("#nav_container").css("height","0px");
});


//searchbar change
$(function(){
  $(".travel_slider").on("click",function(){
    var select_class = $(this).attr("class").split(' ')[1];
    var search_class = "." + select_class + "_search_bar"
    $(".search_bar").css("display","none");
    $(search_class).css("display","block");
  });
});


//datesearch

// $(function(){
//   $('input[name="dates"]').daterangepicker({
//     startDate: moment(),
//     endDate: moment()+10,

//     locale: {
//       format: 'YYYY-MM-DD'
//     },

//   });

});
