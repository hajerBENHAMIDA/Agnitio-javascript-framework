app.register("APH_QOL1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#aph-QOL-courbe").css("opacity","0");
      $("#aph-QOL-graph").css("opacity","0");
      
  
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#aph-QOL-graph").css("opacity","1");
      graphAnimation("#aph-QOL-courbe");
     
    },
    onExit: function(el) {
      $("#aph-QOL-graph").css("opacity","0");
      $("#aph-QOL-courbe").css("opacity","0");
     
    }
  }

});