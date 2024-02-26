// ------js file-------

$(document).ready(function(){
    $("#toggleButton").click(function(){
      $("#content").toggle();
    });
    $(".open-filter").click(function(){
      $(".filter-menu").toggle();
    });
  });
  $('.center').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 998,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
          breakpoint: 778,
          settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
        {
            breakpoint: 577,
            settings: {
                arrows: false,
                slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
    ]
});
$(document).ready(function(){
  $(".chat-name").click(function(){
    $(".chats").hide();
    $(".chats-msg").show();
  });
  $(".chat-close").click(function(){
    $(".chats-msg").hide();
    $(".chats").show();
  });
});
