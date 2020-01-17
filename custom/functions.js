function popup(id,graph) {
    var overlay = app.view.get('overlay');
    var char = '<div id="'+id+'"><div class="ag-close-x ';
    if (graph) char += "graph";{
        char +='"></div></div>' ;

    }
    if (id=="popup_PER_EPIDEMIO3"){
        char +='<div id="legend_PER_EPIDEMIO3">Un traitement précoce augmente le taux de survie chez les femmes avec un cancer du sein<sup>11</sup></div>' ;
    }
    if (id=="posologie_NEO_DESIGN1"){
        char +='<div id="legend_posologie_NEO_DESIGN1">Les tumeurs doivent avoir un score immunohistochimique 3+ ou 2+ et positives aux tests d’hybridation in situ chromogénique ou en fluorescence. La randomisation a été stratifiée selon le type de cancer du sein (opérable, localement avancé ou inflammatoire) et le statut du récepteur des oestrogènes (ER) ou du récepteur des progestérones (PR) ([ER + et / ou PR +] vs [ER– et PR–]).</div>' ;
    }

    if (overlay) {
    overlay.open(char);
    }
}



function popup1(id,id2) {

    var overlay = app.view.get('overlay');
    $("overlay").removeClass(".x-overlay-pos");

    var char = `
                <div class="ag-container-hhh">
                <div class="`+id+`">
                    
                </div>
                <div class="`+id2+`"></div>
                </div>
                <div class="ag-close-x ag-close-x-rcp"></div>
                    ` 

    if (overlay) {
    overlay.open(char);
    }

    
}
function popup_ref(id) {

    var overlay = app.view.get('overlay');
    $("overlay").removeClass(".x-overlay-pos");

    var char = `
                <div class="ag-container-hhh">
                <div id="`+id+`"></div></div>
                <div class="ag-close-x ag-close-x-rcp"></div>
                    ` 

    if (overlay) {
    overlay.open(char);
    }

    
}


// animation graph 
function paramAnimation (direction){
    var move ;
    if(direction == "left" || direction == "bottom") {
        move = "+=99%";
    }else if (direction == "right" || direction == "top"){
       move = "-=99%";
    }
  
    var param = { left : move } ;
    if( direction == "bottom" || direction == "top") {
      param = { top : move } ;
    }
    return param ;
  }
  
  
  function graphAnimation(id, speed = 2, direction = "left" ,cssClass="graph-layer") {
    speed *= 1000 ;
    console.log($(id).parent());
    $(id).parent().addClass("fade-in-fwd");
    var diva = $("<div class='"+cssClass+"'> </div>");
    $(id).append(diva);
   if(cssClass==="graph-layer-bg") 
   setTimeout(function(){
      $(id).css({"overflow":"hidden",
      "opacity":"1"});
    },500);
    else 
    $(id).css({"overflow":"hidden",
    "opacity":"1"});
    // animation graph parametre 
    var param = "" ;
    param = paramAnimation(direction);
  
    $( diva ).animate( param  , speed , function() {
      // Animation complete.
      $(id).parent().removeClass("fade-in-fwd");
      diva.remove();
    });
  
  }




