app.register("try_design1", function() {
var timeouts_try = [];
var try_des1 ;
  return {
    events: {
    },
    states: [],
    onRender: function(el) {
      $("#bloc1_neo_tryphaena_s1").css("opacity","0");
      $("#bloc2_neo_tryphaena_s1").css("opacity","0");
      $("#bloc3_neo_tryphaena_s1").css("opacity","0");

      $("#titre1_tryphaena_s1").hide();
      $("#titre2_tryphaena_s1").hide(); 


      $(".one-two-three-adj").each(function(){
          $(this).css("opacity","0");
      });
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
        graphAnimation("#bloc1_neo_tryphaena_s1",2,"left","graph-layer-bg");
        graphAnimation("#bloc2_neo_tryphaena_s1",2,"left","graph-layer-bg");
        graphAnimation("#bloc3_neo_tryphaena_s1",2,"left","graph-layer-bg");

        try_des1 =  setTimeout(function(){
            $(".one-two-three-adj").each(function(index){
                
                var x = $(this) ;
                timeouts_try.push(setTimeout(function(){
                  x.css("opacity","1");
                  x.addClass("fade-in-fwd");
                  },index * 500));
            });


    

        },1800);
        $("#titre1_tryphaena_s1").show();
        $("#titre1_tryphaena_s1").addClass("titre1_tryphaena_s1_anim");
  
        $("#titre2_tryphaena_s1").show();
        $("#titre2_tryphaena_s1").addClass("titre1_tryphaena_s1_anim");
    },
    onExit: function(el) {
      if(try_des1) {
        clearTimeout(try_des1);
      }
      
      for (var i=0; i<timeouts_try.length; i++) {
        if(timeouts_try[i]){
        clearTimeout(timeouts_try[i]);
      }
      }
      for (var i=0; i<timeouts_try.length; i++) {
        timeouts_try.shift();
      }
      $("#bloc1_neo_tryphaena_s1").css("opacity","0");
      $("#bloc2_neo_tryphaena_s1").css("opacity","0");
      $("#bloc3_neo_tryphaena_s1").css("opacity","0");

      
      $(".one-two-three-adj").each(function(){
        $(this).css("opacity","0");
        $(this).removeClass("fade-in-fwd");
    });
    $("#titre1_tryphaena_s1").hide();
    $("#titre1_tryphaena_s1").removeClass("titre1_tryphaena_s1_anim");

    $("#titre2_tryphaena_s1").hide();
    $("#titre2_tryphaena_s1").removeClass("titre2_tryphaena_s1_anim");
    },

  }

});