<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UsersService;
use \Auth;
use \Validator;

class UsersController extends Controller
{

    public function showLogin() {
        return view('login');
    }

    public function login(Request $request)
    {
        $data = $request->all();

        if (Auth::check() || Auth::attempt($data)) {
            return [
                'status' => 'success',
                'message' => 'Login done successfully.'
            ];
        }

        return [
            'status' => 'warning',
            'message' => 'Invalid email and/or password.'
        ];
    }

    public function logout()
    {
        Auth::logout();

        return [
            'status' => 'success'
        ];
    }

    public function getAuth()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $role = $user->role();

            return [
                'status' => 'success',
                'data' => [
                    'user' => $user->toArray(),
                    'role' => $role->first()
                ]
            ];
        }

        return [
            'status' => 'success',
            'data' => null
        ];
    }

    public function getAuthUser()
    {
        if (Auth::check()) {
            return [
                'status' => 'success',
                'data' => Auth::user()->toArray()
            ];
        }

        return [
            'status' => 'success',
            'data' => null
        ];
    }

    public function getAuthUserRole()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $role = $user->role();

            return [
                'status' => 'success',
                'data' => $role->first()
            ];
        }

        return [
            'status' => 'success',
            'data' => null
        ];
    }

    public function showUsers()
    {
        return view('users');
    }

    public function all()
    {
        $usersService = new UsersService();
        $users = $usersService->all();

        return [
            'status' => 'success',
            'data' => $users->toArray()
        ];
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $usersService = new UsersService();

        $validation = Validator::make($data, $usersService->rules());
        if ($validation->fails()) {
            return [
                'status' => 'warning',
                'messages' => $validation->messages()
            ];
        }

        $usersService->create($data);

        return [
            'status' => 'success',
            'message' => 'User created successfully.'
        ];
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $usersService = new UsersService();

        $validation = Validator::make($data, $usersService->editRules($id));
        if ($validation->fails()) {
            return [
                'status' => 'warning',
                'messages' => $validation->messages()
            ];
        }

        $user = $usersService->update($id, $data);
        if (! $user) {
            return [
                'status' => 'warning',
                'message' => 'Invalid user.'
            ];
        }

        return [
            'status' => 'success',
            'message' => 'User created successfully.'
        ];
    }

    public function find($id)
    {
        $usersService = new UsersService();
        $user = $usersService->find($id);

        return [
            'status' => 'success',
            'data' => $user ? $user->toArray() : null
        ];
    }

    public function delete($id)
    {
        $usersService = new UsersService();
        $usersService->delete($id);

        return [
            'status' => 'success',
            'message' => 'User deleted successfully.'
        ];
    }

}
