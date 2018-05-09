<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\BooksService;
use \Input;
use \Validator;

class BooksController extends Controller
{

    public function showBooks()
    {
        return view('books');
    }

    public function all()
    {
        $bookService = new BooksService();
        $books = $bookService->all();

        return [
            'status' => 'success',
            'data' => $books->toArray()
        ];
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $bookService = new BooksService();

        $validation = Validator::make($data, $bookService->rules());
        if ($validation->fails()) {
            return [
                'status' => 'warning',
                'messages' => $validation->messages()
            ];
        }

        $bookService->create($data);

        return [
            'status' => 'success',
            'message' => 'Book created successfully.'
        ];
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $bookService = new BooksService();

        $validation = Validator::make($data, $bookService->rules());
        if ($validation->fails()) {
            return [
                'status' => 'warning',
                'messages' => $validation->messages()
            ];
        }

        $book = $bookService->update($id, $data);
        if (! $book) {
            return [
                'status' => 'warning',
                'message' => 'Invalid book.'
            ];
        }

        return [
            'status' => 'success',
            'message' => 'Book created successfully.'
        ];
    }

    public function find($id)
    {
        $bookService = new BooksService();
        $book = $bookService->find($id);

        return [
            'status' => 'success',
            'data' => $book ? $book->toArray() : null
        ];
    }

    public function delete($id)
    {
        $bookService = new BooksService();
        $bookService->delete($id);

        return [
            'status' => 'success',
            'message' => 'Book deleted successfully.'
        ];
    }

}
