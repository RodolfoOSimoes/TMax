
var PAGE_LOGIN_TEMPLATE =
    '<div class="login" v-cloak>' +
        '<div class="login__main">' +
            '<div class="login__header">' +
                '<h2 class="logotype">Books</h2>' +
            '</div>' +
            '<div class="login__body">' +
                '<h3>Entrar</h3>' +
                '<div class="fieldset">' +
                    '<label class="input input--text">' +
                        '<input type="text" v-model="email" placeholder="Email">' +
                    '</label>' +
                '</div>' +
                '<div class="fieldset">' +
                    '<label class="input input--text">' +
                        '<input type="password" v-model="password" placeholder="Senha">' +
                    '</label>' +
                '</div>' +
                '<div class="fieldset">' +
                    '<a class="button button--default button--full" v-on:click="login">Entrar</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

Vue.component('page-login', {
    template: PAGE_LOGIN_TEMPLATE,
    data: function() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login: function() {
            var thisScope = this;
            UserService.login({
                email: this.email,
                password: this.password
            }, {
                onSuccess: function() {
                    window.location.assign('/dashboard');
                },
                onWarning: function(result) {
                    thisScope.password = '';
                    NotificationsService.notify(result);
                },
                onError: function(result) {
                    thisScope.password = '';
                    NotificationsService.notify(result);
                }
            });
        }
    }
});