/*$(document).ready(function(){
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
});
*/
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.menu ul li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('.menu ul li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body, topo').stop().animate({
            'scrollTop': $target.offset().top
        }, 1400, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('li').removeClass("menu__item--current");
            currLink.parent().addClass("menu__item--current");
        }
        else{
            currLink.removeClass("menu__item--current");
        }
    });
}

/*
$(document).ready(function(){
	$('.menu a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body, topo').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
*/
