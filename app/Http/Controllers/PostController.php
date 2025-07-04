<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$posts = Post::all();
        //$posts = Post::latest()->get(); //to reverse the list order
        $posts = Post::latest()->paginate(8); //to paginate the list
        return Inertia::render('Home', ['name' => 'Dawg', 'posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        sleep(2); //waits 2 seconds before running the next line of code

        $fields = $request->validate([
            'body' => ['required']
        ]);

        Post::create($fields); //save recieved data in database

        //dd($request); //die and dump request

        return redirect('/'); //redirect to homepage to see new post
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Post', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        sleep(2); //waits 2 seconds before running the next line of code

        $fields = $request->validate([
            'body' => ['required']
        ]);

        $post->update($fields); //updates recieved data in database

        //dd($request); //die and dump request

        return redirect('/')->with(
            'message',
            'The post was updated'   //the first one is key from handleInertiaRequests and second one is custom message
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('/')->with(
            'message',
            'The post was deleted'   //the first one is key from handleInertiaRequests and second one is custom message
        );
    }
}
