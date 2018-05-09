
var ReservationsService = {
    defaultError: 'An error has occurred',
    create: function(data, callbacks) {
        axios.post('/reservations/create', data)
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
        axios.post('/reservations/update/' + data.id, data)
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
        axios.get('/reservations/all')
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
    allCustom: function(callbacks) {
        axios.get('/reservations/all-custom')
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
    details: function(id, callbacks) {
        axios.get('/reservations/details/' + id)
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
    deliver: function(id, callbacks) {
        axios.post('/reservations/deliver/' + id)
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
        axios.post('/reservations/delete/' + id)
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