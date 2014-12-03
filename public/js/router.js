define([
	'views/index', 
	'views/registerView', 
	'views/loginView',
	'views/forgotpasswordView', 
	'views/profileView', 
	'views/contactsView',
	'views/addContactView',
	'models/Account',
	'models/StatusCollection',
	'models/Contact',
	'models/ContactCollection'
], function(IndexView, RegisterView, LoginView, ForgotPasswordView, ProfileView, ContactCollectionView, AddContactView,
Account, StatusCollection, Contact, ContactCollection) {
	var SocialRouter = Backbone.Router.extend({
		currentView: null,
		routes: {
			"index": "index",
			"login": "login",
			"register": "register",
			"forgotpassword": "forgotpassword",
			"profile/:id": "profile",
			"contacts/:id": "contacts",
			"addcontact": "addcontact"
		},
		changeView: function(view) {
			if ( null != this.currentView ) {
				this.currentView.undelegateEvents();// 解绑 释放内存
			}
			this.currentView = view;
			this.currentView.render();
		},
		index: function() {
			var statusCollection = new StatusCollection();
			statusCollection.url = '/accounts/me/activity';
			this.changeView(new IndexView({
				collection: statusCollection
			}));
			statusCollection.fetch();
		},
		login: function() {
			this.changeView(new LoginView());
		},
		forgotpassword: function() {
			this.changeView(new ForgotPasswordView());
		},
		register: function() {
			this.changeView(new RegisterView());
		},
		profile: function(id) {
			var model = new Account({id:id});
			this.changeView(new ProfileView({model:model}));
			model.fetch();
		},
		contacts: function(id){
			var contactId = id?id:'me';
			var contactCollection = new ContactCollection();
			contactCollection.url = '/accounts/' + contactId + '/contacts';
			this.changeView(new ContactCollectionView({
				collection: contactCollection
			}));
			//从服务器拉取集合的默认模型，成功接收数据后会重置（reset）集合。
			contactCollection.fetch({reset: true});
		},
		addcontact: function(){
			this.changeView(new AddContactView());
		}
	});
	return new SocialRouter();
});

