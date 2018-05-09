<?php

namespace App\Services;

use App\UserRole;

class UsersRolesService
{

    public function rules()
    {
        return [
            'name' => 'required|max:24',
            'code' => 'required|max:24'
        ];
    }

    public function create($data)
    {
        return UserRole::create($data);
    }

    public function update($role, $data = [])
    {
        if (is_object($role)) {
            $role->save();
            return $role;
        }

        $role = $this->find($role);
        if (! $role) {
            return null;
        }

        $role->name = $data['name'];
        $role->code = $data['code'];
        $role->save();

        return $role;
    }

    public function delete($id)
    {
        $role = $this->find($id);
        if (! $role) {
            return false;
        }

        $role->delete();

        return true;
    }

    public function all()
    {
        return UserRole::all();
    }

    public function find($id)
    {
        return UserRole::find($id);
    }

}