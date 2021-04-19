$(document).ready(function () {
    $('.subpage-ukm').hide();
    $('.subpage-ukmtv').hide();
    $('.subpage-vibakukm').hide();

    $("div").click(function () { 
        var sublistID = event.target.id; 
        console.log(sublistID);

        if (sublistID == 'subpage-ukm' || sublistID == 'subpage-ukmtv' || sublistID == 'subpage-vibakukm' ) { 
            $('.mainpage').hide();
            $('.' + sublistID ).show(); 
        }
        
        if (sublistID == 'backToMain' || sublistID == 'hamburger-icon') {
            $('.mainpage').show();
            //$('.' + sublistID ).hide();
            //$('.' + sublistID ).children().hide()
            $('.subpage-ukm').hide();
            $('.subpage-ukmtv').hide();
            $('.subpage-vibakukm').hide();
        }

    });

    $('.hamburger').on('hide.bs.dropdown', function(e) { if (e.clickEvent) { e.preventDefault();} });
    
    $('.hamburger-icon').click(function(){
            $(this).toggleClass('open'); 
            $('.hamburger-overlay').toggleClass('open'); 
            $('.hamburger').toggleClass('open'); 

    });
});