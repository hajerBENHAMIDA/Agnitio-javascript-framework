app.register('ag-auto-menu', function() {
  var self;
  return {
    template: '<div class="menu-container"><ul class="menu"></ul></div>',
    current: '',
    fallback: '', // if no menu is built
    publish: {
      hide: false, // Should we initially hide menu?
      placement: ['top', 'bottom'], // top or bottom?
      exclude: '', // Some content that should not be in the menu?
      slideshows: '',
      binding: 77,
      trigger: ''
    },
    events: {
      "tap li": "navigate",
      "swipeleft": function(event) { event.stopPropagation(); },
      "swiperight": function(event) { event.stopPropagation(); }
    },
    states: [
      {
        id: 'hidden',
        onEnter: function() {
          if (this.props.placement === 'bottom') {
            app.util.transformElement(this.$el, 'translate(0,50px)');
          }
          else {
            app.util.transformElement(this.$el, 'translate(0,-50px)');
          }
        },
        onExit: function() {
          app.util.transformElement(this.$el, 'translate(0,0)');
        }
      }
    ],
    onRender: function(el) {
      self = this;
      self.pathLength = 2; // Default to menu of structures
      app.$.menu = this;
      if (this.props.hide) {
        this.hide();
        if (this.props.binding) {
          app.config.update('keyboard', parseInt(this.props.binding, 10), function() {
            app.$.trigger("toggle:menu");
          }) 
        }
      }
      app.$.on('toggle:menu', function() {
          this.toggle('hidden');
      }.bind(this));
      if (this.props.placement === 'bottom') el.classList.add('placement-bottom');
      // Are we using this menu with specific slideshows?
      if (this.props.slideshows) {
          this.props.slideshows.replace(/\s+/g, ''); // "one, two" => "one,two"
          this.props.slideshows = this.props.slideshows.split(',');
      }
      app.listenTo(app.slideshow, 'update:current', this.updateCurrent);
      app.listenTo(app.slideshow, 'load', function(data) {
        self.setup(data.id);
      });
      this.layout({scale: app.getScale()});
      app.on('update:layout', this.layout);
      this.setup();
    },
    hide: function() {
      this.goTo('hidden');
    },
    setup: function(id) {
     
        id = id || app.slideshow.getId();

        var slideshow = app.slideshow.resolve().slideshow;
        console.log(slideshow);
        var nope = ['default','Home-4-RUB'];
        if(nope.indexOf(slideshow)> -1)
        {
        $("nav,#footer").css("display","none");
            
        }
        else
        {
        var last_elem = $("div.icon").last();
        var picto = last_elem.find("div");

        if (slideshow == "aphinity") {
            picto.attr("id","reco");

        }else if (slideshow == "perjeta") {
          picto.attr("id","women");
        }else {
          picto.attr("id","pen-paper") ;
        }
        $("nav,#footer").css("display","");
        }




        if (!this.props.slideshows || this.props.slideshows.indexOf(id) > -1) {
            this.createLinks(id);
            this.updateCurrent();
        }
        else {
            this.removeLinks();
        }
        this.setTrigger();
    },
    setTrigger: function() {
      if (this.props.trigger) {
        var parts = this.props.trigger.split(' ');
        var e = parts[0];
        var selector = parts[1] || null;
        var el = document;
        if (selector) {
          el = document.body.querySelector(selector);
        }
        if (el) el.addEventListener(e, function() { self.toggle('hidden'); });
      }
    },
    createLinks: function(structure) {

      var list = this.$('.menu')[0];
      var structure = structure || app.slideshow.getId();

      var html = `<input type="checkbox" name="answer" id="a1">
      <label class="burger" for="a1">
        <div class="burger__item crossed">
          <div class="burger__item-line">
            <div class="tree `+structure+`"></div>  
          </div>
        </div>
      </label>
      <audio src="assets/Vol.mp3" autostart="true"  id="burger_sound" ></audio> 
      <audio src="assets/souffle_air.mp3" autostart="true"  id="burger_sound_retour" ></audio> 

      `;
      var chapter, links;
      var data = structure === 'storyboard' ? app.model.getStoryboard() : app.model.getStoryboard(structure);
      var pathPrefix = structure + '/';
      var excludedLinks = this.props.exclude.split(' ');

      if (data && data.content) {
        links = data.content;

        // If a single item in menu, let's try to dive down and get more links
        if (links.length === 1) {
          chapter = data.content[0];
          data = app.model.getStructure(chapter);
          if (data && data.content) {
            links = data.content;
            pathPrefix += chapter + '/';
            this.pathLength = 3;
          }
        }

      }

      if (!list) {
        list = document.createElement('ul');
        list.classList.add('menu');
        this.$el.appendChild(list);
      }
      else {
        list.innerHTML = '';
      }

      if (links) {
        links.forEach(function(item, i) {
          if (typeof item !== 'string') item = item[0];
          if (excludedLinks.indexOf(item) === -1) {
            var name = app.model.getItem(item).name;
            html += '<li data-goto="' + pathPrefix + item + '">' + name + '</li>';
          }
        });

        list.appendChild(app.dom.parse(html));
        this.createScroller(list);
      }
      // burgerssss
      
      
      function animBurger(){

        var checkbox = $("#a1") ;
        if(checkbox.is(":checked")) {
          $(".tree").addClass( "swing-in-top-fwd" ).removeClass( "swing-out-top-bck" );
          console.log("true");
          document.getElementById('burger_sound').play();
          document.getElementById('burger_sound').volume=0.2;


        }else {
          checkbox.prop("checked", true);
          $(".tree").addClass( "swing-out-top-bck" ).removeClass( "swing-in-top-fwd");
          setTimeout(function(){
            checkbox.prop("checked", false); 
            document.getElementById('burger_sound_retour').play();
            document.getElementById('burger_sound_retour').volume=0.2;

          },800);

        }

      }
      $("#a1").change(animBurger);

    },
    setFallback: function(html) {
        if (html) this.fallback = html;
    },
    removeLinks: function() {
      var list = this.$('.menu')[0];
      list.innerHTML = this.fallback;
    },
    /*************updateddddddd************** */
    updateCurrent: function() {
      var path = app.getPath();
      var parts = path.split('/');


      if (parts.length > 2 && self.pathLength === 2) path = parts[0] + '/' + parts[1];
      if (self.current) self.current.classList.remove('selected');
      self.current = self.el.querySelector('.menu [data-goto="' + path + '"]');
      if (self.current) self.current.classList.add('selected');

      /*************************/
      var slide = app.slideshow.resolve().slide;

      var pos = ['try_design1','NEO_DESIGN1','NEO_EFFICACY1'];
      console.log(pos);
      if(pos.indexOf(slide)> -1)
      {
        $("#posologie").css("display","");
  
      }
      else
      {
      $("#posologie").css("display","none");
      
      }

    },
    navigate: function(event) {
      var link = event.target;
      var path;

      if (link) {
        path = link.getAttribute('data-goto');
        if (path) {
          app.goTo(path);
         self.updateCurrent(); // Immediate update of menu
        }
        if (self.props.hide) app.$.trigger("toggle:menu");
      }
    },
    createScroller: function(menu) {
      // TODO: listen to window resize and update limits
      var widths = this.getWidth();
      var appWidth = app.dom.get('wrapper').getBoundingClientRect().width;
      var scrollLimit = appWidth - widths.menu;
      // No scroller necessary if menu isn't bigger than width of view
      if (scrollLimit < 0) {
        this.scroller = new Draggy(menu, {
          restrictY: true,
          limitsX: [scrollLimit, 0]
        });
      }
      else {
        this.scroller = null;
      }
    },
    getWidth: function() {
      var links = this.el.querySelectorAll('.menu li');
      var menuWidth = 0;
      var linkWidths = [];
      Array.prototype.slice.call(links).forEach(function(link) {
        var width = link.getBoundingClientRect().width;
        menuWidth += width;
        linkWidths.push(width);
      });
      return {
        menu: menuWidth,
        links: linkWidths
      }
    },
    layout: function(data) {
      // Only apply if zoom is supported
      if( typeof self.el.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
        self.el.style.zoom = data.scale;
      }
      // Apply scale transform as a fallback
      else {
        app.util.transformElement( self.el, 'translate(-50%, -50%) scale('+ data.scale +') translate(50%, 50%)' );
      }
    }
  }
});