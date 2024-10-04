<?php

use App\Http\Controllers\Admin\AdminHomeController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Client\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// AUTH
Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::get('/register', [AuthController::class, 'register'])->name('register');

// UMUM
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/struktural', [HomeController::class, 'struktural'])->name('struktural');
Route::get('/event', [HomeController::class, 'event'])->name('event');
Route::get('/artikel', [HomeController::class, 'artikel'])->name('artikel');
Route::get('/kotak-saran', [HomeController::class, 'kotaksaran'])->name('kotaksaran');


// ADMIN
Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
Route::get('/admin/home', [AdminHomeController::class, 'index'])->name('admin.home');