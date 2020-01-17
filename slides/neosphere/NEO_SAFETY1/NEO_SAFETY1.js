app.register("NEO_SAFETY1", function() {
var timeouts = [];
var timer_safety1 ;
  return {
    events: {
      
    },
    states: [],
    onRender: function(el) {
      $(" .neo-safety1-header > img").each(function(){
        $(this).css("opacity","0");
      });

      // $("#contenu__NEO_SAFETY1").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

      // $("#contenu__NEO_SAFETY1").css("opacity","1");
      // $("#contenu__NEO_SAFETY1").addClass("fade-in-bottom ");
      
      // $(".neo-safety1-header").each(function(index){
      //       var x = $(this) ;

      //       timeouts.push(setTimeout(function(){
      //         x.css("opacity","1");
      //         x.addClass("slide-in-fwd-center");
      //       }, index*400));

      //   });
  

        timer_safety1 = setTimeout(function(){
        $(".neo-safety1-header > img").each(function(index){
            var x = $(this) ;
            timeouts.push(setTimeout(function(){
              x.css("opacity","1");
              x.addClass("fade-in-top");
            }, index*300));
        });
      },0.2);
    },
    onExit: function(el) {
      if(timer_safety1) {
        clearTimeout(timer_safety1);
      }
      for (var i=0; i<timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
      
      for (var i=0; i<timeouts.length; i++) {
        timeouts.shift();
      }


      $(".neo-safety1-header > img").each(function(){
        $(this).css("opacity","0");
        $(this).removeClass("fade-in-top ");
        
      });
      // $("#contenu__NEO_SAFETY1").removeClass("fade-in-bottom");
      // $("#contenu__NEO_SAFETY1").css("opacity","0");

      
    },

  }

});