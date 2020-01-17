app.register("NEO_EFFICACY4", function() {
 var neo_eff_timer ;
  return {
    events: {
 

    },
    states: [],
    onRender: function(el) {
      $("#bloc_vert1").css("opacity",0);
      $("#bloc_gris1").css("opacity",0);
      $("#bloc_gris2").css("opacity",0);
      $("#bloc_gris3").css("opacity",0);


      $("#texte_vert1").css("opacity",0);
      $("#texte_gris1").css("opacity",0);
      $("#texte_gris2").css("opacity",0);
      $("#texte_gris3").css("opacity",0);
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      graphAnimation("#bloc_vert1",2,"top");
      graphAnimation("#bloc_gris1",2,"top");
      graphAnimation("#bloc_gris2",2,"top");
      graphAnimation("#bloc_gris3",2,"top");

      neo_eff_timer = setTimeout(function(){
        $("#texte_vert1").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_gris1").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_gris2").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_gris3").addClass("slide-in-elliptic-bottom-fwd");
      }
      , 1500) ;
    },
    onExit: function(el) {
      if(neo_eff_timer) {
        clearTimeout(neo_eff_timer);
        neo_eff_timer = 0 ;
      }

      $("#bloc_vert1").css("opacity",0);
      $("#bloc_gris1").css("opacity",0);
      $("#bloc_gris2").css("opacity",0);
      $("#bloc_gris3").css("opacity",0);


      $("#texte_vert1").css("opacity",0);
      $("#texte_gris1").css("opacity",0);
      $("#texte_gris2").css("opacity",0);
      $("#texte_gris3").css("opacity",0);

      $("#texte_vert1").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris1").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris2").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris3").removeClass("slide-in-elliptic-bottom-fwd");

    },

  }

});