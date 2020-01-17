app.register("PER_EPIDEMIO5", function() {
var x ;
  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#cerlce-3-s6").css("opacity","0");
      $("#cerlce-6-s6").css("opacity","0");

    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

      $("#cerlce-6-s6").css("opacity","1");
      $("#cerlce-3-s6").css("opacity","1");

      $("#cerlce-3-s6").addClass("cerlce-3-s6_anim");
      $("#cerlce-6-s6").addClass("cerlce-6-s6_anim");
      
      x=setInterval(function(){

        $("#cerlce-3-s6").removeClass("cerlce-3-s6_anim");
        $("#cerlce-6-s6").removeClass("cerlce-6-s6_anim");
 
        setTimeout(function(){
          $("#cerlce-3-s6").addClass("heartbeat");
          $("#cerlce-6-s6").addClass("heartbeat");
          
        },10)
      },3500);


    },
    onExit: function(el) {

     clearInterval(x);
      $("#cerlce-3-s6").css("opacity","0");
      $("#cerlce-3-s6").removeClass("cerlce-3-s6_anim");

      $("#cerlce-6-s6").css("opacity","0");
      $("#cerlce-6-s6").removeClass("cerlce-6-s6_anim");
    }
  }

});