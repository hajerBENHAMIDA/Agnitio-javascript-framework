app.register("Home-4-RUB", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      // tryphaena
      $("#cercle_tryphaena").hide();
      $("#petale1_tryphaena").hide();
      $("#petale2_tryphaena").hide();
      $("#petale3_tryphaena").hide();
      $("#point_tryphaena").hide();

      // perjeta
      $("#petale1_perjeta").hide();
      $("#petale2_perjeta").hide();
      $("#cercle_perjeta").hide();
      $("#point_perjeta").hide();

      // neosphere
      $("#point_neosphere").hide();
      $("#cercle_neosphere").hide();
      $("#petale1_neosphere").hide();
      $("#petale2_neosphere").hide();
      $("#petale3_neosphere").hide();
      // aphinity

      $("#petale1_aphinity").hide();
      $("#cercle_aphinity").hide();
      $("#petale2_aphinity").hide();
      $("#petale3_aphinity").hide();
      $("#point_aphinity").hide();
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      // tryphaena
      $("#cercle_tryphaena").show();
      $("#cercle_tryphaena").addClass("cercle_tryphaena_annim");

      $("#petale1_tryphaena").show();
      $("#petale1_tryphaena").addClass("petale1_tryphaena_annim");

      $("#petale2_tryphaena").show();
      $("#petale2_tryphaena").addClass("petale2_tryphaena_annim");

      $("#petale3_tryphaena").show();
      $("#petale3_tryphaena").addClass("petale3_tryphaena_annim");

      $("#point_tryphaena").show();
      $("#point_tryphaena").addClass("point_tryphaena_annim");


      // perjeta
      $("#petale1_perjeta").show();
      $("#petale1_perjeta").addClass("petale1_perjeta_annim");

      $("#petale2_perjeta").show();
      $("#petale2_perjeta").addClass("petale2_perjeta_annim");

      $("#cercle_perjeta").show();
      $("#cercle_perjeta").addClass("cercle_perjeta_annim");

      $("#point_perjeta").show();
      $("#point_perjeta").addClass("point_perjeta_annim");


      // neosphere
      $("#point_neosphere").show();
      $("#point_neosphere").addClass("point_neosphere_annim");

      $("#cercle_neosphere").show();
      $("#cercle_neosphere").addClass("cercle_neosphere_annim");

      $("#petale1_neosphere").show();
      $("#petale1_neosphere").addClass("petale1_neosphere_annim");

      $("#petale2_neosphere").show();
      $("#petale2_neosphere").addClass("petale2_neosphere_annim");

      $("#petale3_neosphere").show();
      $("#petale3_neosphere").addClass("petale3_neosphere_annim");

      // aphinity
      $("#petale1_aphinity").show();
      $("#petale1_aphinity").addClass("petale1_aphinity_annim");

      $("#cercle_aphinity").show();
      $("#cercle_aphinity").addClass("cercle_aphinity_annim");

      $("#petale2_aphinity").show();
      $("#petale2_aphinity").addClass("petale2_aphinity_annim");

      $("#petale3_aphinity").show();
      $("#petale3_aphinity").addClass("petale3_aphinity_annim");

      $("#point_aphinity").show();
      $("#point_aphinity").addClass("point_aphinity_annim");


    },
    onExit: function(el) {
            // tryphaena
            $("#cercle_tryphaena").hide();
            $("#cercle_tryphaena").removeClass("point_tryphaena_annim");
      
            $("#petale1_tryphaena").hide();
            $("#petale1_tryphaena").removeClass("petale1_tryphaena_annim");
      
            $("#petale2_tryphaena").hide();
            $("#petale2_tryphaena").removeClass("petale2_tryphaena_annim");
      
            $("#petale3_tryphaena").hide();
            $("#petale3_tryphaena").removeClass("petale3_tryphaena_annim");
      
            $("#point_tryphaena").hide();
            $("#point_tryphaena").removeClass("point_tryphaena_annim");
      
      
            // perjeta
            $("#petale1_perjeta").hide();
            $("#petale1_perjeta").removeClass("petale1_perjeta_annim");
      
            $("#petale2_perjeta").hide();
            $("#petale2_perjeta").removeClass("petale2_perjeta_annim");
      
            $("#cercle_perjeta").hide();
            $("#cercle_perjeta").removeClass("cercle_perjeta_annim");
      
            $("#point_perjeta").hide();
            $("#point_perjeta").removeClass("point_perjeta_annim");
      
      
            // neosphere
            $("#point_neosphere").hide();
            $("#point_neosphere").removeClass("point_neosphere_annim");
      
            $("#cercle_neosphere").hide();
            $("#cercle_neosphere").removeClass("cercle_neosphere_annim");
      
            $("#petale1_neosphere").hide();
            $("#petale1_neosphere").removeClass("petale1_neosphere_annim");
      
            $("#petale2_neosphere").hide();
            $("#petale2_neosphere").removeClass("petale2_neosphere_annim");
      
            $("#petale3_neosphere").hide();
            $("#petale3_neosphere").removeClass("petale3_neosphere_annim");
      
            // aphinity
            $("#petale1_aphinity").hide();
            $("#petale1_aphinity").removeClass("petale1_aphinity_annim");
      
            $("#cercle_aphinity").hide();
            $("#cercle_aphinity").removeClass("cercle_aphinity_annim");
      
            $("#petale2_aphinity").hide();
            $("#petale2_aphinity").removeClass("petale2_aphinity_annim");
      
            $("#petale3_aphinity").hide();
            $("#petale3_aphinity").removeClass("petale3_aphinity_annim");
      
            $("#point_aphinity").hide();
            $("#point_aphinity").removeClass("point_aphinity_annim");
      
    }
  }

});