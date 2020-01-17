var aph_time1,aph_time2,aph_time3,aph_time4,aph_time5,aph_time6,aph_time7,aph_time8,aph_time9,aph_time10,aph_time11;

app.register("conc_popup1", function() {

 return {
     events: {

    },
     states: [],
     onRender: function(el) {
      $("#cadre1_schema_partie1_conc_popup1").hide();
      $("#tires_schema_partie1_conc_popup1").hide();
      $("#cadres_schema_partie1_conc_popup1").hide();
      $("#fleche_schema_partie1_conc_popup1").hide(); 


      $("#diag_conc_popup4").hide();
      $("#texte1_conc_popup4").hide();
      $("#fleche2_conc_popup4").hide();
      $("#cycle1_conc_popup4").hide(); 
      $("#medecin_conc_popup4").hide();
      $("#cycle2_conc_popup4").hide(); 
    
      $("#texte2_conc_popup4").hide();
      $("#texte3_conc_popup4").hide();
    },
    onRemove: function(el) {
        
     },
    onEnter: function(el) {
      $("#cadre1_schema_partie1_conc_popup1").show();
      $("#cadre1_schema_partie1_conc_popup1").addClass("fade-in-left");

      aph_time1 = setTimeout(function(){
      $("#tires_schema_partie1_conc_popup1").show();
      $("#tires_schema_partie1_conc_popup1").addClass("fade-in-left");
      },500);

      aph_time2 = setTimeout(function(){
      $("#cadres_schema_partie1_conc_popup1").show();
      $("#cadres_schema_partie1_conc_popup1").addClass("fade-in-left");
      },1200);

      aph_time3 = setTimeout(function(){
      $("#fleche_schema_partie1_conc_popup1").show();
      $("#fleche_schema_partie1_conc_popup1").addClass("fade-in-left");
      },1300);
      $("#button2_conc_popup1").addClass("i_am_here_anim");
     },



    onExit: function(el) {
      if (aph_time3) {
        clearTimeout(aph_time3);
        aph_time3 = 0;
      }

        if (aph_time2) {
          clearTimeout(aph_time2);
          aph_time2 = 0;

        }

        if (aph_time1) {
          clearTimeout(aph_time1);
          aph_time1 = 0;
        }
      $("#cadre1_schema_partie1_conc_popup1").hide();
      $("#cadre1_schema_partie1_conc_popup1").removeClass("fade-in-left");

      $("#tires_schema_partie1_conc_popup1").hide();
      $("#tires_schema_partie1_conc_popup1").removeClass("fade-in-left");

      $("#cadres_schema_partie1_conc_popup1").hide();
      $("#cadres_schema_partie1_conc_popup1").removeClass("fade-in-left");

      $("#fleche_schema_partie1_conc_popup1").hide();
      $("#fleche_schema_partie1_conc_popup1").removeClass("fade-in-left");
    
    
      /**************popup4*****************/ 
      $("#diag_conc_popup4").hide();
      $("#diag_conc_popup4").removeClass("fade-in-left");

      $("#texte1_conc_popup4").hide();
      $("#texte1_conc_popup4").removeClass("fade-in-left");

      $("#fleche2_conc_popup4").hide();
      $("#fleche2_conc_popup4").removeClass("fade-in-left");

      $("#cycle1_conc_popup4").hide();
      $("#cycle1_conc_popup4").removeClass("fade-in-left");

      $("#medecin_conc_popup4").hide();
      $("#medecin_conc_popup4").removeClass("fade-in-left");

      $("#cycle2_conc_popup4").hide();
      $("#cycle2_conc_popup4").removeClass("fade-in-left");

      $("#texte2_conc_popup4").hide();
      $("#texte2_conc_popup4").removeClass("fade-in-left");

      $("#texte3_conc_popup4").hide();
      $("#texte3_conc_popup4").removeClass("fade-in-left");
    }
 }

 });


function suiv1(){
  console.log (popup2_conclusion);


  document.getElementById('popup1_conclusion').style.transform="translateX(-150%)";
  document.getElementById('popup1_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup1_conclusion').style.overflow = "hidden";
  

  document.getElementById('popup2_conclusion').style.visibility="visible";
  document.getElementById('popup2_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup2_conclusion').style.transitionDuration = "1s";
  $("#cadre1_schema_partie1_conc_popup1").hide();
  $("#cadre1_schema_partie1_conc_popup1").removeClass("cadre1_schema_partie1_conc_popup1_anim");

  $("#tires_schema_partie1_conc_popup1").hide();
  $("#tires_schema_partie1_conc_popup1").removeClass("tires_schema_partie1_conc_popup1_anim");

  $("#cadres_schema_partie1_conc_popup1").hide();
  $("#cadres_schema_partie1_conc_popup1").removeClass("cadres_schema_partie1_conc_popup1_anim");

  $("#fleche_schema_partie1_conc_popup1").hide();
  $("#fleche_schema_partie1_conc_popup1").removeClass("fleche_schema_partie1_conc_popup1_anim");
  if (aph_time3) {
    clearTimeout(aph_time3);
    aph_time3 = 0;
  }

    if (aph_time2) {
      clearTimeout(aph_time2);
      aph_time2 = 0;

    }

    if (aph_time1) {
      clearTimeout(aph_time1);
      aph_time1 = 0;

    }

  

}
function suiv2(){
 
  document.getElementById('popup2_conclusion').style.transform="translateX(-150%)";
  document.getElementById('popup2_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup3_conclusion').style.visibility="visible";
  document.getElementById('popup3_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup3_conclusion').style.transitionDuration = "1s";


}
function suiv3(){

 var x = 500 ;
  document.getElementById('popup3_conclusion').style.transform="translateX(-150%)";
  document.getElementById('popup3_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup4_conclusion').style.visibility="visible";
  document.getElementById('popup4_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup4_conclusion').style.transitionDuration = "1s";

      /**************popup4*****************/ 

      aph_time4 = setTimeout(function(){
      $("#diag_conc_popup4").show();
      $("#diag_conc_popup4").addClass("fade-in-left");
      },500);

      aph_time5 = setTimeout(function(){

      $("#texte1_conc_popup4").show();
      $("#texte1_conc_popup4").addClass("fade-in-left");
      },x= x +200);

      aph_time6 = setTimeout(function(){

      $("#fleche2_conc_popup4").show();
      $("#fleche2_conc_popup4").addClass("fade-in-left");
      },x= x +200);

      aph_time7 = setTimeout(function(){

      $("#cycle1_conc_popup4").show();
      $("#cycle1_conc_popup4").addClass("fade-in-left");
      },x= x +200);
      aph_time8 = setTimeout(function(){

      $("#medecin_conc_popup4").show();
      $("#medecin_conc_popup4").addClass("fade-in-left");
      },x= x +200);

      aph_time9 = setTimeout(function(){

      $("#cycle2_conc_popup4").show();
      $("#cycle2_conc_popup4").addClass("fade-in-left");
      },x= x +200);
      aph_time10 = setTimeout(function(){

        $("#texte2_conc_popup4").show();
        $("#texte2_conc_popup4").addClass("fade-in-left");
        },x= x +200)
      aph_time11 = setTimeout(function(){

      $("#texte3_conc_popup4").show();
      $("#texte3_conc_popup4").addClass("fade-in-left");
      },x= x +200);


}


function prec1(){


  document.getElementById('popup2_conclusion').style.transform="translateX(150%)";
  document.getElementById('popup2_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup2_conclusion').style.overflow = "hidden";

  document.getElementById('popup1_conclusion').style.visibility="visible";
  document.getElementById('popup1_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup1_conclusion').style.transitionDuration = "1s";

  /******Animation schema***** */
  $("#cadre1_schema_partie1_conc_popup1").show();
  $("#cadre1_schema_partie1_conc_popup1").addClass("fade-in-left");

  aph_time1 = setTimeout(function(){
  $("#tires_schema_partie1_conc_popup1").show();
  $("#tires_schema_partie1_conc_popup1").addClass("fade-in-left");
  },500);

  aph_time2 = setTimeout(function(){
  $("#cadres_schema_partie1_conc_popup1").show();
  $("#cadres_schema_partie1_conc_popup1").addClass("fade-in-left");
  },1200);

  aph_time3 = setTimeout(function(){
  $("#fleche_schema_partie1_conc_popup1").show();
  $("#fleche_schema_partie1_conc_popup1").addClass("fade-in-left");
  },1300);
  

}


function prec2(){
  document.getElementById('popup3_conclusion').style.transform="translateX(150%)";
  document.getElementById('popup3_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup2_conclusion').style.visibility="visible";
  document.getElementById('popup2_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup2_conclusion').style.transitionDuration = "1s";


}
function prec3(){

  document.getElementById('popup4_conclusion').style.transform="translateX(150%)";
  document.getElementById('popup4_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup3_conclusion').style.visibility="visible";
  document.getElementById('popup3_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup3_conclusion').style.transitionDuration = "1s";


        /**************popup4*****************/ 


        if (aph_time4) {
          clearTimeout(aph_time4);
        }
      
          if (aph_time5) {
            clearTimeout(aph_time5);
      
          }
      
          if (aph_time6) {
            clearTimeout(aph_time6);
          }
          if (aph_time7) {
            clearTimeout(aph_time7);
          }
      
            if (aph_time8) {
              clearTimeout(aph_time8);
      
            }
      
            if (aph_time9) {
              clearTimeout(aph_time9);
            }
            if (aph_time10) {
              clearTimeout(aph_time10);
            }
      
              if (aph_time11) {
                clearTimeout(aph_time11);
      
              }


        $("#diag_conc_popup4").hide();
        $("#diag_conc_popup4").removeClass("fade-in-left");
  
        $("#texte1_conc_popup4").hide();
        $("#texte1_conc_popup4").removeClass("fade-in-left");
  
        $("#fleche2_conc_popup4").hide();
        $("#fleche2_conc_popup4").removeClass("fade-in-left");
  
        $("#cycle1_conc_popup4").hide();
        $("#cycle1_conc_popup4").removeClass("fade-in-left");
  
        $("#medecin_conc_popup4").hide();
        $("#medecin_conc_popup4").removeClass("fade-in-left");
  
        $("#cycle2_conc_popup4").hide();
        $("#cycle2_conc_popup4").removeClass("fade-in-left");
  
        $("#texte2_conc_popup4").hide();
        $("#texte2_conc_popup4").removeClass("fade-in-left");
  
        $("#texte3_conc_popup4").hide();
        $("#texte3_conc_popup4").removeClass("fade-in-left");
      

}