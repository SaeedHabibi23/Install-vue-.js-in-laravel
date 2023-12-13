<?php

namespace App\Http\Controllers;
use App\Models\Employees;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function employee(){
        $Employees = Employees::all();
        return response()->json($Employees);
    }
}
