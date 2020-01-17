app.register("APH_GROUP5", function() {
  var element = document.getElementById("item");
  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      // $("#aph-gr5-courbe").css("opacity","0");
      $("polyline").each(function(){
        $(this).css("opacity","0");
         this.classList.remove("path");
       }); 
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      // graphAnimation("#aph-gr5-courbe");
       
       $("polyline").each(function(){
        $("polyline").css("opacity","1");
         this.classList.add("path");
       });
    },
    onExit: function(el) {
      // $("#aph-gr5-courbe").css("opacity","0");
      $("polyline").each(function(){
        $(this).css("opacity","0");
         this.classList.remove("path");
       }); 
       
      }
  }

});