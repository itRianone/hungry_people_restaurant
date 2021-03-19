
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
      autoplay: false,
      autoplaySpeed: 2500,
      dots: true,
    }
    );
    
    $('.specialties').slick(
      {
        slidesToShow: 1,
        arrows: false,
        autoplay: false,
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

function switchTeamPopup(id) {
  document.querySelector('.team-popup' + id).classList.toggle('active')
  // document.querySelectorAll('.specialties__popup').classList.toggle('active')
};

function switchSpecPopup(id) {
  document.querySelector('.specialties-popup' + id).classList.toggle('active')
  // document.querySelectorAll('.specialties__popup').classList.toggle('active')
};