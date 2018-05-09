
var PANEL_MENU_TEMPLATE =
    '<div class="panel-menu" v-cloak>' +
        '<div class="panel-menu__user">' +
            '<span class="panel-menu__user__name">{{ user }}</span>' +
            '<a v-on:click="logout" class="panel-menu__user__link">Sair</a>' +
        '</div>' +
        '<ul class="panel-menu__menu">' +
            '<li :class="{\'panel-menu__item--active\' : page == \'books\'}" v-if="\'admin\' == permission || \'user\' == permission" class="panel-menu__item">' +
                '<a href="/books">Livros</a>' +
            '</li>' +
            '<li :class="{\'panel-menu__item--active\' : page == \'reservations\'}" v-if="\'admin\' == permission || \'user\' == permission"  class="panel-menu__item">' +
                '<a href="/reservations">Reservas</a>' +
            '</li>' +
            '<li :class="{\'panel-menu__item--active\' : page == \'users\'}" v-if="\'admin\' == permission"  class="panel-menu__item">' +
                '<a href="/users">Usuários</a>' +
            '</li>' +
        '</ul>' +
    '</div>';

Vue.component('panel-menu', {
    template: PANEL_MENU_TEMPLATE,
    props: ['page'],
    computed: {
        permission: function() {
            return this.$root.role;
        },
        user: function() {
            return this.$root.user;
        }
    },
    methods: {
        logout: function() {
            UserService.logout({
                onSuccess: function(result) {
                    window.location.assign('/');
                }
            });
        }
    }
});