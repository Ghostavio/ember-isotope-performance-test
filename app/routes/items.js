var ItemsRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('item');
	}
});

export default ItemsRoute;
