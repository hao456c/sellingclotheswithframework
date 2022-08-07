<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\account;
use DB;

class AccountController extends Controller
{
    public function showaccount(Request $req){
        $query = DB::table('accounts')->where('status',1);
        $result = $query->get();
        return response()->json([
            'status'=> 200,
            'accounts'=> $result,
        ]);
    }
    public function delete_account(Request $req){
        $id = $req->id;
        $getaccount = accounts::find($id);
        $getaccount->status=0;
        $getaccount->save();
        return response()->json([
            'status'=> 200,
            'message'=>'Thành công',
        ]);
    }
    
}
