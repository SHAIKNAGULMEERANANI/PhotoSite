let portfolioElements = document.getElementsByClassName("portfolio");
console.log(portfolioElements);
let portfolioSubNavElements = document.getElementsByClassName("portfolioSubNav");

for (let i = 0; i < portfolioElements.length; i++) {
    portfolioElements[i].addEventListener("mouseover", portfolioSubNav);
}

function portfolioSubNav(event) {
    let portfolioElement = event.target;
    portfolioSubNavElements.style.visibility="visible"
    console.log("hello");
}





$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      slidesToShow: 1,
      autoplaySpeed: 200000,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    $('.slider').on('init reInit afterChange', function(event, slick, currentSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      var slideCount = slick.slideCount;
      $('.slick-slide-number').text(i + ' / ' + slideCount);
    });
  });
 
  
// testimonials

$(document).ready(function(){
    $('.testimonials').slick({
      autoplay: true,
      slidesToShow:1,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    $('.slider').on('init reInit afterChange', function(event, slick, currentSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      var slideCount = slick.slideCount;
      $('.slick-slide-number').text(i + ' / ' + slideCount);
    });
  });