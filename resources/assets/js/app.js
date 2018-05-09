var application = new Vue({
	el: '#application',
	data: {
		logged: false,
		id: 0,
		user: '',
		role: ''
	},
	methods: {
		loadAuth: function() {
			var thisScope = this;
			UserService.getAuth({
				onSuccess: function(result) {
					var data = result.data;
					if (null != data) {
						thisScope.logged = true;
						thisScope.id = data.user.id;
						thisScope.user = data.user.name;
						thisScope.role = data.role.code;
					}
				}
			});
		}
	},
	created: function() {
		this.loadAuth();
	}
});