app.register("PER_EPIDEMIO4", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#courbe_perjeta_s5").css("opacity","0");
      $("#numero_courbe_perjeta_s5").css("opacity","0");
      $("#fleche1_courbe_perjeta_s5").css("opacity","0");
      $("#fleche2_courbe_perjeta_s5").css("opacity","0");

       
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {


      $("#courbe_perjeta_s5").css("opacity","1");
      graphAnimation("#ligne_courbe_perjeta_s5");


      $("#numero_courbe_perjeta_s5").css("opacity","1").addClass("numero_courbe_perjeta_s5_anim");

      $("#fleche1_courbe_perjeta_s5").css("opacity","1").addClass("fleche1_courbe_perjeta_s5_anim");

      $("#fleche2_courbe_perjeta_s5").css("opacity","1").addClass("fleche2_courbe_perjeta_s5_anim");

    },
    onExit: function(el) {
      $("#courbe_perjeta_s5").css("opacity","0");
      $("#numero_courbe_perjeta_s5").css("opacity","0").removeClass("numero_courbe_perjeta_s5_anim");

      $("#fleche1_courbe_perjeta_s5").css("opacity","0").removeClass("fleche1_courbe_perjeta_s5_anim");

      $("#fleche2_courbe_perjeta_s5").css("opacity","0").removeClass("fleche2_courbe_perjeta_s5_anim");
    },

  }

});