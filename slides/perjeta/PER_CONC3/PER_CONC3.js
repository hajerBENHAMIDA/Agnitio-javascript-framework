app.register("PER_CONC3", function() {

  return {
    events: {
 
    },
    states: [],
    onRender: function(el) {
      $("#sousbloc1_perjeta_s14").css("opacity","0");
      $("#sousbloc2_perjeta_s14").css("opacity","0");

      $("#ligne_perjeta_s14").hide();
      $("#cycles_perjeta_s14").hide();
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
$
      graphAnimation("#sousbloc1_perjeta_s14",2,"left","graph-layer-bg");
      graphAnimation("#sousbloc2_perjeta_s14",2,"left","graph-layer-bg");

      $("#ligne_perjeta_s14").show();
      $("#ligne_perjeta_s14").addClass("ligne_perjeta_s14_anim");

      $("#cycles_perjeta_s14").show();
      $("#cycles_perjeta_s14").addClass("cycles_perjeta_s14_anim");

    },
    onExit: function(el) {
      $("#sousbloc1_perjeta_s14").css("opacity","0");
      $("#sousbloc2_perjeta_s14").css("opacity","0");

      $("#ligne_perjeta_s14").hide();
      $("#ligne_perjeta_s14").removeClass("ligne_perjeta_s14_anim");

      $("#cycles_perjeta_s14").hide();
      $("#cycles_perjeta_s14").removeClass("cycles_perjeta_s14_anim");
    }
  }

});