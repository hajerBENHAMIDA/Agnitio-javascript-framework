app.register("APH_GROUP3", function() {
var aph_gr3_time;
  return {
    events: {

    },
    states: [],
    onRender: function(el) {
        $("#aph-gr3-arrow1").css("opacity","0");
        $("#aph-gr3-arrow2").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      document.getElementById('arrow_sound').volume=1;
      document.getElementById('arrow_sound').play();

      $("#aph-gr3-arrow2").css("opacity","1").addClass("slide-in-blurred-tr");
      aph_gr3_time= setTimeout(function(){

        $("#aph-gr3-arrow1").css("opacity","1").addClass("slide-in-blurred-top ");

      },50);

    },
    onExit: function(el) {
      if(aph_gr3_time) {
        clearTimeout(aph_gr3_time);
        aph_gr3_time = 0 ;
      }
      $("#aph-gr3-arrow1").css("opacity","0").removeClass("slide-in-blurred-top");
      $("#aph-gr3-arrow2").css("opacity","0").removeClass("slide-in-blurred-tr");

    }
  }

});