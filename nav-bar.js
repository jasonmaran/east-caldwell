$(document).ready(function() {
    
     $('.title').hide();
     $('.lowerright').hide();
     $('.index-image').hide();

     
     $('.index-image').fadeIn(2000);
     $('.title').fadeIn(6000);
     $('.lowerright').fadeIn(8000);
      
     
     $('.poem').fadeIn(2500);
     $('.history-quote').fadeIn(2500);
     $('.government-quote').fadeIn(2500);
     $('.mysteries-quote').slideDown(9000);
     

     $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(300);
        },
        function(){
            $(this).children('.sub-menu').slideUp(300);
        }
    );
    
});