$(document).ready(function(){
  $('.slider').slick({
     arrows: false,
     dots: true,
  });
  var $isotop = $('.section__images').isotope({
    itemSelector: '.section__image',
      masonry: {
        columnWidth: 40,
			  gutter: 1,
			  horizontalOrder: true
    }
  });

  $('body').on('click', '.section__filters li a', function(e){
    e.preventDefault();
    $('.section__filters li a').removeClass('active');
    $(this).addClass('active');
    var filter = $(this).attr('data-filter');

    filter = filter == '*' ? filter : '.' + filter;

    $isotop.isotope({ filter: filter });

  });

  $('body').on('click', '.scrollTo', function(e){
    e.preventDefault();
    var target = $(this).attr('href'),
      offset = Math.floor($(target).offset().top);
    $('html').animate({
      scrollTop: offset
    }, 1000, function(){});
  });
});

function initMap() {
        var office = {lat: 47.10125658, lng: 37.5504771};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: office
        });
        var marker = new google.maps.Marker({
          position: office,
          map: map,
          icon: 'img/favicon.png'
        });
      }
