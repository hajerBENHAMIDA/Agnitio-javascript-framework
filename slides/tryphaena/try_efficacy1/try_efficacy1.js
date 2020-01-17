app.register("try_efficacy1", function() {
var try_eff1_timer ;
  return {
    events: {


    },
    states: [],
    onRender: function(el) {
      $("#bloc1_tryphaena_s3").css("opacity",0);
      $("#bloc2_tryphaena_s3").css("opacity",0);
      $("#bloc3_tryphaena_s3").css("opacity",0);
      
      $("#texte1_tryphaena_s3").css("opacity",0);
      $("#texte2_tryphaena_s3").css("opacity",0);
      $("#texte3_tryphaena_s3").css("opacity",0);
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      try_eff1_timer = setTimeout(function(){
      graphAnimation("#bloc1_tryphaena_s3");
      graphAnimation("#bloc2_tryphaena_s3");
      graphAnimation("#bloc3_tryphaena_s3");
      // graphAnimation("#texte1_tryphaena_s3",3);
      // graphAnimation("#texte2_tryphaena_s3",3);
      // graphAnimation("#texte3_tryphaena_s3",3);
    }
       ,0.5) ;
       try_eff1_timer = setTimeout(function(){
         $("#texte1_tryphaena_s3").addClass("slide-in-elliptic-left-fwd");
         $("#texte2_tryphaena_s3").addClass("slide-in-elliptic-left-fwd");
         $("#texte3_tryphaena_s3").addClass("slide-in-elliptic-left-fwd");
       }
       , 1500) ;
    },
    onExit: function(el) {
      if(try_eff1_timer){
        clearTimeout(try_eff1_timer);
      }
      $("#bloc1_tryphaena_s3").css("opacity",0);
      $("#bloc2_tryphaena_s3").css("opacity",0);
      $("#bloc3_tryphaena_s3").css("opacity",0);

      // $("#texte1_tryphaena_s3").css("opacity",0);
      // $("#texte2_tryphaena_s3").css("opacity",0);
      // $("#texte3_tryphaena_s3").css("opacity",0);


      $("#texte1_tryphaena_s3").removeClass("slide-in-elliptic-left-fwd");
       $("#texte2_tryphaena_s3").removeClass("slide-in-elliptic-left-fwd");
      $("#texte3_tryphaena_s3").removeClass("slide-in-elliptic-left-fwd");
    }

  }

});