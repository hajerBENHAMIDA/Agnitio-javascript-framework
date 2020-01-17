app.register("try_safety2", function() {

  return {
    events: {


    },
    states: [],
    onRender: function(el) {
        $("#lignecourbe_safety2_s6").css("opacity","0");
        $("#courbe_safety2_s6").css("opacity","0");

    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

      setTimeout(() => $("#line_1").addClass("animation_courbe_o").css("opacity","1") ,0 );
      setTimeout(() => $("#line_2").addClass("animation_courbe_o").css("opacity","1") ,1000 );
      setTimeout(() => $("#line_3").addClass("animation_courbe_o").css("opacity","1") ,2000 );


      $("#lignecourbe_safety2_s6").css("opacity","1");
      $("#courbe_safety2_s6").css("opacity","1");
        graphAnimation("#lignecourbe_safety2_s6");
    },
    onExit: function(el) {
      
      $("#line_1").removeClass("animation_courbe_o");
      $("#line_2").removeClass("animation_courbe_o");
      $("#line_3").removeClass("animation_courbe_o");

      $("#lignecourbe_safety2_s6").css("opacity","0");
      $("#courbe_safety2_s6").css("opacity","0");
    },

  }

});