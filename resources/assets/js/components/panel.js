
var PANEL_TEMPLATE =
    '<div class="panel" v-cloak>' +
        '<!-- menu -->' +
        '<div class="panel__menu">' +
            '<panel-menu :page="page" ></panel-menu>' +
        '</div>' +
        '<!-- end menu -->' +
        '<!-- content -->' +
        '<slot></slot>' +
        '<!-- end content -->' +
    '</div>';

Vue.component('panel', {
    template: PANEL_TEMPLATE,
    props: ['page']
});