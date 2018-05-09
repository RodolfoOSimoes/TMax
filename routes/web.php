<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('users.showLogin');
});

Route::get('home', function () {
    return redirect()->route('users.showLogin');
});

Route::group(['middleware' => 'guest'], function() {

    Route::get('login',
        ['as' => 'users.showLogin', 'uses' => 'UsersController@showLogin']);

    Route::post('users/login',
        ['as' => 'users.login', 'uses' => 'UsersController@login']);

});

Route::group(['middleware' => 'auth'], function() {

    Route::get('dashboard', function () {
        return redirect()->route('books.showBooks');
    });

    Route::post('users/logout',
        ['as' => 'users.logout', 'uses' => 'UsersController@logout']);

    Route::get('books',
        ['as' => 'books.showBooks', 'uses' => 'BooksController@showBooks']);

    Route::post('books/create',
        ['as' => 'books.create', 'uses' => 'BooksController@create']);

    Route::post('books/update/{id}',
        ['as' => 'books.update', 'uses' => 'BooksController@update']);

    Route::get('books/all',
        ['as' => 'books.all', 'uses' => 'BooksController@all']);

    Route::post('books/delete/{id}',
        ['as' => 'books.delete', 'uses' => 'BooksController@delete']);

    Route::get('books/{id}',
        ['as' => 'books.find', 'uses' => 'BooksController@find']);

    Route::get('users/get-auth',
        ['as' => 'users.getAuth', 'uses' => 'UsersController@getAuth']);

    Route::get('users/get-auth-user',
        ['as' => 'users.getAuthUser', 'uses' => 'UsersController@getAuthUser']);

    Route::get('users/get-auth-user-role',
        ['as' => 'users.getAuthUserRole', 'uses' => 'UsersController@getAuthUserRole']);

    Route::get('users',
        ['as' => 'users.showUsers', 'uses' => 'UsersController@showUsers']);

    Route::post('users/create',
        ['as' => 'users.create', 'uses' => 'UsersController@create']);

    Route::post('users/update/{id}',
        ['as' => 'users.update', 'uses' => 'UsersController@update']);

    Route::get('users/all',
        ['as' => 'users.all', 'uses' => 'UsersController@all']);

    Route::post('users/delete/{id}',
        ['as' => 'users.delete', 'uses' => 'UsersController@delete']);

    Route::get('users/{id}',
        ['as' => 'users.find', 'uses' => 'UsersController@find']);

    Route::get('users-roles/all',
        ['as' => 'usersRoles.all', 'uses' => 'UsersRolesController@all']);

    Route::get('reservations',
        ['as' => 'users.showReservations', 'uses' => 'ReservationsController@showReservations']);

    Route::post('reservations/create',
        ['as' => 'reservations.create', 'uses' => 'ReservationsController@create']);

    Route::post('reservations/update/{id}',
        ['as' => 'reservations.update', 'uses' => 'ReservationsController@update']);

    Route::get('reservations/all',
        ['as' => 'reservations.all', 'uses' => 'ReservationsController@all']);

    Route::get('reservations/all-custom',
        ['as' => 'reservations.allCustom', 'uses' => 'ReservationsController@allCustom']);

    Route::post('reservations/delete/{id}',
        ['as' => 'reservations.delete', 'uses' => 'ReservationsController@delete']);

    Route::get('reservations/{id}',
        ['as' => 'reservations.find', 'uses' => 'ReservationsController@find']);

    Route::get('reservations/details/{id}',
        ['as' => 'reservations.details', 'uses' => 'ReservationsController@details']);

    Route::post('reservations/deliver/{id}',
        ['as' => 'reservations.deliver', 'uses' => 'ReservationsController@deliver']);

});
