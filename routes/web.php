<?php

use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\HomeController;
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


// UMUM
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/struktural', [HomeController::class, 'struktural'])->name('struktural');


// ADMIN
Route::resource('anggota', AnggotaController::class);