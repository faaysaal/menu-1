(function ($){
    "use strict";



    //Menu Trigger For Active
    $("i.fa-bars").on("click", function (){
      $("i.fa-times, i.fa-bars, ul").addClass('active');
      return false;
  });
    //Menu Trigger For Active
    $(".fa-times").on("click", function (){
      $("i.fa-times, i.fa-bars, ul").addClass('remove');
      return false;
  });
  //Menu Trigger For Close
  $(".toggle i.fa-times").on("click", function (){
      $("i.fa-times, i.fa-bars, ul").removeClass('active');
  });

    
})(jQuery);