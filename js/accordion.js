$(document).ready(function () {
    $('#getting-started-collapse').hide();

    // $(".button-tint").click(function () {
    //     $("#caret-flip").css({"transform" : "rotate(90deg)"});
    // });

    $("#multiCollapseFooter1").on("hide.bs.collapse", function(){
        $("#caret-flip").css({"transform" : "rotate(0deg)"});
        $("#accordion1").css({"box-shadow": "none"});
      });

    $("#multiCollapseFooter1").on("show.bs.collapse", function(){
    $("#caret-flip").css({"transform" : "rotate(90deg)"});
    $("#accordion1").css({"box-shadow": "0px 5px 15px hsla(228, 96%, 67%, 0.11)"});
    
    });
    
});