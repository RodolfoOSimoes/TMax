<?php

namespace App\Services;

use App\Reservation;
use \DB;

class ReservationsService
{

    public function rules()
    {
        return [
            'book_id' => 'required|exists:books,id',
            'user_id' => 'required|exists:users,id',
            'reservation_date' => 'required|date',
            'delivery_date' => 'required|date',
            'price' => 'required',
            'status' => 'required'
        ];
    }

    public function create($data)
    {
        return Reservation::create($data);
    }

    public function update($reservation, $data = [])
    {
        if (is_object($reservation)) {
            $reservation->save();
            return $reservation;
        }

        $reservation = $this->find($reservation);
        if (! $reservation) {
            return null;
        }

        $reservation->book_id = $data['book_id'];
        $reservation->user_id = $data['user_id'];
        $reservation->reservation_date = $data['reservation_date'];
        $reservation->delivery_date = $data['delivery_date'];
        $reservation->price = $data['price'];
        $reservation->status = $data['status'];
        $reservation->save();

        return $reservation;
    }

    public function delete($id)
    {
        $reservation = $this->find($id);
        if (! $reservation) {
            return false;
        }

        $reservation->delete();

        return true;
    }

    public function find($id)
    {
        return Reservation::find($id);
    }

    public function all()
    {
        return Reservation::all();
    }

    public function allCustom($id=0)
    {
        $query = DB::table('reservations');

        if ($id) {
            $query->where('reservations.user_id', '=', $id);
        }

        return $query
            ->join('books', 'books.id', '=', 'reservations.book_id')
            ->join('users', 'users.id', '=', 'reservations.user_id')
            ->select('reservations.*', 'books.name as book_name', 'users.name as user_name')
            ->get();
    }

    public function details($id)
    {
        return DB::table('reservations')
            ->join('books', 'books.id', '=', 'reservations.book_id')
            ->join('users', 'users.id', '=', 'reservations.user_id')
            ->select('reservations.*', 'books.name as book_name', 'users.name as user_name')
            ->where('reservations.id', '=', $id)
            ->first();
    }

    public function deliver($id)
    {
        $reservation = $this->find($id);
        if (! $reservation) {
            return false;
        }

        $reservation->status = true;
        $reservation->save();

        return true;
    }

}