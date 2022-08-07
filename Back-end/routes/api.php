<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\Accountcontroller;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('shop', [ProductController::class, 'index']);
Route::post('admin/products', [ProductController::class, 'showproduct']);

Route::post('category', [ProductController::class, 'category']);

Route::post('sex', [ProductController::class, 'sex']);

Route::post('age', [ProductController::class, 'age']);

Route::post('cart/checkout', [ProductController::class, 'checkout']);

Route::post('hint', [ProductController::class, 'hint']);

Route::post('shop/category', [ProductController::class, 'showproductbycate']);

Route::post('shop/addtocart', [ProductController::class, 'addtocart']);

Route::post('shop/detail', [ProductController::class, 'productdetail']);
Route::post('admin/customers', [CustomerController::class, 'index']);
Route::post('admin/staffs', [AccountController::class, 'showaccount']);
Route::post('register', [CustomerController::class, 'register']);
Route::post('delete_product', [ProductController::class, 'delete_product']);
Route::post('delete_category', [ProductController::class, 'delete_category']);
Route::post('login', [CustomerController::class, 'login']);
Route::post('delete_account', [AccountController::class, 'delete_account']);
Route::post('editprofile', [CustomerController::class, 'editprofile']);
Route::post('delete_customer', [CustomerController::class, 'delete_customer']);
Route::post('orderhistory', [CustomerController::class, 'orderhistory']);
Route::post('admin/orders', [CustomerController::class, 'showorderhistory']);
Route::post('admin/orders_confirm', [CustomerController::class, 'confirm_order']);
Route::post('orderdetailhistory', [CustomerController::class, 'orderdetailhistory']);

