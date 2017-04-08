var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

// show the title after scrolling the first part of the page

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > viewportHeight*.8) {
    $('#title').fadeIn();
    $('.menu').css('justify-content', 'space-between');
  } else {
    $('#title').fadeOut(500, function () {
      $('.menu').css('justify-content', 'flex-end');
    });
  }
});

// Code for slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'flex';
  dots[slideIndex-1].className += ' active';
}

// Clicking on interested button goes to next section
$(document).ready(function(){
  $('#interested').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#how-works').offset().top
    }, 1000);
  })
});


// navigation from menu to content
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
