<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCompanyForm;
use App\Models\job_form;
use App\Models\User;
use App\Models\Intern_form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\DB;
class CompanyFormController extends Controller
{
    use HttpResponses;
    public function submit_form(StoreCompanyForm $request)
    {
        $request->validated($request->all());

        $job_post = job_form::create([
            'title' => $request->title,
            'due_date' => $request->due_date,
            'description' => $request->description,
            'company_id' => $request->company_id,
            'skills' => $request->skills,
        ]);


        return $this->success([
            'job_post' => $job_post,
        ]);
    }

    public function get_all_post()
    {
        $job_post = job_form::get();

        return $this->success([
            'job_post' => $job_post,
        ]);
    }


    public function update_form_display($job_id)
    {
        $job_form = job_form::find($job_id);
        return $this->success([
            'job_post' => $job_form,
        ]);
    }


    public function update_job_form(StoreCompanyForm $request, $job_id)
    {
        $request->validated($request->all());
        $user = Auth::user();
        if($user->id == $request->company_id) {
            DB::update('update job_posts set title = ?,due_date=?,description=?,company_id=?,skills=? where job_id = ?',
                [$request->title,$request->due_date,$request->description, $request->company_id, $request->skills, $job_id]);

            $job_post = job_form::find($job_id);
            return $this->success([
                'job_post' => $job_post,
            ]);
        }
        else{
            return response()->json([
                'message' => 'You are not allowed to perform this operation',
            ]);
        }
    }


    public function delete_job_form($job_id)
    {   
        $user = Auth::user();
        $job_post = job_form::find($job_id);
        if($job_post->company_id == $user->id){
            job_form::find($job_id)->delete();

            //to delete all the users form associated with this job
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


            return response()->json('Successfully deleted!');
        }
        else{
            return response()->json([
                'message' => 'You are not allowed to perform this operation',
            ]);
        }
    }


    public function job_list()
    {
        $company = Auth::user();
        $job_posted = job_form::where('company_id', $company->id)->get();
        return $this->success([
            'job_post' => $job_posted,
        ]);

    }

    public function get_exp_job_list()
    {
        $company = Auth::user('company');
        $expjoblist = DB::table('expjobpost')->where('company_id', $company->id)->get();
        return $this->success([
            'job_list' => $expjoblist,
        ]);
    }

    public function get_applied_user_form_exp_job($job_id)
    {
        $job_posted_by_which_company = DB::table('expjobpost')->where('job_id', $job_id)->first();
        $company = Auth::user('company');
        if($job_posted_by_which_company->company_id == $company->id)
        {
        $applied_users = DB::select("select * from expuserform where job_id = $job_id");
        return $this->success([
            'applied_users_form' => $applied_users,
        ]);
        }
        else {
            return response()->json([
                'users' => null,
            ]);
        }
    }

    public function user_exp_form_pdf($job_id, $id)
    {
        $job_posted_by_which_company = DB::table('expjobpost')->where('job_id', $job_id)->first();
        $company = Auth::user('company');
        if($job_posted_by_which_company->company_id == $company->id)
        {
            $user_form = DB::table('expuserform')->where('id', $id)->first();
            return  response()->download(public_path('storage\\pdf\\' . $user_form->pdf), $user_form->pdf);
        }
        else {
            return response()->json([
                'users' => null,
            ]);
        }
    }

    public function user_details_exp($job_id, $id)//id is user id
    {
        $job_posted_by_which_company = DB::table('expjobpost')->where('job_id', $job_id)->first();
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
