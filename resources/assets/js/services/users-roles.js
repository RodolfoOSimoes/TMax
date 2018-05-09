
var UsersRolesService = {
    defaultError: 'An error has occurred',
    all: function(callbacks) {
        axios.get('/users-roles/all')
            .then(function (response) {
                if ('success' == response.data.status) {
                    if (callbacks.onSuccess) {
                        callbacks.onSuccess.call(this, response.data);
                    }
                } else if ('warning' == response.data.status) {
                    if (callbacks.onWarning) {
                        callbacks.onWarning.call(this, response.data);
                    }
                }
            })
            .catch(function (error) {
                if (callbacks.onError) {
                    callbacks.onError.call(this, {
                        status: 'Error',
                        message: this.defaultError
                    });
                }
            });
    }
};