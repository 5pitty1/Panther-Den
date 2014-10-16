$(document).ready(function() {
   var front = $('.front');
   var notfront = $('.back');
   var admin = $('#admin');
   var teach = $('#teach');
   var back = $('#back');
 //  admin.on('click', function() {
 //     box.toggleClass('active'); 
 //  });
    admin.click(function(){
        notfront.toggleclass('active');
    });
});