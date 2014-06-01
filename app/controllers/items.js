var ItemsController = Ember.ObjectController.extend({
	actions: {
		filter: function(param) {
			$('html').addClass('show-'+param);
		},
		unfilter: function(param) {
			$('html').removeClass('show-'+param);
		}
	},
	filterString: '',
    filteredContent: function() {
		Ember.run.debounce(this, this.filterEm, 250);
	}.observes('filterString'),

	filterEm: function() {
		var filter = this.get('filterString');
		filter = filter.toLowerCase();
		var regex = new RegExp(filter, 'i');
		this.get('model').forEach(function(item){
			if(item.get('text').match(regex)) {
				item.set('shown', true);
			} else {
				item.set('shown', false);
			}
		});
	}



	// filteredContent : function() {
	//     var self = this,
	//     	// searchText = this.get('searchText'),
	//         regex = new RegExp('', 'i');
 //    	Ember.run.debounce(function() {
	// 		window.console.log(self.get('searchText'));
	// 		var searchText = self.get('searchText'),
	// 	        regex = new RegExp(searchText, 'i');
	// 	}, 1000);
	//     return self.get('model').filter(function(item){
 //        	return regex.test(item.get('text'));
	//     });
		
	// }.property('searchText', 'model')
});

export default ItemsController;
