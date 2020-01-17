app.register("NEO_DESIGN1", function() {
var neo_des1_timer1;
var neo_des1_timer2;
var neo_des1_timer3;
var timer_des1 = [];
  return {
    events: {
      
    },
    states: [],
    onRender: function(el) {

      $("#neo-des1-elem1").css("opacity","0");
      $("#neo-des1-elem8").css("opacity","0");
     
      $(".neo-ligne-1").each(function(){
        $(this).css("opacity","0");
      });

      
      $(".neo-ligne-2").each(function(){
        $(this).css("opacity","0");
      });
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#neo-des1-elem1").css("opacity","1").addClass("fade-in-left");


      neo_des1_timer1 = setTimeout(function(){
        $(".neo-ligne-1").each(function(index){
          var x = $(this) ;
          timer_des1.push(
            setTimeout(function(){
              x.css("opacity","1").addClass("slide-in-elliptic-top-fwd");
             },400 * index ));
          
        });
      },1000);

      neo_des1_timer2 = setTimeout(function(){
        $("#neo-des1-elem8").css("opacity","1").addClass("fade-in-top");
      },400*8);


      neo_des1_timer3 = setTimeout(function(){
        $(".neo-ligne-2").each(function(index){
          var x = $(this) ;
          timer_des1.push(
            setTimeout(function(){
            x.css("opacity","1").addClass("slide-in-elliptic-top-fwd");
        
           },400 * index )) ;
        });

      },400 * 11);


    },
    onExit: function(el) {
      for(var i = 0 ; i < timer_des1.length ; i++ ){

        clearTimeout(timer_des1[i]);
      }

      for(var i = 0 ; i <  timer_des1.length ; i++ ){
        timer_des1.shift();
    }
    
      if(neo_des1_timer1) {
        clearTimeout(neo_des1_timer1);
      }
      
      if(neo_des1_timer2) {
        clearTimeout(neo_des1_timer2);
      }
      
      if(neo_des1_timer3) {
        clearTimeout(neo_des1_timer3);
        
      }



   
      $("#neo-des1-elem1").css("opacity","0").removeClass("fade-in-left");
      $("#neo-des1-elem8").css("opacity","0").removeClass("fade-in-top");
     
      $(".neo-ligne-1").each(function(){
        $(this).css("opacity","0").removeClass("slide-in-elliptic-top-fwd");
      });

      
      $(".neo-ligne-2").each(function(){
        $(this).css("opacity","0").removeClass("slide-in-elliptic-top-fwd");
      });
    },

  }

});