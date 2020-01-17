app.register("APH_DESIGN1", function() {
  var aph_time1 ;
  var aph_time2 ;
  var aph_time3 ;
  return {
    events: {

    },
    states: [],
    onRender: function(el) {
       $("#aph-des1-elem1").css("opacity","0");
    
       $("#aph-des1-elem2").css("opacity","0");
       $("#aph-des1-elem3").css("opacity","0");
       $("#aph-des1-arrow1").css("opacity","0");
       $("#aph-des1-graph-text1").css("opacity","0");

       $("#aph-des1-elem4").css("opacity","0");
       $("#aph-des1-elem5").css("opacity","0");
       $("#aph-des1-arrow2").css("opacity","0");
       $("#aph-des1-graph-text2").css("opacity","0");


       $("#aph-des1-elem6").css("opacity","0");

    },
    onRemove: function(el) {
     
    },
    onEnter: function(el) {
      $("#aph-des1-elem1").css("opacity","1").addClass("fade-in-left");

      aph_time1 = setTimeout(function(){
        $("#aph-des1-elem2").css("opacity","1").addClass("fade-in-left");
        $("#aph-des1-elem3").css("opacity","1").addClass("fade-in-left");
        

        setTimeout(function(){
          $("#aph-des1-arrow1").css("opacity","1").addClass("fade-in-left");
          $("#aph-des1-graph-text1").css("opacity","1").addClass("fade-in-left");
        },100);
      
      },200);

      aph_time2 = setTimeout(function(){

        $("#aph-des1-elem4").css("opacity","1").addClass("fade-in-left");
        $("#aph-des1-elem5").css("opacity","1").addClass("fade-in-left");
        

       setTimeout(function(){
          $("#aph-des1-arrow2").css("opacity","1").addClass("fade-in-left");
          $("#aph-des1-graph-text2").css("opacity","1").addClass("fade-in-left");
        },100);
      
      },300);

      aph_time3 = setTimeout(function(){
      $("#aph-des1-elem6").css("opacity","1").addClass("fade-in-left");
     },400);
 


    },
    onExit: function(el) {

      if (aph_time3) {
        clearTimeout(aph_time3);
        aph_time3 = 0;
      }

        if (aph_time2) {
          clearTimeout(aph_time2);
          aph_time2 = 0;

        }

        if (aph_time1) {
          clearTimeout(aph_time1);
          aph_time1 = 0;

        }




      $("#aph-des1-elem1").css("opacity","0").removeClass("fade-in-left");
    
      $("#aph-des1-elem2").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-elem3").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-arrow1").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-graph-text1").css("opacity","0").removeClass("fade-in-left");

      $("#aph-des1-elem4").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-elem5").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-arrow2").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-graph-text2").css("opacity","0").removeClass("fade-in-left");


      $("#aph-des1-elem6").css("opacity","0").removeClass("fade-in-left");
    }
  }

});