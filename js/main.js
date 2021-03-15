
$(document).ready(function () {


  $('a[href^="#"]').click(function () { 
    let anchor = $(this).attr('href');  
    $('html, body').animate({           
      scrollTop: $(anchor).offset().top  
    }, 600);                            
  });
  
  $('.our-team').slick(
    {
      arrows: false,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      dots: true,
    }
    );
    
    $('.specialties').slick(
      {
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
      }
      );
      
    $.fancybox.defaults.loop = "false";

});

function toggleClass() {
  let menu = document.querySelector('.header__nav');
  let menu2 = document.querySelector('.qqe');
  menu.classList.toggle('toggle__class')
  menu2.classList.toggle('toggle__class')
};