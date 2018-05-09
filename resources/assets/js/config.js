
/* laravel csrf token */

var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

/* notify plugin */

biologic.air.Notify.configure({
	destroy: 'both',
	delay: 4000,
	animation: 'slide'
});