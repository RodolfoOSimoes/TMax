<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{

    protected $table = 'reservations';
    
    protected $fillable = ['book_id', 'user_id', 'reservation_date', 'delivery_date', 'price', 'status'];

    public function book()
    {
        return $this->belongsTo('App\Book', 'book_id', 'id');
    }

}