
    jQuery(document).ready(function($){
        if (window.location.pathname === "/"){
            if(!Cookies.get("shown-intercept") && !Cookies.get("signed-up")){
                setTimeout(function(){
                    $(".snackbar").addClass("snackbar-visible");
                    $(window).disablescroll();
                }, 3000);
            }
        }
        $(".snackbar-intercept-button").on("click", function(event){
            event.preventDefault();
            $(".snackbar").removeClass("snackbar-visible");
            $(window).disablescroll("undo");
            Cookies.set("shown-intercept", true);
        });
        $(".snackbar-intercept-button").on("click", function(event){
            Cookies.set("signed-up", true, {expires: 3650});
        });
    });


    /*jQuery(document).ready(function($){
        if (window.location.pathname === "/"){
            if(!Cookies.get("shown-intercept") && !Cookies.get("signed-up")){
                setTimeout(function(){
                    $('.snackbar').fadeIn(400);
                    $(window).disablescroll();
                }, 3000);
            }
        }
        $("#accept").on("click", function(event){
            event.preventDefault();
            $("#snackbar").css("display", "none");
            //$(window).disablescroll("undo");
            Cookies.set("shown-intercept", true);
        });
        $("#accept").on("click", function(event){
            Cookies.set("signed-up", true, {expires: 3650});
        });
    });*/




