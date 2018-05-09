<?php

use Illuminate\Database\Seeder;

use App\Services\UsersService;
use App\Services\UsersRolesService;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        $usersRolesService = new UsersRolesService();
        $usersRolesService->create([
            'name' => 'Admin',
            'code' => 'admin'
        ]);
        $usersRolesService->create([
            'name' => 'User',
            'code' => 'user'
        ]);

        $usersService = new UsersService();
        $usersService->create([
            'name' => 'Admin',
            'email' => 'admin@email.com',
            'password' => 'admin',
            'user_role_id' => 1
        ]);
    }
}
