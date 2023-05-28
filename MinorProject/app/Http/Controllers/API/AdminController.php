<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Models\Admin;
use App\Models\Company;
use App\Models\job_form;
use App\Models\Intern_form;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    use HttpResponses;

    public function login(LoginUserRequest $request)
    {
       $request->validated($request->all());

       if(!Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password])){
            return $this->error('','Credentials do not match', 401);
       }

       $admin = Admin::where('email', $request->email)->first();

       return $this->success([
        'user' => $admin,
        'token' => $admin->createToken('Minor',['admin'])->plainTextToken,
       ]);
    }

    public function register(StoreUserRequest $request)
    {
        $request->validated($request->all());

        $admin = Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        route('verify_email');
        return $this->success([
            'user' => $admin,
            'token' => $admin->createToken('Minor',['admin'])->plainTextToken
        ]);
    }

    public function details()
    {
        $admin = Auth::user();
        return $this->success([
            'user' => $admin,
        ]);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'user logged out'
        ];
    }

    public function update_profile(StoreUserRequest $request)
    {
        $request->validated($request->all());
        $user = Auth::user('admin');
        $id = $user->id;
        
        $pass = Hash::make($request->password);
        DB::update('update admins set name = ?,email=?,phone=?,password=? where id = ?',
                [$request->name,$request->email,$request->phone, $pass, $id]);

        return $this->success([
            'message' => 'successfully updated Admin profile',
        ]);

    }

    public function user_list()
    {
        $users = User::get();
        return $this->success([
            'users' => $users,
        ]);
    }

    public function company_list()
    {
        $companies = Company::get();
        return $this->success([
            'companies' => $companies,
        ]);
    }
    public function delete_user($id)
    {
        User::find($id)->delete();
        return $this->success([
            'message' => 'User deleted successfully',
        ]);

    }

    public function delete_company($id)
    {
        Company::find($id)->delete();
        return $this->success([
            'message' => 'Company deleted successfully',
        ]);

    }

    public function delete_job_post($job_id)
    {
        job_form::find($job_id)->delete();

        $user_forms = Intern_form::where('job_id',$job_id)->get();
            foreach($user_forms as $user_form){
                $file_ = $user_form->pdf;
                $user_form = Intern_form::find($user_form->id)->delete();

                $file_path = public_path().'/storage/pdf/';
                $file_pat = storage_path().'/app/public/pdf/';
                // dd($image_pat);
                $file = $file_path . $file_;
                $file1 = $file_pat . $file_;
                if(file_exists($file))
                {
                    unlink($file);
                }
                if(file_exists($file1))
                {
                    unlink($file1);
                }
            }
        return $this->success([
            'message' => 'job post deleted successfully along with all the usersforms',
        ]);

    }
}
