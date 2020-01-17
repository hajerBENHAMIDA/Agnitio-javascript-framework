app.register("NEO_EFFICACY3", function() {

  return {
    events: {


    },
    states: [],
    onRender: function(el) {
      $("#neo-eff3-axe").css("opacity","0");
      $("#neo-eff3-bloc").css("opacity","0");
     
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#neo-eff3-bloc").css("opacity","1");
      graphAnimation("#neo-eff3-axe");
    },
    onExit: function(el) {
      $("#neo-eff3-bloc").css("opacity","0");
      $("#neo-eff3-axe").css("opacity","0");
    },

  }

});