app.register('ag-indicators', function() {

	var self;

	return {
		publish: {
			type: ['circle', 'rectangle', 'square', 'line']
		},
		template: false,
		onRender: function(el) {
			self = this;
			app.listenTo(app.slideshow, 'load', this.build.bind(this));
			app.listenTo(app.slideshow, 'update:current', this.indicate.bind(this));
			this.el.classList.add('ag-indicators');
			if (this.props.type) this.el.classList.add('ag-indicators-' + this.props.type);
			this.build();
		},
		indicate: function() {
			var i = app.slideshow.getIndex();
			var previous = this.el.querySelector('.active');
			var current = this.el.querySelector('.indicator_' + i.h + '_' + i.v);
			if (previous) previous.classList.remove('active');
			if (current) current.classList.add('active');
			$(".ag-indicator-chapter").hide();
			$(".ag-indicator-chapter > .active").parent().show();
		},
		build: function() {
			var list = app.slideshow.inspect().list; // The raw list
			var isLinear = app.model.isLinear(app.slideshow.getId());
			var html = "";
			if (isLinear) {
				this.el.classList.add('ag-indicators-linear');
			}
			else {
				this.el.classList.remove('ag-indicators-linear');
			}
			list.forEach(function(item, i) {
				html += '<ul class="ag-indicator-chapter">';
				if (typeof item === 'string') {
					html += '<li class="indicator_' + i + '_0"></li>'
				}
				else {
					item.forEach(function(id, j) {
						html += '<li class="indicator_' + i + '_' + j + '"></li>'
					})
				}
				html += '</ul>';
			});
			this.el.innerHTML = html;
			this.indicate();
		}
	}

});