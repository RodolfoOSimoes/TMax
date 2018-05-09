
var PAGE_BOOKS_TEMPLATE =
    '<div class="page-books" v-cloak>' +
        '<panel page="books">' +
            '<!-- content -->' +
            '<div class="page-books__main">' +
                '<div class="page-books__header">' +
                    '<h1>> Livros</h1>' +
                '</div>' +

                '<!-- list -->' +
                '<div v-show="\'list\' == mode" class="page-books__list">' +
                    '<div class="page-books__list__header">' +
                        '<a v-if="\'admin\' == permission" v-on:click="createMode" class="button button--default">Adicionar</a>' +
                    '</div>' +
                    '<div class="page-books__list__books">' +

                        '<div v-for="book in books" class="page-books__list__book">' +
                            '<div class="page-books__list__book__code">' +
                                '<p><strong>Cod.:&nbsp;<span>{{ book.id }}</span></strong></p>' +
                            '</div>' +
                            '<div class="page-books__list__book__info">' +
                                '<p>{{ book.name }}</p>' +
                                '<p>{{ book.author }}</p>' +
                            '</div>' +
                            '<div class="page-books__list__book__price">' +
                                '<p>{{ moneyRealSign(book.price) }}</p>' +
                            '</div>' +
                            '<div class="page-books__list__book__control">' +
                                '<a v-if="\'admin\' == permission || \'user\' == permission" v-on:click="reserveBook(book.id)" class="page-books__list__book__option">' +
                                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display: block; pointer-events: none;" viewBox="0 0 24 24"><path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" /></svg>' +
                                '</a>' +
                                '<a v-if="\'admin\' == permission" v-on:click="editMode(book.id)" class="page-books__list__book__option">' +
                                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display: block; pointer-events: none;" viewBox="0 0 24 24"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +

                    '</div>' +
                '</div>' +
                '<!-- end list -->' +

                '<!-- form -->' +
                '<div v-show="\'edit\' == mode || \'create\' == mode" class="page-books__form">' +
                    '<div class="fieldset">' +
                        '<label class="input input--text">' +
                            '<input type="text" v-model="form.name" placeholder="Nome do livro">' +
                        '</label>' +
                    '</div>' +
                    '<div class="fieldset">' +
                        '<label class="input input--text">' +
                            '<input type="text" v-model="form.author" placeholder="Autores do livro">' +
                        '</label>' +
                    '</div>' +
                    '<div class="fieldset">' +
                        '<label class="input input--text">' +
                            '<input type="text" v-model="form.image" placeholder="Capa do livro">' +
                        '</label>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-6">' +
                            '<div class="fieldset">' +
                                '<label class="input input--text">' +
                                    '<input type="text" v-model="form.amount" placeholder="Quantidade de livros">' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-6">' +
                            '<div class="fieldset">' +
                                '<label class="input input--text">' +
                                    '<input type="text" v-model="form.price" placeholder="Preço da reserva">' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="fieldset fieldset--right">' +
                        '<a class="button button--secondary button--margin-right" v-on:click="cancelBook">Cancel</a>' +
                        '<a v-show="\'edit\' == mode" class="button button--danger button--margin-right" v-on:click="deleteBook">Excluir</a>' +
                        '<a class="button button--default" v-on:click="saveBook">Salvar</a>' +
                    '</div>' +
                '</div>' +
                '<!-- end form -->' +

            '</div>' +
            '<!-- end content -->' +
        '</panel>' +
    '</div>';

Vue.component('page-books', {
    template: PAGE_BOOKS_TEMPLATE,
    data: function() {
        return {
            mode: '', /* list, create and edit */
            form: {
                id: 0,
                name: '',
                image: '',
                author: '',
                price: '',
                amount: ''
            },
            books: []
        };
    },
    computed: {
        permission: function() {
            return this.$root.role;
        }
    },
    methods: {
        listMode: function(reload) {
            this.mode = 'list';
            if (reload) {
                this.books = [];
                this.loadAllBooks();
            }
        },
        editMode: function(id) {
            this.clearForm();
            this.loadBookDetails(id);
            this.mode = 'edit';
        },
        createMode: function() {
            this.clearForm();
            this.mode = 'create';
        },
        reserveBook: function(id) {
            window.location.assign('/reservations?mode=create&book=' + id);
        },
        loadAllBooks: function() {
            var thisScope = this;
            BooksService.all({
                onSuccess: function(result) {
                    thisScope.books = result.data;
                }
            });
        },
        loadBookDetails: function(id) {
            var thisScope = this;
            BooksService.find(id, {
                onSuccess: function(result) {
                    thisScope.setForm(result.data);
                }
            });
        },
        setForm: function(book) {
            if (book) {
                this.form.id = book.id;
                this.form.name = book.name;
                this.form.image = book.image;
                this.form.author = book.author;
                this.form.price = book.price;
                this.form.amount = book.amount;
            }
        },
        clearForm: function() {
            this.form.id = 0;
            this.form.name = '';
            this.form.image = '';
            this.form.author = '';
            this.form.price = '';
            this.form.amount = '';
        },
        cancelBook: function() {
            this.listMode();
        },
        saveBook: function() {
            var thisScope = this;
            if (this.form.id) {
                BooksService.update(this.form, {
                    onSuccess: function(result) {
                        NotificationsService.notify(result);
                        thisScope.listMode(true);
                    },
                    onWarning: function(result) {
                        NotificationsService.notify(result);
                    }
                });
            } else {
                BooksService.create(this.form, {
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
        deleteBook: function() {
            var thisScope = this;
            BooksService.delete(this.form.id, {
                onSuccess: function(result) {
                    NotificationsService.notify(result);
                    thisScope.listMode(true);
                }
            });
        }
    },
    created: function() {
        this.listMode(true);
    }
});