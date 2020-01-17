app.register("APH_CONC1", function() {
var timer_aph ;
  return {
    events: {

    },
    states: [],
    onRender: function(el) {

    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
        var sound = document.getElementById('star_sound') ;
        sound.volume=0.2;
        sound.load();
        sound.play();
        setTimeout(function()
        {
          $("#star").addClass("jello-vertical");

          setTimeout(function(){        

            $("#star").removeClass("jello-vertical");
            setTimeout(() => {
              $("#star").addClass("jello-vertical");
            }, 70);            
          },300); 
        },450)



        $("#star").bind("doubleTap",function(){
      
          sound.load();
          var x = $(this) ;
          x.removeClass("jello-vertical");
          timer_aph = setTimeout(function(){
          sound.play();  
          x.addClass("jello-vertical");
        
          },100); 
          setTimeout(() => {
            $("#star").removeClass("jello-vertical");
            setTimeout(() => {
              $("#star").addClass("jello-vertical");
            }, 170);

          }, 300);
                    
 
  
          

        });

    },
    onExit: function(el) {
      if(timer_aph)
      clearTimeout(timer_aph);
      $("#star").removeClass("jello-vertical");


    }
  }

});

