var CheckboxbuttonsView = Ember.View.extend({
	tagName: 'label',
	classNames: ['btn btn-default'],
	attributeBindings: ['data-color'],
	click: function() {
		var self = this;
		window.setTimeout(function(){
			self.$().parent().find('.active').each(function(){
				self.get('controller').send('filter', this.innerText.toLowerCase());
			});
			self.$().parent().find(':not(.active)').each(function(){
				self.get('controller').send('unfilter', this.innerText.toLowerCase());
			});
			if(self.$().parent().find('.btn-default.active').length > 0) {
				$('html').addClass('hide-non-filtered');
			} else {
				$('html').removeClass('hide-non-filtered');
			}
		});
	}
});

export default CheckboxbuttonsView;
