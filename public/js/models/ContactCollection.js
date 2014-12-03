define(['Backbone', 'models/Contact'], function(Backbone, Contact){
	var ContactCollection = Backbone.Collection.extend({
		model: Contact
	});
	return  ContactCollection;
});