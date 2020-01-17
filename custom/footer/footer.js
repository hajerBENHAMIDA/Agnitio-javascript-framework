$( document ).ready(function() {

    $("#footer").load("custom/footer/footer.html");

});

function pos(){
    $(".ag-overlay-x").removeClass("x-overlay-rcp");
    var slide = app.slideshow.resolve().slide;

    $("#posologie").removeClass("").addClass("posologie_"+slide);
    var overlay = app.view.get('overlay-demo');
    x="posologie_"+slide;
    if (x=="posologie_NEO_DESIGN1"){
        popup('posologie_NEO_DESIGN1',false);
    }

    else if (x=="posologie_NEO_EFFICACY1"){
         if (overlay) {
             overlay.load('posologie_neo_efficacite1');            
            }
          
        //   popup('posologie_neo_efficacite1',false);

    }
    else {
    //     if (overlay) {
    //     overlay.open('<div class="'+x+'"></div>');
    //     // document.getElementsByClassName("ag-overlay-x")[0].style.backgroundImage="url(custom/footer/assets/x.png)";
    //     // document.getElementsByClassName("ag-overlay-x")[0].style.backgroundRepeat = "no-repeat";

    //   }
    popup(x,false);


    }

    $("#posologie").removeClass(x);

}

function ref() {
    $(".ag-overlay-x").removeClass("x-overlay");
    $(".ag-overlay-x").removeClass("x-overlay-rcp");
    var slideshow = app.slideshow.resolve().slideshow;
    if(slideshow =="aphinity")
    popup_ref("posologie_aphinity_ref");

    if(slideshow =="tryphaena")
    popup_ref("posologie_tryphaena_ref");

    if(slideshow =="neosphere")
    popup_ref("posologie_neosphere_ref");

    if(slideshow =="perjeta")
    popup_ref("posologie_perjeta_ref");
    



}


function conclusion() {
    var slideshow = app.slideshow.resolve().slideshow;

    if(slideshow =="aphinity" ){
    var overlay = app.view.get('overlay-demo');
    if (overlay) {
      overlay.load('aphinity_reco');
      console.log($("#posologie").addClass("x-overlay"));
      $(".ag-overlay-x").addClass("x-overlay");

      } 

    }
    if(slideshow =="tryphaena" || slideshow =="neosphere" ){
        var overlay = app.view.get('overlay-demo');
        if (overlay) {
          overlay.load('conc_popup1');
          $(".ag-overlay-x").addClass("x-overlay");
          $(".ag-overlay-x").removeClass(".x-overlay-pos");

          } 
    
    }

    if(slideshow =="perjeta"){
     popup("posologie_perjeta_conc",false);
    }

}


function rcp(){
    // var overlay = app.view.get('overlay-demo');

    // if (overlay) {
    //     overlay.open('<div class="rcp1"></div><div class="rcp2"></div>');
    //     $(".ag-overlay-x").addClass("x-overlay-rcp");

    // }
    popup1("rcp1","rcp2");



}