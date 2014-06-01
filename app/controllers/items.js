var ItemsController = Ember.Controller.extend({
	actions: {
		filter: function(param) {
			$('html').addClass('show-'+param);
		},
		unfilter: function(param) {
			$('html').removeClass('show-'+param);
		}
	},
	filteredContent : function() {
	    var searchText = this.get('searchText'),
	        regex = new RegExp(searchText, 'i');
	    return this.get('model').filter(function(item){
	        return regex.test(item.get('text'));
	    });
	}.property('searchText', 'model')
});

export default ItemsController;
