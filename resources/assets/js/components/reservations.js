
var PAGE_RESERVATIONS_TEMPLATE =
    '<div class="page-reservations" v-cloak>' +
        '<panel page="reservations">' +
            '<!-- content -->' +
            '<div class="page-reservations__main">' +
                '<div class="page-reservations__header">' +
                    '<h1>> Reservas</h1>' +
                '</div>' +

                '<!-- list -->' +
                '<div v-show="\'list\' == mode" class="page-reservations__list">' +
                    '<div class="page-reservations__list__header">' +
                        '<a v-if="\'admin\' == permission || \'user\' == permission" v-on:click="createMode" class="button button--default">Reservar</a>' +
                    '</div>' +
                    '<div class="page-reservations__list__reservations">' +

                        '<div v-for="reservation in reservations" class="page-reservations__list__reservation">' +
                            '<div class="page-reservations__list__reservation__code">' +
                                '<p><strong>Cod.:&nbsp;<span>{{ reservation.id }}</span></strong></p>' +
                            '</div>' +
                            '<div class="page-reservations__list__reservation__info">' +
                                '<p>{{ reservation.book_name }}</p>' +
                            '</div>' +
                            '<div class="page-reservations__list__reservation__date">' +
                                '<p>{{ covertDateBr(reservation.delivery_date) }}</p>' +
                            '</div>' +
                            '<div class="page-reservations__list__reservation__status">' +
                                '<p>{{ reservation.status == \'1\' ? \'entregue\' : \'pendente\' }}</p>' +
                            '</div>' +
                            '<div class="page-reservations__list__reservation__control">' +
                                '<a v-if="\'admin\' == permission || \'user\' == permission" v-on:click="editMode(reservation.id)" class="page-reservations__list__reservation__option">' +
                                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display: block; pointer-events: none;" viewBox="0 0 24 24"><path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" /></svg>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +

                    '</div>' +
                '</div>' +
                '<!-- end list -->' +

                '<!-- form -->' +
                '<div v-show="\'edit\' == mode || \'create\' == mode || \'view\' == mode" class="page-reservations__form">' +
                    '<div v-if="\'admin\' == permission" class="fieldset">' +
                        '<label class="input input--text">' +
                            '<label class="select">' +
                                '<select v-model="form.user_id">' +
                                    '<option value="0" disabled selected>Usuário</option>' +
                                    '<option v-for="user in users" :value="user.id">{{ user.name }}</option>' +
                                '</select>' +
                            '</label>' +
                        '</label>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-6">' +
                            '<div class="fieldset">' +
                                '<label class="select">' +
                                    '<select v-model="form.book_id" :disabled="\'user\' == permission && \'edit\' == mode">' +
                                        '<option value="0" disabled selected>Livro</option>' +
                                        '<option v-for="book in books" :value="book.id">{{ book.name }}</option>' +
                                    '</select>' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-6">' +
                            '<div class="fieldset">' +
                                '<label class="input input--text">' +
                                    '<input type="text" v-model="form.book_price" placeholder="Preço" disabled>' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-6">' +
                            '<div class="fieldset">' +
                                '<label class="select">' +
                                    '<select v-model="form.reservation_days" :disabled="\'user\' == permission && \'edit\' == mode">' +
                                        '<option value="0" disabled selected>Dias</option>' +
                                        '<option v-for="day in days" :value="day">{{ day }}</option>' +
                                    '</select>' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-6">' +
                            '<div class="fieldset">' +
                                '<label class="input input--text">' +
                                    '<input type="text" v-model="form.delivery_date" placeholder="Data de entrega" disabled>' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-6"></div>' +
                        '<div class="col-6">' +
                            '<div class="fieldset">' +
                                '<label class="input input--text">' +
                                    '<input type="text" v-model="form.price" placeholder="Preço" disabled>' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="fieldset fieldset--right">' +
                        '<a class="button button--secondary button--margin-right" v-on:click="cancelReservation">Cancel</a>' +
                        '<a v-if="\'edit\' == mode && \'admin\' == permission" class="button button--danger button--margin-right" v-on:click="deleteReservation">Excluir</a>' +
                        '<a v-if="\'edit\' == mode && form.status == 0" class="button button--default button--margin-right" v-on:click="deliverReservation">Entregar</a>' +
                        '<a v-if="\'admin\' == permission || \'create\' == mode" class="button button--default" v-on:click="saveReservation">Salvar</a>' +
                    '</div>' +
                '</div>' +
                '<!-- end form -->' +

            '</div>' +
            '<!-- end content -->' +
        '</panel>' +
    '</div>';

Vue.component('page-reservations', {
    template: PAGE_RESERVATIONS_TEMPLATE,
    data: function() {
        return {
            mode: '', /* list, create and edit */
            form: {
                id: 0,
                user_id: 0,
                book_id: 0,
                book_price: moneyRealSign(0),
                reservation_days: 0,
                reservation_date: '',
                delivery_date: '',
                price: moneyRealSign(0),
                status: 0
            },
            users: [],
            books: [],
            days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            reservations: []
        };
    },
    watch: {
        'form.book_id': function(value) {
            var thisScope = this;
            var book;
            this.books.forEach(function(item) {
                if (item.id == value) {
                    book = item;
                }
            });
            if (book) {
                thisScope.form.book_price = moneyRealSign(book.price);
                thisScope.form.price = moneyRealSign(book.price * thisScope.form.reservation_days);
            } else {
                thisScope.form.book_price = moneyRealSign(0);
                thisScope.form.price = moneyRealSign(0);
            }

            return value;
        },
        'form.reservation_days': function(value) {
            if (value == 0) {
                this.form.delivery_date = '';
                thisScope.form.price = moneyRealSign(0);
            } else {
                var deliveryDate = new Date();
                deliveryDate.setDate(deliveryDate.getDate() + value);
                this.form.delivery_date = dateToStringBr(deliveryDate);

                var book;
                var thisScope = this;
                this.books.forEach(function(item) {
                    if (item.id == thisScope.form.book_id) {
                        book = item;
                    }
                });
                if (book) {
                    thisScope.form.price = moneyRealSign(book.price * thisScope.form.reservation_days);
                } else {
                    thisScope.form.price = moneyRealSign(0);
                }
            }

            return value;
        },
        'userID': function(value) {
            this.form.user_id = value;
            return value;
        }
    },
    computed: {
        permission: function() {
            return this.$root.role;
        },
        userID: function() {
            return this.$root.id;
        }
    },
    methods: {
        listMode: function(reload) {
            this.mode = 'list';
            if (reload) {
                this.reservations = [];
                this.loadAllReservations();
            }
        },
        editMode: function(id) {
            this.clearForm();
            this.loadReservationDetails(id);
            this.mode = 'edit';
        },
        createMode: function(book) {
            this.clearForm();
            if (book) {
                this.form.book_id = book;
            }
            this.mode = 'create';
        },
        loadAllReservations: function() {
            var thisScope = this;
            ReservationsService.allCustom({
                onSuccess: function(result) {
                    thisScope.reservations = result.data;
                }
            });
        },
        loadAllBooks: function() {
            var thisScope = this;
            BooksService.all({
                onSuccess: function(result) {
                    thisScope.books = result.data;
                }
            });
        },
        loadAllUsers: function() {
            var thisScope = this;
            UserService.all({
                onSuccess: function(result) {
                    thisScope.users = result.data;
                }
            });
        },
        loadReservationDetails: function(id) {
            var thisScope = this;
            ReservationsService.details(id, {
                onSuccess: function(result) {
                    thisScope.setForm(result.data);
                }
            });
        },
        setForm: function(reservations) {
            if (reservations) {
                this.form.id = reservations.id;
                this.form.user_id = reservations.user_id;
                this.form.book_id = reservations.book_id;
                this.form.reservation_days = diffDatesInDays(
                    new Date(reservations.delivery_date),
                    new Date(reservations.reservation_date));
                this.form.reservation_date = reservations.reservation_date;
                this.form.status = reservations.status;
            }
        },
        clearForm: function() {
            this.form.id = 0;
            this.form.user_id = this.userID;
            this.form.book_id = 0;
            this.form.reservation_days = 0;
            this.form.reservation_date = '';
            // this.form.delivery_date = '';
            // this.form.book_price = moneyRealSign(0);
            // this.form.price = moneyRealSign(0);
            this.form.status = 0;
        },
        cancelReservation: function() {
            this.listMode();
        },
        saveReservation: function() {
            var thisScope = this;
            if (this.form.id) {
                ReservationsService.update(this.form, {
                    onSuccess: function(result) {
                        NotificationsService.notify(result);
                        thisScope.listMode(true);
                    },
                    onWarning: function(result) {
                        NotificationsService.notify(result);
                    }
                });
            } else {
                ReservationsService.create(this.form, {
                    onSuccess: function(result) {
                        NotificationsService.notify(result);
                        thisScope.listMode(true);
                    },
                    onWarning: function(result) {
                        NotificationsService.notify(result);
                    }
                });
            }
        },
        deleteReservation: function() {
            var thisScope = this;
            ReservationsService.delete(this.form.id, {
                onSuccess: function(result) {
                    NotificationsService.notify(result);
                    thisScope.listMode(true);
                }
            });
        },
        deliverReservation: function() {
            var thisScope = this;
            ReservationsService.deliver(this.form.id, {
                onSuccess: function(result) {
                    NotificationsService.notify(result);
                    thisScope.listMode(true);
                }
            });
        }

    },
    created: function() {
        this.loadAllUsers();
        this.loadAllBooks();
        this.loadAllReservations();

        var url = new URL(window.location.href);
        var mode = url.searchParams.get("mode");
        var book = url.searchParams.get("book");

        if ('create' == mode && book) {
            this.createMode(book);
        } else {
            this.listMode();
        }
    }
});