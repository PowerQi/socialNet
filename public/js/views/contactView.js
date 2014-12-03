define(['SocialNetView','text!/templates/contact.html'], function(socialNet, contactTemplate){
	var contact = socialNet.extend({
		addButton: false,
		removeButton: false,
		tagName: 'li',
		events: {
			"click .addbutton": "addContact",
      		"click .removebutton": "removeContact"
		},
		addContact: function() {
	    	var $responseArea = this.$('.actionArea');
	    	$.post('/accounts/me/contact', 
	    		{contactId: this.model.get('_id')},
		        function onSuccess() {
		          $responseArea.text('Contact Added');
		        }, 
		        function onError() {
		          $responseArea.text('Could not add contact');
    			}	
        	);
	    },

	    removeContact: function() {
      		var $responseArea = this.$('.actionarea');
      		$responseArea.text('Removing contact...');
  			$.ajax({
        		url: '/accounts/me/contact',
	        	type: 'DELETE',
	        	data: {
		          contactId: this.model.get('accountId')
		        }})
  			.done(function onSuccess() {
	          $responseArea.text('Contact Removed');
	        })
	        .fail(function onError() {
	          $responseArea.text('Could not remove contact');
	        });
   		},

		initialize: function(options) {
			this.addButton = options.addButton;
			this.removeButton = options.removeButton;
		},

		render: function() {	
			$(this.el).html(_.template(contactTemplate)({
				model: this.model.toJSON(),
				addButton: this.addButton,
				removeButton: this.removeButton
			}));
			return this;
		}		

	});
	return contact;
});
