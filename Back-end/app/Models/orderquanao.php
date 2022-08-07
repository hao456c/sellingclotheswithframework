<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orderquanao extends Model
{
    use HasFactory;
    protected $table = "orderquanao";
    protected $primaryKey = 'order_id';
}
