<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'Dawg']); // Passing data to home page
});

// Route::inertia('/', 'Home');  // A cleaner version of the above code

Route::get('/about', function () {
    return Inertia::render('About/About'); // A page inside a folder
});

// Route::inertia('/about', 'About/About');  // A cleaner version of the above code
