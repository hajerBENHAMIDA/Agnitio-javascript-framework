app.register("aphinity_reco", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#button2_conc_popup1").addClass("i_am_here_anim");

    },
    onExit: function(el) {

    }
  }

});

function suivant_reco(){
  document.getElementById('reco1').style.transform="translateX(-150%)";
  document.getElementById('reco1').style.transitionDuration = "1s";

  document.getElementById('reco2').style.transform="translateX(0%)";
  document.getElementById('reco2').style.transitionDuration = "1s";
  document.getElementById('reco2').style.visibility="visible";

  $("#fleche2_reco").css("opacity","0");

  $("#fleche2_reco").css("opacity","1").addClass("fleche2_anim");

  $("#fleche1_reco").css("opacity","0");

  $("#fleche1_reco").css("opacity","1").addClass("fleche1_anim");


  $("#buttons_reco1").hide(); 
  $("#buttons_reco2").show(); 
}
function precedent_reco(){
  $("#fleche2_reco").css("opacity","0").removeClass("fleche2_anim");
  $("#fleche1_reco").css("opacity","0").removeClass("fleche1_anim");
  document.getElementById('reco2').style.transform="translateX(150%)";
  document.getElementById('reco2').style.transitionDuration = "1s";

  document.getElementById('reco1').style.transform="translateX(0%)";
  document.getElementById('reco1').style.transitionDuration = "1s";
  document.getElementById('reco1').style.visibility="visible";
  $("#buttons_reco2").hide(); 
  $("#buttons_reco1").show(); 

}