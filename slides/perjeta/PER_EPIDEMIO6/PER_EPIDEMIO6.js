app.register("PER_EPIDEMIO6", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#sous_bloc1_perjeta_s6").css("opacity","0");
      $("#sous_bloc2_perjeta_s6").css("opacity","0");
      $("#sous_bloc3_perjeta_s6").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#sous_bloc1_perjeta_s6").css("opacity","1");
      $("#sous_bloc1_perjeta_s6").addClass("sous_bloc1_perjeta_s6_anim");

      $("#sous_bloc2_perjeta_s6").css("opacity","1");
      $("#sous_bloc2_perjeta_s6").addClass("sous_bloc2_perjeta_s6_anim");

      $("#sous_bloc3_perjeta_s6").css("opacity","1");
      $("#sous_bloc3_perjeta_s6").addClass("sous_bloc3_perjeta_s6_anim");
    },
    onExit: function(el) {
      $("#sous_bloc1_perjeta_s6").css("opacity","0");
      $("#sous_bloc1_perjeta_s6").removeClass("sous_bloc1_perjeta_s6_anim");

      $("#sous_bloc2_perjeta_s6").css("opacity","0");
      $("#sous_bloc2_perjeta_s6").removeClass("sous_bloc2_perjeta_s6_anim");

      $("#sous_bloc3_perjeta_s6").css("opacity","0");
      $("#sous_bloc3_perjeta_s6").removeClass("sous_bloc3_perjeta_s6_anim");
    }
  }

});