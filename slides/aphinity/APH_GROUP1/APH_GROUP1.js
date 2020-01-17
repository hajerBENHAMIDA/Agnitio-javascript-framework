app.register("APH_GROUP1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#aph-gr1-graph-courbe").css("opacity","0");
      $("#aph-gr1-graph-bloc").css("opacity","0");
      $("#aph-gr1-axe").css("opacity","0");
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      graphAnimation("#aph-gr1-graph-courbe");
      $("#aph-gr1-axe").css("opacity","1");
      $("#aph-gr1-graph-bloc").css("opacity","1").addClass("bounce-in-fwd");
    },
    onExit: function(el) {
      $("#aph-gr1-axe").css("opacity","0");
      $("#aph-gr1-graph-courbe").css("opacity","0");
      $("#aph-gr1-graph-bloc").css("opacity","0").removeClass("bounce-in-fwd");

    }
  }

});