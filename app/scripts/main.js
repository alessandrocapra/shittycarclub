var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

// disable video autoplay for mobile
if (viewportWidth < 768){
  console.log("Removed video");
  $('video').remove();
}

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


$(document).ready(function () {

  // show the feedback when someone clicks on the feedback buttons at the bottom
  $('#would-you button').on('click', function () {
    $('.car-picture').fadeIn(1000).css('display', 'flex');
  })

  // expand menu on hamburger click
  $('.hamburger-toggle').on('click', function () {
    $(this).toggleClass('position-abs');
    $('.menu li').toggleClass('active-li');
  })
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

    // hide the menu once the element is clicked
    $('.menu li').removeClass('active-li');

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 45
        }, 1000);
        return false;
      }
    }
  });
});
