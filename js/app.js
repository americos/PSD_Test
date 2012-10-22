jQuery(document).ready(function() {
	
	//Tab Functionality: Click on Menu links
	$(".menu a").click(function(e){

		e.preventDefault();

		//Remove active class
		$(".menu li").removeClass("active");

		//Add active class to element clicked
		var link = $(this);
		link.parent().addClass("active");

		var tab_to_activate = link.attr("elem");
		
		// Show/Hide Tabs
		$(".tabs").hide();
		$("#" + tab_to_activate).show();

	});


	//Twitter Hovercard
	twttr.anywhere(function (T) {
      T.hovercards();
    });

});
