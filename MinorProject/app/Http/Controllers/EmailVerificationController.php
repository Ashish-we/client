<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
class EmailVerificationController extends Controller
{
    public function sendEmailVerification(Request $request)
    {
        if($request->user()->hasVerifiedEmail()){
                return[
                    'meaasge' => 'Already Verified'
                ];
        }

        $request->user()->sendEmailVerificationNotification();
        return ['status' => 'verification-link-sent'];
    }

    public function verify(EmailVerificationRequest $request)
    {
        if($request->user()->hasVerifiedEmail()){
            return [
                'message' => 'Email already verified'
            ];
        }
        if($request->user()->markEmailAsVerified()){
            event(new verified($request->user()));
        }

        return [
            'message' => 'Email has been verified'
        ];
    }
}