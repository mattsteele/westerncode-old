(function($){

   // slide menu up and down
 		$('.nav-toggle').click(function(e){

 			if ($('.nav ul').is(':visible')){
 				$('.nav ul').not('.nav ul ul').slideUp(400, function(){ $('.nav ul').removeAttr('style'); });
        $('.header-mobile-social').slideToggle(400);
 				$('a',this).removeClass('open');

 			} else {

 				$('.nav ul').not('.nav ul ul').slideDown(400);
 				$('a',this).addClass('open');
        $('.header-mobile-social').slideToggle(400);
 		 }
 			e.preventDefault();
 		});


    $('.nav ul li').each(function(){
      if($(this).has("ul").length){
        $(this).append('<span>+</span>');
        $('span',this).click(function(){
          if ($('.nav ul ul').is(':visible')){
            $('.nav ul li.open').removeClass('open').find('span').text('+').parent().find('ul').slideUp(300);
          }

          if ($(this).parent().find('ul').is(':visible')){
            $(this).text('+').parent().find('ul').slideUp(300);
            $(this).parent().removeClass('open');
          } else {
            $(this).text('−').parent().find('ul').slideDown(300);
            $(this).parent().addClass('open');
          }
        });
      }
    });



    $('.card-height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });


		$('.scrollable').click(function(e){
			e.preventDefault();
			var id = $(this).attr('href');
				$('html,body').animate({scrollTop: $(id).offset().top},'slow');
			e.preventDefault();
		});


	})(jQuery);
