var ItemsController = Ember.Controller.extend({
	actions: {
		filter: function(param) {
			$('html').addClass('show-'+param);
		},
		unfilter: function(param) {
			$('html').removeClass('show-'+param);
		}
	}
});

export default ItemsController;
