
var UserService = {
    defaultError: 'An error has occurred',
    login: function(data, callbacks) {
        axios.post('/users/login', data)
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
    },
    logout: function(callbacks) {
        axios.post('/users/logout')
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
    },
    getAuth: function(callbacks) {
        axios.get('/users/get-auth')
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
    },
    create: function(data, callbacks) {
        axios.post('/users/create', data)
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
    },
    update: function(data, callbacks) {
        axios.post('/users/update/' + data.id, data)
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
    },
    all: function(callbacks) {
        axios.get('/users/all')
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
    },
    find: function(id, callbacks) {
        axios.get('/users/' + id)
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
    },
    delete: function(id, callbacks) {
        axios.post('/users/delete/' + id)
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