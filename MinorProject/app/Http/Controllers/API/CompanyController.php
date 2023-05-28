<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginCompanyRequest;
use App\Http\Requests\StoreCompanyRequest;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
    use HttpResponses;
    public function login(LoginCompanyRequest $request)
    {
       $request->validated($request->all());

       if(!Auth::guard('company')->attempt(['email' => $request->email, 'password' => $request->password])){
            return $this->error('','Credentials do not match', 401);
       }

       $company = Company::where('email', $request->email)->first();
    //    $company = Auth::guard('company')->user();
       return $this->success([
        'user' => $company,
        'token' => $company->createToken( 'Minor',['company'])->plainTextToken,
       ]);
    }
    public function register(StoreCompanyRequest $request)
    {
        $request->validated($request->all());

        $company = Company::create([
            'name' => $request->name,
            'email' => $request->email,
            'registration_number' => $request->registration_number,
            'password' => Hash::make($request->password),
        ]);


        return $this->success([
            'user' => $company,
            'token' => $company->createToken('Minor', ['company'])->plainTextToken
        ]);
    }

    public function details()
    {
        $company = Auth::user();
        return $this->success([
            'user' => $company,
        ]);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'user logged out'
        ];
    }

    public function update_profile(StoreCompanyRequest $request)
    {
        $request->validated($request->all());
        $company = Auth::user('comapny');
        $id = $company->id;
        
        $pass = Hash::make($request->password);
        DB::update('update companies set name = ?,email=?,registration_number=?,password=? where id = ?',
                [$request->name,$request->email,$request->registration_number, $pass, $id]);

        return $this->success([
            'message' => 'successfully updated company profile',
        ]);

    }
}
