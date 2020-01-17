app.register("PER_CLINICAL2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
        $("#bloc_perjeta_s9").css("opacity",0);
        $("#courbe_perjeta_s9").css("opacity",0);
        
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#courbe_perjeta_s9").css("opacity","1");
      graphAnimation("#bloc_perjeta_s9",1.5,"top");
      
        
    },
    onExit: function(el) {
      $("#courbe_perjeta_s9").css("opacity",0);
      
    },

  }

});