"use strict";function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var s,t=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("dot");for(e>t.length&&(slideIndex=1),e<1&&(slideIndex=t.length),s=0;s<t.length;s++)t[s].style.display="none";for(s=0;s<n.length;s++)n[s].className=n[s].className.replace(" active","");t[slideIndex-1].style.display="flex",n[slideIndex-1].className+=" active"}var slideIndex=1;showSlides(slideIndex),$(document).ready(function(){$("#interested").on("click",function(){$("html, body").animate({scrollTop:$("#how-works").offset().top},1e3)})}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}})});