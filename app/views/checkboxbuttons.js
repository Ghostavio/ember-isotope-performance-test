var CheckboxbuttonsView = Ember.View.extend({
	tagName: 'label',
	classNames: ['btn btn-default'],
	attributeBindings: ['data-color'],
	click: function() {
		var self = this;
		window.setTimeout(function(){
			var finalString = '';
			self.$().parent().find('.active').each(function(i){
				if(i > 0) {
					finalString += ', ';
				}
				finalString += '.'+this.innerText.toLowerCase();
			});
			self.get('controller').send('filter', finalString);
		});
	}
});

export default CheckboxbuttonsView;
