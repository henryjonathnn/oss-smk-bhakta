<?php

use App\Http\Controllers\AnggotaController;
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

// UMUM
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/struktural', [HomeController::class, 'struktural'])->name('struktural');
Route::get('/event', [HomeController::class, 'event'])->name('event');
Route::get('/artikel', [HomeController::class, 'artikel'])->name('artikel');
Route::get('/kotak-saran', [HomeController::class, 'kotaksaran'])->name('kotaksaran');


// ADMIN
Route::resource('anggota', AnggotaController::class);