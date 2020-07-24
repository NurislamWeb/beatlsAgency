//*********************banner part slider start **********************

$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: true,
    prevArrow:'<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
         arrows: true,
          padding: 0,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          dots: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         autoplay: true,
         arrows: false,
          dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});	
//*********************banner part slider end **********************




//*********************portfolio part slider venubox start**********************

$(document).ready(function(){
    $('.venobox').venobox(); 
});

//*********************portfolio part slider venubox end************************









//*********************testimonial  part slider venubox start*********************
$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
    arrows: false,
    autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
          autoplay: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
          dots: true,
          dots: true,
          infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//*********************testimonial  part slider venubox end************************




//*********************back to top button js start**********************

// fixed menu js
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>500){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>1000){
    $(".btop").css("visibility","visible");
  }else{
    $(".btop").css("visibility","hidden");
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})


//*********************back to top button js end************************


