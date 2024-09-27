<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Client/Index');
    }

    public function struktural() 
    {
        return Inertia::render('Client/Struktural');
    }

    public function event()
    {
        return Inertia::render('Client/Event');
    }
}
