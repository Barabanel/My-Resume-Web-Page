$(document).ready(function(){
	// media navigation button
	$(".nav-line").on("click", function() {
		$("header nav ul").toggleClass("active");
	})

	// intern link scroll animation
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	// remove last function if you don't want URL change

	// bar animation on scroll
	var barAnimation = function () {
	    $('.bar').each(function () {
            var value = parseInt($(this).attr('data-value'));
               $(this).delay(100).animate({
                   width: value + "%"
               }, 1200);
       });
	};

	var numAnimation = function () {
		$(".bar").each(function (barElement) {
			var element = $('.bar')[barElement];
			var value = parseInt($(this).attr('data-value'));
            var content = 10;
	        var id = setInterval(frame, 20);
	        function frame() {
	            if (content >= value) {
	                clearInterval(id);
	            } else {
	                content++;
	                element.innerHTML = content * 1 + '%';
	            }
	        }
    	});
	}

	var flag = true;
	$(window).scroll(function() {
		if ($(this).width() >= 768)  {
	        if ($(this).scrollTop() > 700) {
	            if (flag) {
	            	barAnimation();
	            	numAnimation();
	            	flag = false;
	        	}
	        }
	    } else {
		    if ($(window).scrollTop() > 1550) {
		        if (flag) {
	            	barAnimation();
	            	numAnimation();
	            	flag = false;
	        	}
		    }
		}
	});

	//to the top button
	var offset=300, scrollDuration=500;
        $(window).scroll(function() {
	    if ($(this).scrollTop() > offset) {
                $('#toTheTop').fadeIn(500);
                } else {
		$('#toTheTop').fadeOut(500);
		}
	});

	$('#toTheTop').click(function(event) {
	event.preventDefault();
            $('html, body').animate({
	        scrollTop: 0}, scrollDuration);
                })

});