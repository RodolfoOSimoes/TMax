<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\ReservationsService;
use App\Services\BooksService;
use \Input;
use \Validator;
use \Auth;
use \DateTime;

class ReservationsController extends Controller
{

    public function showReservations()
    {
        return view('reservations');
    }

    public function all()
    {
        $reservationsService = new ReservationsService();
        $reservations = $reservationsService->all();

        return [
            'status' => 'success',
            'data' => $reservations->toArray()
        ];
    }

    public function allCustom()
    {
        $reservationsService = new ReservationsService();
        $user = Auth::user();
        $role = $user->role()->first();

        if ('user' == $role->code) {
            $reservations = $reservationsService->allCustom(Auth::id());
        } else {
            $reservations = $reservationsService->allCustom();
        }

        return [
            'status' => 'success',
            'data' => $reservations->toArray()
        ];
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $reservationsService = new ReservationsService();
        $user = Auth::user();
        $role = $user->role()->first();

        if ('user' == $role->code) {
            $data['user_id'] = $user->id;
        } else if ('admin' == $role->code) {
            if (empty($data['user_id'])) {
                $data['user_id'] = $user->id;
            }
        } else {
            return [
                'status' => 'error',
                'messages' => 'Invalid user.'
            ];
        }

        $booksService = new BooksService();
        $book = $booksService->find($data['book_id']);

        if (! $book) {
            return [
                'status' => 'error',
                'messages' => 'Invalid book.'
            ];
        }

        if (! $data['reservation_days']) {
            return [
                'status' => 'error',
                'messages' => 'Number of days invalid.'
            ];
        }

        $days = (int)$data['reservation_days'];

        $data['price'] = $book->price * $days;

        $now = date('Y-m-d');
        $deliveryDate = new DateTime($now);
        $deliveryDate->modify('+'.$days.' day');
        $data['reservation_date'] = $now;
        $data['delivery_date'] = $deliveryDate->format('Y-m-d');

        $data['status'] = false;

        $validation = Validator::make($data, $reservationsService->rules());
        if ($validation->fails()) {
            return [
                'status' => 'warning',
                'messages' => $validation->messages()
            ];
        }

        $reservationsService->create($data);

        return [
            'status' => 'success',
            'message' => 'Reservation created successfully.'
        ];
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $reservationsService = new ReservationsService();
        $user = Auth::user();
        $role = $user->role()->first();

        if ('user' == $role->code) {
            $data['user_id'] = $user->id;
        } else if ('admin' == $role->code) {
            if (empty($data['user_id'])) {
                $data['user_id'] = $user->id;
            }
        } else {
            return [
                'status' => 'error',
                'messages' => 'Invalid user.'
            ];
        }

        $booksService = new BooksService();
        $book = $booksService->find($data['book_id']);

        if (! $book) {
            return [
                'status' => 'error',
                'messages' => 'Invalid book.'
            ];
        }

        if (! $data['reservation_days']) {
            return [
                'status' => 'error',
                'messages' => 'Number of days invalid.'
            ];
        }

        $days = (int)$data['reservation_days'];

        $data['price'] = $book->price * $days;

        $now = date('Y-m-d');
        $deliveryDate = new DateTime($now);
        $deliveryDate->modify('+'.$days.' day');
        $data['reservation_date'] = $now;
        $data['delivery_date'] = $deliveryDate->format('Y-m-d');

        $data['status'] = false;

        $validation = Validator::make($data, $reservationsService->rules());
        if ($validation->fails()) {
            return [
                'status' => 'warning',
                'messages' => $validation->messages()
            ];
        }

        $reservationsService->update($id, $data);

        return [
            'status' => 'success',
            'message' => 'Updated created successfully.'
        ];
    }

    public function find($id)
    {
        $reservationsService = new ReservationsService();
        $reservation = $reservationsService->find($id);

        return [
            'status' => 'success',
            'data' => $reservation ? $reservation->toArray() : null
        ];
    }

    public function details($id)
    {
        $reservationsService = new ReservationsService();
        $reservation = $reservationsService->details($id);

        return [
            'status' => 'success',
            'data' => $reservation ? (array)$reservation : null
        ];
    }

    public function delete($id)
    {
        $reservationsService = new ReservationsService();
        $reservationsService->delete($id);

        return [
            'status' => 'success',
            'message' => 'Reservation deleted successfully.'
        ];
    }

    public function deliver($id)
    {
        $reservationsService = new ReservationsService();
        $reservationsService->deliver($id);

        return [
            'status' => 'success',
            'message' => 'Book delivered successfully.'
        ];
    }

}
