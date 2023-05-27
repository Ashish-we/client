<?php

use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\CompanyController;
use App\Http\Controllers\API\InternController;
use App\Http\Controllers\API\CompanyFormController;
use App\Http\Controllers\API\InternFormController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\API\UserPasswordController;
use App\Http\Controllers\API\CompanyPasswordController;
use Illuminate\Http\Request;
use App\Mail\VerifyMail;
use App\Http\Controllers\EmailVerificationController;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//email verification
Route::post('email/verification-notification',[EmailVerificationController::class, 'sendEmailVerification'])->name('verify_email')->middleware('auth:sanctum');
Route::get('verify-email/{id}/{hash}',[EmailVerificationController::class, 'verify'])->name('verification.verify')->middleware('auth:sanctum');

//login and reg Route for Intern
Route::post('login',[InternController::class, 'login']);
Route::post('register',[InternController::class, 'register']);
// Route::post('/company/forgot-password',[UserPasswordController::class, 'sendResetLinkEmail']);
// Route::post('/company/password/reset', [UserPasswordController::class, 'reset'])->name('password.reset');
Route::prefix('user')->group(function () {
    Route::post('password/email', [UserPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
    Route::post('password/reset', [UserPasswordController::class, 'reset'])->name('password.reset');
});

Route::prefix('admin')->group(function () {
    Route::post('password/email', [UserPasswordController::class, 'sendResetLinkEmail'])->name('admin.password.email');
    Route::post('password/reset', [UserPasswordController::class, 'reset'])->name('admin.password.reset');
});

Route::prefix('company')->group(function () {
    Route::post('password/email', [UserPasswordController::class, 'sendResetLinkEmail'])->name('company.password.email');
    Route::post('password/reset', [UserPasswordController::class, 'reset'])->name('company.password.reset');
});

//login and reg Route for Admin
Route::post('admin/login',[AdminController::class, 'login']);
Route::post('admin/register',[AdminController::class, 'register']);

//login and reg Route for Company
Route::post('company/login',[CompanyController::class, 'login']);
Route::post('company/register',[CompanyController::class, 'register']);

//Protected Route for Intern 
Route::middleware(['auth:sanctum', 'abilities:user'])->group(function () {
    // Route::get('user/skill_submit', [SkillController::class, 'user_skill_submin']);
    Route::get('details',[InternController::class, 'details']);
    Route::post('user/form', [InternFormController::class, 'submit_form']);
    Route::post('user/logout', [InternController::class, 'logout']);
    Route::get('update_user_form/{id}', [InternFormController::class, 'user_form_display']); //get user current details
    Route::get('user_form_pdf/{id}', [InternFormController::class, 'user_form_pdf']);  //get user pdf
    Route::post('update_user_form/{id}', [InternFormController::class, 'update_user_form']);  
    Route::post('delete_user_form/{id}', [InternFormController::class, 'delete_user_form']);
    //to recommend the user
    Route::get('user/job_list', [SkillController::class, 'skills_match']);
});


//Protected Route for admin 
Route::middleware(['auth:sanctum','abilities:admin'])->group(function () {
    Route::get('admin/details', [AdminController::class, 'details']);
    Route::post('admin/logout', [AdminController::class, 'logout']);
    Route::get('admin/users_list', [AdminController::class, 'users_list']);
    Route::get('admin/company_list', [AdminController::class, 'company_list']);
    Route::get('admin/delete_user/{id}', [AdminController::class, 'delete_user']);
    Route::get('admin/delete_company/{id}', [AdminController::class, 'delete_company']);
    Route::get('admin/delete_job_post/{job_id}', [AdminController::class, 'delete_job_post']);
});

//Protected Route for company 
Route::middleware(['auth:sanctum','abilities:company'])->group(function () {
    Route::get('company/details',[CompanyController::class, 'details']);
    Route::post('company/logout', [CompanyController::class, 'logout']);
    Route::post('company/update_profile', [CompanyController::class, 'update_profile']);
    Route::post('company/forms_submit', [CompanyFormController::class, 'submit_form']);
    Route::get('company/update_job_form/{job_id}', [CompanyFormController::class, 'update_form_display']);
    Route::post('company/update_job_form/{job_id}', [CompanyFormController::class, 'update_job_form']);
    Route::post('company/delete_job_form/{job_id}', [CompanyFormController::class, 'delete_job_form']);

    Route::get('company/job_posts/{job_id}', [InternFormController::class, 'get_applied_user_form']); //form and detail
    Route::get('company/job_post/{job_id}/{id}', [InternFormController::class, 'user_details']); //user details
    Route::get('user_pdf/{job_id}/{id}', [InternFormController::class, 'user_form_pdf']); //user pdf
    Route::get('company/job_list', [CompanyFormController::class, 'job_list']); //job liststed by a company

    //for expired jobs
    Route::get('company/expired_job_list', [CompanyFormController::class, 'get_exp_job_list']);//get expired jobs
    Route::get('company/expired_job_list/{job_id}', [CompanyFormController::class, 'get_applied_user_form_exp_job']);
    Route::get('company/expired_job_list/pdf/{job_id}/{id}', [CompanyFormController::class, 'user_exp_form_pdf']); //userform pdf
    Route::get('company/expired_job_user_detail/{job_id}/{id}', [CompanyFormController::class, 'user_details_exp']); //user detail of applied user, after job expired
});

//route to get all the job posted by the company
Route::get('job_posted', [CompanyFormController::class, 'get_all_post']);