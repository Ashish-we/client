<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserForm;
use App\Models\Intern_form;
use App\Models\job_form;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class InternFormController extends Controller
{
    use HttpResponses;
    public function submit_form(StoreUserForm $request){
    $request->validated($request->user_id);
    $user = Auth::user();
    $jobs = Intern_form::where('user_id', $request->user_id)->get();
    // dd($jobs);
    foreach( $jobs as $job)
    {
        if($job->job_id == $request->job_id)
        {
            return response()->json([
                'message' => 'you have already applied to this job '
            ]);
        }
    }
    
        $pdf = $request->pdf;
        $pdf_name = $pdf->getClientOriginalName();
        $pdf->storeAs('public/pdf', $pdf_name);
        $pdf->move(public_path('storage/pdf'), $pdf_name);
        $user_form = Intern_form::create([
            'user_id' => $request->user_id,
            'description' => $request->description,
            'job_id' => $request->job_id,
            'pdf' => $pdf_name,
        ]);


        return $this->success([
            'user_form' => $user_form,
        ]);
    
}

    public function user_form_display($id)
    {
        $user = Auth::user();
        
        $user_form = Intern_form::find($id);
        if($user->id == $user_form->id)
        {
            // return  response()->download(public_path('storage\\pdf\\' . $user_form->pdf), $user_form->pdf);
            return $this->success([
                'user_form' => $user_form,
            ]);
        }
        else
        {
            return $this->success([
                'user_form' => 'You are not allowed to see other user form',
            ]);
        }
    }


    public function update_user_form(StoreUserForm $request, $id)
    {
        $request->validated($request->user_id);
        $user = Auth::user();
        
        if($user->id == $request->user_id) {

        //remove the current file    
        $user_form = Intern_form::find($id);
        $file_ = $user_form->pdf;
    
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



            $pdf = $request->pdf;
            $pdf_name = $pdf->getClientOriginalName();
            $pdf->storeAs('public/pdf', $pdf_name);
            $pdf->move(public_path('storage/pdf'), $pdf_name);

            $user_form = Intern_form::create([
                'user_id' => $request->user_id,
                'description' => $request->description,
                'job_id' => $request->job_id,
                'pdf' => $pdf_name,
            ]);
            
            DB::update('update user_forms set user_id = ?,description=?,job_id=?, pdf=? where id = ?',
            [$request->user_id,$request->description,$request->job_id, $pdf_name, $id]);
            
            $user_form = Intern_form::find($id);
            return $this->success([
                'user_form' => $user_form,
            ]);
        }
    }

    public function delete_user_form($id){
        $user = Auth::user();
        $user_form = Intern_form::find($id);
        if($user->id == $user_form->user_id) {
    
            $file_ = $user_form->pdf;
            $user_form = Intern_form::find($id)->delete();

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

            return response()->json('Successfully deleted!');
        }
    }



    //used by company (company auth is required) to find the users who have applied for the internship
    public function get_applied_user_form($job_id)
    {
        $job_posted_by_which_company = job_form::find($job_id);
        $company = Auth::user('company');
        if($job_posted_by_which_company->company_id == $company->id)
        {
        $applied_users = DB::select("select * from intern_forms where job_id = $job_id");
        return $this->success([
            'users' => $applied_users,
        ]);
        }
        else {
            return response()->json([
                'users' => null,
            ]);
        }
    }


    //get user pdf
    public function user_form_pdf($job_id, $id)// id if user form id
    {
        $job_posted_by_which_company = job_form::find($job_id);
        $company = Auth::user('company');
        if($job_posted_by_which_company->company_id == $company->id)
        {
            $user_form = Intern_form::find($id);
            return  response()->download(public_path('storage\\pdf\\' . $user_form->pdf), $user_form->pdf);
        }
        else {
            return response()->json([
                'users' => null,
            ]);
        }
    }

    public function user_details($job_id, $id)//id is user id
    {
        $job_posted_by_which_company = job_form::find($job_id);
        $company = Auth::user('company');
        if($job_posted_by_which_company->company_id == $company->id)
        {
            $user = User::find($id);
            return response()->json([
                'user' => $user,
            ]);
        }
        else {
            return response()->json([
                'users' => 'null',
            ]);
        }
    }
    

}
