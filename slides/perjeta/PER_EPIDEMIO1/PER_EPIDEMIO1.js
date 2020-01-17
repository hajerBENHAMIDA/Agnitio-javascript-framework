app.register("PER_EPIDEMIO1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#cercle_perjeta_s1").hide();
      $("#trait_perjeta_s1").hide();
      $("#texte_dans_cercle").hide();
      $("#trait_vert_perjeta_s1").hide(); 
    
    },
    onRemove: function(el) {

    },
    onEnter: function(el) {
      
      $("#texte_dans_cercle").removeClass("texte_dans_cercle_anim");
      $("#cercle_perjeta_s1").show();
      $("#cercle_perjeta_s1").addClass("cercle_perjeta_s1_anim");
      // document.getElementById('cercle_sound').play();

      $("#trait_perjeta_s1").show();
      $("#trait_perjeta_s1").addClass("trait_perjeta_s1_anim");

      setTimeout(function(){

        $("#texte_dans_cercle").show();
        $("#texte_dans_cercle").addClass("texte_dans_cercle_anim");
      },800);

      $("#trait_vert_perjeta_s1").show();
      $("#trait_vert_perjeta_s1").addClass("trait_vert_perjeta_s1_anim");
    },
    onExit: function(el) {
      $("#cercle_perjeta_s1").hide();
      $("#cercle_perjeta_s1").removeClass("cercle_perjeta_s1_anim");

      $("#trait_perjeta_s1").hide();
      $("#trait_perjeta_s1").removeClass("trait_perjeta_s1_anim");

      $("#texte_dans_cercle").hide();
      $("#texte_dans_cercle").removeClass("texte_dans_cercle_anim");

      $("#trait_vert_perjeta_s1").hide();
      $("#trait_vert_perjeta_s1").removeClass("trait_vert_perjeta_s1_anim");
    }
  }

});