
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
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
      }
    );
      
    $.fancybox.defaults.loop = "false";

});

function toggleClass() {
  let navigation = document.querySelectorAll('.header__nav');
  for (let navItem of navigation) {
    
    navItem.classList.toggle('toggle__class');

  }
};


function switchTeamPopup(id) {
  document.querySelector('.team-popup' + id).classList.toggle('active')
};

function switchSpecPopup(id) {
  document.querySelector('.specialties-popup' + id).classList.toggle('active')
};

function switchStyle(event, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("menu__dishes");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("menu__tabs-wrapper");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  event.currentTarget.className += " active";
}