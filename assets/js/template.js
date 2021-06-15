// Instantiate the Bootstrap carousel
$(function() {
    // init carousel
    $('.carousel').carousel({
        pause: true,        // init without autoplay (optional)
        interval: false,    // do not autoplay after sliding (optional)
        wrap:false          // do not loop
    });
    // init carousels with hidden left control:
    $('.carousel').children('.left.carousel-control').hide();
});

// execute function after sliding: 

$('.carousel').on('slid.bs.carousel', function () {
    // This variable contains all kinds of data and methods related to the carousel
    var carouselData = $(this).data('bs.carousel');
    // get current index of active element
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));

    // hide carousel controls at begin and end of slides
    $(this).children('.carousel-control').show();
    if(currentIndex == 0){
        $(this).children('.left.carousel-control').fadeOut();
    }else if(currentIndex+1 == carouselData.$items.length){
        $(this).children('.right.carousel-control').fadeOut();
    }
}); 


(function($) { // Begin jQuery
	$(function() { // DOM ready
	  // If a link has a dropdown, add sub menu toggle.
	  $('nav ul li a:not(:only-child)').click(function(e) {
		$(this).siblings('.nav-dropdown').toggle();
		// Close one dropdown when selecting another
		$('.nav-dropdown').not($(this).siblings()).hide();
		e.stopPropagation();
	  });
	  // Clicking away from dropdown will remove the dropdown class
	  $('html').click(function() {
		$('.nav-dropdown').hide();
	  });
	  // Toggle open and close nav styles on click
	  $('#nav-toggle').click(function() {
		$('nav ul').slideToggle();
	  });
	  // Hamburger to X toggle
	  $('#nav-toggle').on('click', function() {
		this.classList.toggle('active');
	  });
	}); // end DOM ready

	
})(jQuery); // end jQuery

