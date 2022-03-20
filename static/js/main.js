$(document).ready(function () {
    $(window).resize(function () {
         cambio();
    });
    
    cambio();
    
    function cambio(){
      if ($(window).width() <= 700) {
            $('#img1').attr('src','../../static/resp/Bann1.jpg');
            $('#img2').attr('src','../../static/resp/Bann2.jpg');
            $('#img3').attr('src','../../static/resp/Bann3.jpg');
        } else {
            $('#img1').attr('src','../../static/pictures/Bann1.jpg');
            $('#img2').attr('src','../../static/pictures/Bann2.jpg');
            $('#img3').attr('src','../../static/pictures/Bann3.jpg');
        }
    }
});