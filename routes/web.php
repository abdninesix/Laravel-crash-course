<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

// Route::get('/', function () {
//     return Inertia::render('Home', ['name' => 'Dawg']); // Passing data to home page
// });

// // Route::inertia('/', 'Home');  // A cleaner version of the above code

// Route::get('/about', function () {
//     return Inertia::render('About/About'); // A page inside a folder
// });

Route::inertia('/about', 'About/About');  // A cleaner version of the above code
