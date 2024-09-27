<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Index');
    }

    public function struktural() 
    {
        return Inertia::render('Home/Struktural');
    }

    public function event()
    {
        return Inertia::render('Home/Event');
    }
}