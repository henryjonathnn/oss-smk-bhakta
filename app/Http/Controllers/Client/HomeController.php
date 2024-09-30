<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Client/Home/Index');
    }

    public function struktural() 
    {
        return Inertia::render('Client/Struktural/Index');
    }

    public function event()
    {
        return Inertia::render('Client/Event/Index');
    }

    public function artikel()
    {
        return Inertia::render('Client/Artikel/Index');
    }

    public function kotaksaran()
    {
        return Inertia::render('Client/KotakSaran/Index');
    }
}
