var pages = [];
var curr_page = 1;

var Page = (function() {
	var config = {
     	$bookBlock : $( '#bb-bookblock' ),
		$navNext : $( '#bb-nav-next' ),
		$navPrev : $( '#bb-nav-prev' ),
		$navFirst : $( '#bb-nav-first' ),
		$navLast : $( '#bb-nav-last' )
	},
        init = function() {
            config.$bookBlock.bookblock( {
                    orientation : 'horizontal',
                    speed : 700
                } );
            initEvents();
        },
        initEvents = function() {

            var $slides = config.$bookBlock.children();
						
            // add navigation events
            config.$navNext.on( 'click touchstart', function() {
				var prev_audio = $("#" + curr_page)[0];
                    if (curr_page < pages.length) curr_page++;
                    var next_audio = $("#" + curr_page)[0];
                    prev_audio.pause();
                    next_audio.play();
                    console.log(curr_page);
                    config.$bookBlock.bookblock( 'next' );
                    return false;
                } );

            config.$navPrev.on( 'click touchstart', function() {
				var prev_audio = $("#" + curr_page)[0];
                    if (curr_page > 1) curr_page--;
                    var next_audio = $("#" + curr_page)[0];
                    prev_audio.pause();
                    next_audio.play();
                    console.log(curr_page);
                    config.$bookBlock.bookblock( 'prev' );
                    return false;
                } );

            config.$navFirst.on( 'click touchstart', function() {
				var prev_audio = $("#" + curr_page)[0];
                    curr_page = 1;
                    var next_audio = $("#" + curr_page)[0];
                    prev_audio.pause();
                    next_audio.play();
                    console.log(curr_page);
                    config.$bookBlock.bookblock( 'first' );
                    return false;
                });

            config.$navLast.on( 'click touchstart', function() {
				var prev_audio = $("#" + curr_page)[0];
                    curr_page = $(".bb-item").length;
                    var next_audio = $("#" + curr_page)[0];
                    prev_audio.pause();
                    next_audio.play();
                    console.log(curr_page);
                    config.$bookBlock.bookblock( 'last' );
                    return false;
                });

            // add keyboard events
            $( document ).keydown( function(e) {
                    var keyCode = e.keyCode || e.which,
                        arrow = {
                        left : 37,
                        up : 38,
                        right : 39,
                        down : 40
                    };

                    switch (keyCode) {
                    case arrow.up:
                        config.$bookBlock.bookblock( 'prev' );
                        e.preventDefault();
                        break;
                    case arrow.down:
                        config.$bookBlock.bookblock( 'next' );
                        e.preventDefault();
                        break;
                    }

                } );
        };

	return { init : init };
})();

$(function() {
	for (var i = 1; i < 31; i++) {
		pages.push(i);
	}
	$("audio").audioPlayer();
	Page.init();
});