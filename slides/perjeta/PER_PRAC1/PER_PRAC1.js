app.register("PER_PRAC1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
     $("#icones_bloc1_schema_perjeta_s9").css("opacity","0");
      $("#icones_bloc2_schema_perjeta_s9").css("opacity","0");
     $("#icones_bloc3_schema_perjeta_s9").css("opacity","0");
      $("#soustitre1_bloc").css("opacity","0");
      $("#soustitre2_bloc").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
     graphAnimation("#icones_bloc1_schema_perjeta_s9",2);
     graphAnimation("#icones_bloc2_schema_perjeta_s9",2.5);
     graphAnimation("#icones_bloc3_schema_perjeta_s9",3);

      $("#soustitre1_bloc").css("opacity","1");
      $("#soustitre1_bloc").addClass("soustitre1_bloc_anim");

      $("#soustitre2_bloc").css("opacity","1");
      $("#soustitre2_bloc").addClass("soustitre2_bloc_anim");
    },
    onExit: function(el) {
     $("#icones_bloc1_schema_perjeta_s9").css("opacity","0");
      $("#icones_bloc2_schema_perjeta_s9").css("opacity","0");
     $("#icones_bloc3_schema_perjeta_s9").css("opacity","0");


      $("#soustitre1_bloc").css("opacity","0");
      $("#soustitre1_bloc").removeClass("soustitre1_bloc_anim");

      $("#soustitre2_bloc").css("opacity","0");
      $("#soustitre2_bloc").removeClass("soustitre2_bloc_anim");
    },
    
  }

});