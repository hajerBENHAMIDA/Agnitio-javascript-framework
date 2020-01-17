app.register("PER_CONC1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#colclusion_perjeta_s13").hide();
      $("#ref_perjeta_s13").hide();
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#colclusion_perjeta_s13").show();
      $("#colclusion_perjeta_s13").addClass("colclusion_perjeta_s13_anim");

      $("#ref_perjeta_s13").show();
      $("#ref_perjeta_s13").addClass("ref_perjeta_s13_anim");
    },
    onExit: function(el) {
      $("#colclusion_perjeta_s13").hide();
      $("#colclusion_perjeta_s13").removeClass("colclusion_perjeta_s13_anim");

      $("#ref_perjeta_s13").hide();
      $("#ref_perjeta_s13").removeClass("ref_perjeta_s13_anim");
    }
  }

});