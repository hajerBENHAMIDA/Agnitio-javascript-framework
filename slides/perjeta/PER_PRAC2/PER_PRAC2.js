app.register("PER_PRAC2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {

      $("#titre_tableau_perjeta_s11").css("opacity","0");
      $("#contenu_tableau_perjeta_s11").css("opacity","0");

    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#titre_tableau_perjeta_s11").css("opacity","1").addClass("fade-in-top");
      $("#contenu_tableau_perjeta_s11").css("opacity","1");


    },
    onExit: function(el) {


      $("#titre_tableau_perjeta_s11").css("opacity","0");
      $("#contenu_tableau_perjeta_s11").css("opacity","0");

      $("#titre_tableau_perjeta_s11").removeClass("fade-in-top");
    }
  }

});