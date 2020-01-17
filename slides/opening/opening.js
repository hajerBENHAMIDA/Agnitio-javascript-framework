app.register("opening", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#forme_verte").css("opacity","0");
      $("#forme_blue").css("opacity","0");
      $("#perjeta_nom").css("opacity","0");
      $("#demi_cercle_1").css("opacity","0");
      $("#demi_cercle_2").css("opacity","0");
      $("#lamette_1").css("opacity","0");
      $("#lamette_2").css("opacity","0");
      $("#ref_op").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#forme_verte").css("opacity","1");
      $("#forme_verte").addClass("forme_verte_annim");

      $("#forme_blue").css("opacity","1");
      $("#forme_blue").addClass("forme_blue_annim");

      $("#perjeta_nom").css("opacity","1");
      $("#perjeta_nom").addClass("perjeta_nom_annim");

      $("#demi_cercle_1").css("opacity","1");
      $("#demi_cercle_1").addClass("demi_cercle_1_annim");

      $("#demi_cercle_2").css("opacity","1");
      $("#demi_cercle_2").addClass("demi_cercle_2_annim");
      
      $("#lamette_1").css("opacity","1");
      $("#lamette_1").addClass("lamette_1_annim");

      $("#lamette_2").css("opacity","1");
      $("#lamette_2").addClass("lamette_2_annim");

      $("#ref_op").css("opacity","1");
      $("#ref_op").addClass("ref_op_anim");

    },
    onExit: function(el) {
      $("#forme_verte").css("opacity","0");
      $("#forme_verte").removeClass("forme_verte_annim");

      $("#forme_blue").css("opacity","0");
      $("#forme_blue").removeClass("forme_blue_annim");

      $("#perjeta_nom").css("opacity","0");
      $("#perjeta_nom").removeClass("perjeta_nom_annim");

      $("#demi_cercle_1").css("opacity","0");
      $("#demi_cercle_1").removeClass("demi_cercle_1_annim");

      $("#demi_cercle_2").css("opacity","0");
      $("#demi_cercle_2").removeClass("demi_cercle_2_annim");

      $("#lamette_1").css("opacity","0");
      $("#lamette_1").removeClass("lamette_1_annim");

      $("#lamette_2").css("opacity","0");
      $("#lamette_2").removeClass("lamette_2_annim");

      $("#ref_op").css("opacity","0");
      $("#ref_op").addClass("ref_op_anim");

    }
  }

});