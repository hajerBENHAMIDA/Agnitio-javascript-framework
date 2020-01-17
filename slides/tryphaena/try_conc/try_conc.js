app.register("try_conc", function() {

  return {
    events: {
      "tap #titre_tryphaena_s7": "press",

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    },
    press:function(event){
      var overlay = app.view.get('overlay-demo');
      if (overlay) {
        overlay.load('conc_popup1');
        }
    }
  }

});