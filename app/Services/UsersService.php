<?php

namespace App\Services;

use App\User;
use \Hash;

class UsersService
{

    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|max:32',
            'user_role_id' => 'required|exists:users_roles,id'
        ];
    }

    public function editRules($id)
    {
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
            'password' => 'max:32',
            'user_role_id' => 'required|exists:users_roles,id'
        ];
    }

    public function create($data)
    {
        $data['password'] = Hash::make($data['password']);
        return User::create($data);
    }

    public function update($user, $data = [])
    {
        if (is_object($user)) {
            $user->save();
            return $user;
        }

        $user = $this->find($user);
        if (! $user) {
            return null;
        }

        $user->name = $data['name'];
        $user->email = $data['email'];
        if (! empty($data['password'])) {
            $user->password = Hash::make($data['password']);
        }
        $user->user_role_id = $data['user_role_id'];
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        $user = $this->find($id);
        if (! $user) {
            return false;
        }

        $user->delete();

        return true;
    }

    public function all()
    {
        return User::all();
    }

    public function find($id)
    {
        return User::find($id);
    }

}