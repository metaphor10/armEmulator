/**
 * Created by arielb on 1/20/2015.
 */


    $(function () {
        $("#screen").width($( window ).width()-100);
        $("#screen").height($(window).height()-300);


    });


$(document).ready(function(){
    $("#screen").keyup(function(e){

        if(e.which==13) {
            alert(this.value);
            $("#screen").val("");
        }

    });
    this.value=null;


});


