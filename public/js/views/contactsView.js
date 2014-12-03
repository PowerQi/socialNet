define(['SocialNetView', 'views/contactView', 'text!/templates/contacts.html'],
	function(socialNet, ContactView, contactsTemplate){
	var contactCollectionView = socialNet.extend({
		el: $('#content'),
		initialize: function(options){
			this.collection.unbind('reset');
			this.collection.bind('reset', this.renderCollection, this);
		},
		render:function(){
			this.$el.html(contactsTemplate);
		},
		renderCollection: function(collection){
			//reset method won't be triggered
			collection.each(function(contact){
				var html = (new ContactView({ removeButton: true, model: contact })).render().el;
				$(html).appendTo('#contactlist');
			});
		}
	});
	return contactCollectionView;
});      



