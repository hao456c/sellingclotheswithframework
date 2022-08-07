<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\orderquanao;
use Illuminate\Support\Facades\Hash;
use DB;

class CustomerController extends Controller
{
    public function index(Request $req){
        $query = DB::table('customer')->where('status',1);
        $result = $query->get();
        return response()->json([
            'status'=> 200,
            'customer'=> $result,
            
        ]);

    }
   
    public function register(Request $req){
        $checkemail = DB::table('customer')->select('email')->where('email',$req->email)->first();
        $checkemail2 = DB::table('accounts')->select("email")->where('email',$req->email)->first();
        if ($checkemail == null && $checkemail2== null) {
            $customer = new Customer();
            $customer->name = $req->name;
            $customer->email = $req->email;
            $customer->password = Hash::make($req->password);
            $customer->save();
            $message = "Đăng kí thành công";
        }else{
            $message = "Trùng email";
        }
        
        return response()->json([
            'status'=> 200,
            'message'=> $message,
        ]);

    }
    public function login(Request $req){
        $checkemail = DB::table('customer')->where('email',$req->email)->first();
        $checkemail2 = DB::table('accounts')->where('email',$req->email)->first();
        if ($checkemail != null && Hash::check($req->password, $checkemail->password)) {
            $message = "Thành công";
            return response()->json([
                'status'=> 200,
                'message'=> $message,
                'account'=>$checkemail,
            ]);
        }elseif($checkemail2 != null && Hash::check($req->password, $checkemail2->password)){
            $message = "admin";
            return response()->json([
                'status'=> 200,
                'message'=> $message,
                'account'=>$checkemail2,
            ]);
        }else{
            $message = "Thất Bại";
            return response()->json([
                'message'=> $message,
            ]);
        }
        
    }
    
    public function editprofile(Request $req){
        $fullname = $req->fullname;
        $password = $req->password;
        $phone = $req->phone;
        $email = $req->email;         
        $checkemail = DB::table("customer")->where([['email',$email],['customer_id','!=',$req->id]])->first();
        if ($checkemail != null) {
            return response()->json([
                'status'=> 200,
                'message'=>'Trùng email'
            ]);
        }        
        $in4 = DB::table("customer")->where('customer_id',$req->id)->first();
        $customer = Customer::Find($in4->customer_id);
        $customer->name = $fullname;
        $customer->password = Hash::make($password);
        $customer->phone = $phone;
        $customer->email = $email;
        $customer->save();
        return response()->json([
            'status'=> 200,
            'message'=>'Thành công',
            'name'=>$fullname
        ]);
    }
    public function delete_customer(Request $req){
        $id = $req->id;
        $getcustomer = customer::find($id);
        $getcustomer->status=0;
        $getcustomer->save();
        return response()->json([
            'status'=> 200,
            'message'=>'Thành công',
        ]);
    }
    public function orderhistory(Request $req){
        $id = $req->id;
        $getorder = DB::table('orderquanao')->where('customer_id',$id)->get();
        return response()->json([
            'status'=> 200,            
            'orderbill'=>$getorder
        ]);
    }
    public function showorderhistory(Request $req){
        $getorder = DB::table('orderquanao')->get();
        return response()->json([
            'status'=> 200,            
            'orderbill'=>$getorder
        ]);
    }
    public function confirm_order(Request $req){
        $id = $req->id;
        $getorder = orderquanao::find($id);
        $getorder->status=1;
        // $orderid=$getorder->order_id;
        $getorder->save();
        return response()->json([
            'status'=> 200,
            'message'=>'Thành công',
            // 'orderid'=>$orderid
        ]);
    }
    public function orderdetailhistory(Request $req){
        $orderid = $req->orderid;
        $getorderdetail = DB::table('orderdetail')->select('orderdetail.order_id','product.name','orderdetail.quantity','orderdetail.price','orderdetail.subtotal','orderdetail.created_at')->join('product','orderdetail.product_id','=','product.product_id')->where('orderdetail.order_id',$orderid)->get();
        return response()->json([
            'status'=> 200,            
            'orderbilldetails'=>$getorderdetail
        ]);
    }
}
