app.register("posologie_neo_efficacite1", function() {

   return {
     events: {

    },
    states: [],
   onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
   onEnter: function(el) {

   },
    onExit: function(el) {

    }
 }

});

 function suivant(){
  // document.getElementById('posologie1').style.display="none";
  //  document.getElementById('posologie2').style.display="block";
   document.getElementById('posologie1').style.transform="translateX(-150%)";
   document.getElementById('posologie1').style.transitionDuration = "1s";
   document.getElementById('posologie2').style.visibility="visible";
   document.getElementById('posologie2').style.transitionDelays= "ease-in";
   document.getElementById('posologie2').style.transform="translateX(0%)";
   document.getElementById('posologie2').style.transitionDuration = "1s";

 }
 function precedent(){
  //  document.getElementById('posologie2').style.display="none";
  //  document.getElementById('posologie1').style.display="block";

   document.getElementById('posologie2').style.transform="translateX(150%)";
   document.getElementById('posologie2').style.transitionDuration = "1s";
   document.getElementById('posologie1').style.visibility="visible";

   document.getElementById('posologie1').style.transform="translateX(0%)";
   document.getElementById('posologie1').style.transitionDuration = "1s";

}