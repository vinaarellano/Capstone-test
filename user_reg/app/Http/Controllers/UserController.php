<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use GuzzleHttp\Psr7\Message;

class UserController extends Controller
{
    //

    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if($validator->fails()) {
            return response(['error' => $validator->errors()->all()],422);

    }

    $password_hash = Hash::make($request->password);

    $user = User::create([
        'name' => $request->name,
        'password' => $password_hash,
        'email' => $request->email
    ]);

    $token = $user->createToken('LaravelTokenPassword')->accessToken;

    $response = ['token' => $token, 'message' => 'User Successfully Created'];
    return $response;

}

public function login(Request $request){
    $validator = Validator::make($request->all(),[
        'email' => 'required|string|email',
        'password' => 'required|string'
    ]);

    if($validator->fails()) {
        return response(['error' => $validator->errors()->all()],422);
    }

    $user = User::where('email', $request->email)->first();

    if($user){
        $check_password = Hash::check($request->password, $user->password);

        if($check_password){
            $token = $user->createToken('LaravelTokenPassword')->accessToken;
            $response = ['token' => $token, 'message' => 'Successfully logged in!'];
            return $response;

        }else{
            return response(['error'=>'Password is invalid!'],422);
        }

    }else{
        return response(['error'=>'Email Does Not Exist!'],422);
    }

}

    public function logout(Request $request){
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message'=>'User Logged Out!'];
        return $response;
        
}

}
