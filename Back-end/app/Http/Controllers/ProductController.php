<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Models\Product;
use App\Models\orderquanao;
use App\Models\orderdetail;

use DB;
class ProductController extends Controller
{
    public function index(){
       $allproduct = DB::table('product')->where('status',1)->paginate(3);
    //    return $this->pagination($allproduct);
       return response()->json([
            'status'=> 200,            
            'allproduct'=> $allproduct,            
        ]);
    }
    public function delete_product(Request $req){
        $id = $req->id;
        $getproduct = product::find($id);
        $getproduct->status=0;
        $getproduct->save();
        return response()->json([
            'status'=> 200,
            'message'=>'Thành công',
        ]);
    }
    public function delete_category(Request $req){
     
        $id = $req->id;
        $getcustomer = category_product::find($id);
        $getcustomer->status=0;
        $getcustomer->save();
        return response()->json([
            'status'=> 200,
            'message'=>'Thành công',
        ]);
    }
    public function showproduct(){
        $allproduct = DB::table('product')->where('status',1)->get();
     //    return $this->pagination($allproduct);
        return response()->json([
             'status'=> 200,            
             'allproduct'=> $allproduct,            
         ]);
     }
    public function category(){
        $category = DB::table('category_product')->where('status',1)->get();
        return response()->json([
            'status'=> 200,
            'category'=> $category,
        ]);
    }
    public function sex(){
        $gioitinh = DB::table('gioitinh')->get();
        return response()->json([
            'status'=> 200,
            'gioitinh'=> $gioitinh,
        ]);
    }
    public function age(){
        $age = DB::table('age')->get();
        return response()->json([
            'status'=> 200,
            'age'=> $age,
        ]);
    }
    public function showproductbycate(Request $req){
        // cach 1
        // $product1 = DB::table('catesex')->select('catesex_id')->where('category_id',$req->id)->get();
        // $product2 = DB::table('category_detail');
        // foreach ($product1 as $values) {
        //     foreach ($values as $value) {
        //         $product2->orwhere('catesex_id' ,$value);
        //     }
        // }
        // $result1 = $product2->select('cateagesex_id')->get();
        // $product3 = DB::table('product');
        // foreach ($result1 as $values) {
        //     foreach ($values as $value) {
        //         $product3->orwhere('cateagesex_id' ,$value);
        //     }
        // }
        // $resul2 = $product3->paginate(1);
        // return response()->json([
        //     'status'=> 200,
        //     'productcate'=> $resul2,
        // ]);
        //cach 2
        $query1 = DB::table('catesex')->select('cateagesex_id')->join('category_detail','catesex.catesex_id','=','category_detail.catesex_id')->where('catesex.category_id',$req->id);
        if ($req->sex != null) {
            $query1->where('catesex.sex_id',$req->sex);
        }
        if ($req->age != null) {
            $query1->where('category_detail.age_id',$req->age);
        }
        $result = $query1->get();
        $query2 = DB::table('product');
        foreach ($result as $values) {
            foreach ($values as $value) {
                $query2->orwhere('cateagesex_id' ,$value);
            }
        }
        $result2 = $query2-> paginate(1);
        return response()->json([
            'status'=> 200,
            'productcate'=> $result2,
        ]);
    } 
    public function productdetail(Request $req){
        $product = DB::table('product')->where("product_id",$req->idpro)->get();
        return response()->json([
            'status'=> 200,
            'productdetail'=> $product,
        ]);
    }
    public function addtocart(Request $req){
        $id = $req->idpro;
        $query = DB::table('product')->where('product_id',$id)->get();
        $cart = [];        
        foreach ($query as $value) {
            $cart = [
                'id' => $value->product_id,
                'name' => $value->name,
                'price' => $value->price,
                'quantity' => 1,
                'image'=> $value->image,
                'subtotal'=> $value->price
            ];
        }
        session()->put('cart',$cart);          
        return response()->json([
            'status'=> 200,
            'cart'=> $cart,
        ]);        
    }  
    public function checkout(Request $req){
        $cart = $req->params1;
        $total = $req->params2;
        $idcus = $req->params3;
        $address = $req->params4;
        if ($address == 1) {
            $address == "Thành Phố Hồ Chí Minh";
        }elseif ($address == 2) {
            $address = "Hà Nội";
        }
        foreach ($cart as $values) {        
            $query = DB::table('product')->select('product_id','quantity')->where('product_id',$values['id'])->first();            
            if ($values['quantity'] > $query->quantity) {
                return response()->json([
                    'status'=> 200,
                    'message'=> "nhiều quá",
                ]);
            }               
        }        
        $orderquanao = new orderquanao();
        $orderquanao->customer_id = $idcus;
        $orderquanao->status = 0;
        $orderquanao->total = $total;
        $orderquanao->address = $address;
        $orderquanao->save();        
        foreach ($cart as $values) {            
            $orderdetail = new orderdetail();
            $orderdetail->order_id = $orderquanao->order_id;
            $orderdetail->product_id = $values['id'];
            $orderdetail->price = $values['price'];
            $orderdetail->quantity = $values['quantity'];
            $orderdetail->subtotal = $values['subtotal'];
            $orderdetail->save();
        }
        foreach ($cart as $values) {            
            $product = Product::find($values['id']);
            $product->quantity = $product->quantity - $values['quantity'];
            $product->save();
        }    

        return response()->json([
            'status'=> 200,
            'message'=> "Thành Công",
        ]);
    }      
    
    public function hint(Request $req){
        $search = $req->search;
        $issearched = $req->issearched;
        if ($search != "") {
            $query = DB::table('product')->where('name','LIKE',"%$search%");
            if ($issearched != 1) {
                $result = $query->get();                
            }else{
                $result = $query->paginate(1);                
            }
            return response()->json([
                'status'=> 200,
                'result'=> $result,
            ]);    
        }
        return response()->json([
            'status'=> 200,
            'result'=> 0,
        ]);
    }
}
