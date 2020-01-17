app.register("try_efficacy2", function() {
var try_eff1_timer;
  return {
    events: {
      // "tap #courbe_tryphaena_s4": "press",

    },
    states: [],
    onRender: function(el) {
      $("#bloc_vert").css("opacity",0);
      $("#bloc_orange").css("opacity",0);
      $("#bloc_gris").css("opacity",0);

      $("#texte_vert").css("opacity",0);
      $("#texte_orange").css("opacity",0);
      $("#texte_gris").css("opacity",0);


      $("#texte_vert").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_orange").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris").removeClass("slide-in-elliptic-bottom-fwd");
   
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      graphAnimation("#bloc_vert",2,"top");
      graphAnimation("#bloc_orange",2,"top");
      graphAnimation("#bloc_gris",2,"top");
      try_eff2_timer= setTimeout(function(){
        $("#texte_vert").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_orange").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_gris").addClass("slide-in-elliptic-bottom-fwd");
      }
      , 1500) ;
    },
    onExit: function(el) {
      if(try_eff2_timer){
        clearTimeout(try_eff2_timer);
      }
      $("#bloc_vert").css("opacity",0);
      $("#bloc_orange").css("opacity",0);
      $("#bloc_gris").css("opacity",0);

      $("#texte_vert").css("opacity",0);
      $("#texte_orange").css("opacity",0);
      $("#texte_gris").css("opacity",0);

      $("#texte_vert").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_orange").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris").removeClass("slide-in-elliptic-bottom-fwd");
   
    }
 }

});