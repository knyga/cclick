(function($) {

	var getOS = function() {
		var OSName="Unknown OS";

		if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
		if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
		if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
		if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

		return OSName;
	};

	var os = getOS();
		ctrlDown = false;

	$(document).keydown(function(event) {
		if ((event.keyCode == 17 && os != 'MacOS') || (event.keyCode == 91)) {
			ctrlDown = true;
		}
	}).keyup(function(event) {
		if ((event.keyCode == 17 && os != 'MacOS') || (event.keyCode == 91)) {
			ctrlDown = false;
		}
	});

	$.fn.cclick = function(fn) {
		return this.each(function() {
			$(this).on('click', function() {
				if(ctrlDown) {
					fn.apply(this, arguments);
				}
			})
		});
	};

})(jQuery)