var ItemsController = Ember.Controller.extend({
	actions: {
		filter: function(params) {
			window.console.log(params);
			$('.items-list').isotope({ filter: params });
		}
	}
});

export default ItemsController;
