app.register("APH_GROUP2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#aph-gr2-graph-courbe").css("opacity","0");
      $("#aph-gr2-graph-bloc").css("opacity","0");
      $("#aph-gr2-axe").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#aph-gr2-axe").css("opacity","1");
      graphAnimation("#aph-gr2-graph-courbe");
      $("#aph-gr2-graph-bloc").css("opacity","1").addClass("bounce-in-fwd");
    },
    onExit: function(el) {
      $("#aph-gr2-axe").css("opacity","0");
      $("#aph-gr2-graph-courbe").css("opacity","0");
      $("#aph-gr2-graph-bloc").css("opacity","0").removeClass("bounce-in-fwd");
    }
  }

});