define(['Backbone', 'models/Contact'], function(Backbone, Contact){
	var ContactCollection = Backbone.Model.extend({
		model: Contact
	});
	return  ContactCollection;
});