var ItemsView = Ember.View.extend({
	tagName: 'ul',
	classNames: ['items-list'],
	didInsertElement: function () {
        //Schedule the Isotope initialization in the 'afterRender' queue
        //so that the Ember run loop execute it after rendering.
        Ember.run.scheduleOnce('afterRender', this, function () {
            this.$().isotope({
                itemSelector: '.item',
                animationEngine : 'css',
                layoutMode: 'vertical'
            });
        });
    }
});

export default ItemsView;