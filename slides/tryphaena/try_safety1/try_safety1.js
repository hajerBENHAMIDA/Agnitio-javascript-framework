app.register("try_safety1", function() {
var try_saf1_timer = [];
  return {
    events: {


    },
    states: [],
    onRender: function(el) {
      $( ".one-two-three" ).each(function(){
        $(this).hide();
      });
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

      $( ".one-two-three" ).each(function(index) {
        var x = $(this) ;
        try_saf1_timer.push(        
          setTimeout(function(){
          x.show();
          x.addClass("fade-in-top");
        },index * 500));
    
      });

    },
    onExit: function(el) {
      for(var i=0; i < try_saf1_timer.length;i++) {
        clearTimeout(try_saf1_timer[i]);
      }
      for(var i=0; i < try_saf1_timer.length;i++) {
        try_saf1_timer.shift();
      }
      $( ".one-two-three" ).each(function(){
        $(this).hide();
      });
    },

  }

});