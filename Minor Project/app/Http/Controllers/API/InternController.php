<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginCompanyRequest;
use App\Http\Requests\LoginInternRequest;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\StoreInternRequest;
use App\Http\Requests\StoreUserRequest;
use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class InternController extends Controller
{
    use HttpResponses;
    public function login(LoginInternRequest $request)
    {
       $request->validated($request->all());

       if(!Auth::guard('user')->attempt(['email' => $request->email, 'password' => $request->password])){
            return $this->error('','Credentials do not match', 401);
       }

       $intern = User::where('email', $request->email)->first();

       return $this->success([
        'user' => $intern,
        'token' => $intern->createToken('Minor',['user'])->plainTextToken,
       ]);
        
        // $token = $intern->createToken('Minor',['user'])->plainTextToken;
        // return response()
        // ->json(['success' => 'success'], 200)   // JsonResponse object
        // ->withCookie(cookie('token', $token, $minute = 10));
    }
    public function register(StoreInternRequest $request)
    {
        $request->validated($request->all());

        $intern = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'skills' => $request->skills,
        ]);


        return $this->success([
            'user' => $intern,
            'token' => $intern->createToken('Minor',['user'])->plainTextToken
        ]);
    }

    public function details()
    {
        $intern = Auth::user();
        return $this->success([
            'user' => $intern,
        ]);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'user logged out'
        ];
    }

    public function update_profile(StoreInternRequest $request)
    {
        $request->validated($request->all());
        $user = Auth::user('user');
        $id = $user->id;
        
        $pass = Hash::make($request->password);
        DB::update('update users set name = ?,email=?,phone=?,skills=?,password=? where id = ?',
                [$request->name,$request->email,$request->phone,$request->skills, $pass, $id]);

        return $this->success([
            'message' => 'successfully updated user profile',
        ]);

    }
}
