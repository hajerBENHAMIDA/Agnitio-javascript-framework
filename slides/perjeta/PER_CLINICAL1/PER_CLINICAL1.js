app.register("PER_CLINICAL1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
        $("#courbe1_perjeta_s7").css("opacity","0");
        $("#courbe2_perjeta_s7").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#courbe1_perjeta_s7").css("opacity","1");
      $("#courbe2_perjeta_s7").css("opacity","1");
      graphAnimation("#ligne1-courbe1_perjeta_s7");
      graphAnimation("#ligne2-courbe2_perjeta_s7");

    },
    onExit: function(el) {
      $("#courbe1_perjeta_s7").css("opacity","0");
      $("#courbe2_perjeta_s7").css("opacity","0");
      
      
    },

  }

});