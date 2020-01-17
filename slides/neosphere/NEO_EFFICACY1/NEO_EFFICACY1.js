app.register("NEO_EFFICACY1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $(".fill").each(function(){
          $(this).css("opacity","0");
      });
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {


    graphAnimation("#neo-eff1-bloc1");
    graphAnimation("#neo-eff1-bloc2");
    graphAnimation("#neo-eff1-bloc3");
    graphAnimation("#neo-eff1-bloc4");
    },
    onExit: function(el) {
      $(".fill").each(function(){
        $(this).css("opacity","0");
    });
    },

  }

});