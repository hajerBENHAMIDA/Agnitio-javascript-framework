app.register("PER_EPIDEMIO3", function() {

  return {
    events: {


    },
    states: [],
    onRender: function(el) {
      $("#courbe_perjeta_s3").hide();
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#courbe_perjeta_s3").show();
      graphAnimation("#ligne_courbe_perjeta_s3");
    },
    onExit: function(el) {
      $("#courbe_perjeta_s3").hide();
    },

  }

});