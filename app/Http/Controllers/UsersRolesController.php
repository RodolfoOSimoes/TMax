<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UsersRolesService;
use \Auth;

class UsersRolesController extends Controller
{

    public function all()
    {
        $usersRolesService = new UsersRolesService();
        $roles = $usersRolesService->all();

        return [
            'status' => 'success',
            'data' => $roles->toArray()
        ];
    }

}
