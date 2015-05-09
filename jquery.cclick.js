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

    $(document).keydown(function(event) {
        if ((event.keyCode == 17 && os != 'MacOS') || (event.keyCode == 91)) {
            $.isCtrlDown = true;
        }
    }).keyup(function(event) {
        if ((event.keyCode == 17 && os != 'MacOS') || (event.keyCode == 91)) {
            $.isCtrlDown = false;
        }
    });

    $.fn.cclick = function(fn) {
        return this.each(function() {
            $(this).on('click', function() {
                if($.isCtrlDown) {
                    fn.apply(this, arguments);
                }
            });
        });
    };

    $.isCtrlDown = false;

})(jQuery)
