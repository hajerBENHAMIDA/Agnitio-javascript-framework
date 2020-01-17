app.register("NEO_EFFICACY2", function() {

  return {
    events: {


    },
    states: [],
    onRender: function(el) {
        $("#neo-eff2-axe").css("opacity","0");
        $("#neo-eff2-bloc").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#neo-eff2-bloc").css("opacity","1");
     graphAnimation("#neo-eff2-axe");
    },
    onExit: function(el) {
      $("#neo-eff2-axe").css("opacity","0");
      $("#neo-eff2-bloc").css("opacity","0");
    },

  }

});