define(['SocialNetView', 'views/contactView', 'text!/templates/contacts.html'],
	function(socialNet, ContactView, contactsTemplate){
	var contactCollectionView = socialNet.extend({
		el: $('#content'),
		initialize: function(options){
			this.collection.unbind('reset');
			this.collection.bind('reset', this.renderCollection, this);
			console.log(this.collection);
		},
		render:function(){
			this.$el.html(contactsTemplate);
		},
		renderCollection: function(collection){
			//reset method won't be triggered
			console.log('render collections in contacts view');			
			console.log(collection);
			collection.each(function(contact){
				var html = (new ContactView({ removeButton: true, model: contact })).render().el;
				console.log(html);
				$(html).appendTo('.contact_list');
			});
		}
	});
	return contactCollectionView;
});      



