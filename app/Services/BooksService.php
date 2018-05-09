<?php

namespace App\Services;

use App\Book;

class BooksService
{

    public function rules()
    {
        return [
            'name' => 'required|max:128',
            'image' => 'required|max:128',
            'author' => 'required|max:128',
            'price' => 'required|numeric',
            'amount' => 'required|numeric|min:1'
        ];
    }

    public function create($data)
    {
        return Book::create($data);
    }

    public function update($book, $data = [])
    {
        if (is_object($book)) {
            $book->save();
            return $book;
        }

        $book = $this->find($book);
        if (! $book) {
            return null;
        }

        $book->name = $data['name'];
        $book->image = $data['image'];
        $book->author = $data['author'];
        $book->price = $data['price'];
        $book->amount = $data['amount'];
        $book->save();

        return $book;
    }

    public function delete($id)
    {
        $book = $this->find($id);
        if (! $book) {
            return false;
        }

        $book->delete();

        return true;
    }

    public function all()
    {
        return Book::all();
    }

    public function find($id)
    {
        return Book::find($id);
    }

}