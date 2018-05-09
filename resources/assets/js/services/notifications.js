
var NotificationsService = {
	notify: function(data) {
		if ('success' == data.status) {
			if (data.message) {
				biologic.air.Notify.success(data.message);
			}
		} else if ('warning' == data.status) {
			if (data.message) {
				biologic.air.Notify.warning(data.message);
			} else {
				for (var prop in data.messages) {
					biologic.air.Notify.warning(data.messages[prop]);
				}
			}
		} if ('error' == data.status) {
			biologic.air.Notify.error(data.message);
		}
	}
};