app.register("APH_EFF1", function() {
var src ; 

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
     src =  $("#aph-eff1-arrow").attr("src");
     $("#aph-eff1-arrow").hide();

    },
    onRemove: function(el) {
      
    },
    onEnter: function(el) {
      document.getElementById('fleche_sound').play();
      document.getElementById('fleche_sound').volume=0.1;

      $("#aph-eff1-arrow").attr("src",src);
      $("#aph-eff1-arrow").show();


    },
    onExit: function(el) {
      $("#aph-eff1-arrow").hide();
      $("#aph-eff1-arrow").attr("src","");
    }
  }

});