
var BooksService = {
    defaultError: 'An error has occurred',
    create: function(data, callbacks) {
        axios.post('/books/create', data)
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
        axios.post('/books/update/' + data.id, data)
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
        axios.get('/books/all')
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
        axios.get('/books/' + id)
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
        axios.post('/books/delete/' + id)
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