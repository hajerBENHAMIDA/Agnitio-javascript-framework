app.register("APH_GROUP4", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#aph-gr4-courbe").css("opacity","0");
      $("#aph-gr4-graph").css("opacity","0");
      
  
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#aph-gr4-graph").css("opacity","1");
      graphAnimation("#aph-gr4-courbe");
     
    },
    onExit: function(el) {
      $("#aph-gr4-graph").css("opacity","0");
      $("#aph-gr4-courbe").css("opacity","0");
     
    }
  }

});