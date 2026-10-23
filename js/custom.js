
/* Projects carousel */

$('.carousel').carousel();

/* prettyPhoto Gallery */

jQuery(".prettyphoto").prettyPhoto({
   overlay_gallery: false, social_tools: false
});

/* Isotope */

// cache container
var $container = $('#portfolio');
// initialize isotope
$container.isotope({
  // options...
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});               

/* Flex slider */

  $(window).load(function() {
    $('.flexslider').flexslider({
      easing: "easeInOutSine",
      directionNav: false,
      animationSpeed: 1500,
      slideshowSpeed: 5000
    });
  });

/* Image block effects */

$(function() {
      $('ul.hover-block li').hover(function(){
        $(this).find('.hover-content').animate({top:'-3px'},{queue:false,duration:500});
      }, function(){
        $(this).find('.hover-content').animate({top:'155px'},{queue:false,duration:500});
      });
});

/* Slide up & Down */

$(".dis-nav a").click(function(e){
	e.preventDefault();
	var myClass=$(this).attr("id");
	$(".dis-content ."+myClass).toggle('slow');
});


/* Image slideshow */

$('#s1').cycle({ 
    fx:    'fade', 
    speed:  2000,
    timeout: 300,
    pause: 1
 });

/* Support */

$("#slist a").click(function(e){
   e.preventDefault();
   $(this).next('p').toggle(200);
});

function openpopup(url) { 
	reqpopwin=window.open(url,"reqpopwin","toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=yes,scrollbars=1,  width=700,height=560,left=40,top=40");
	reqpopwin.focus();
}