<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Services;
use App\Http\Resources\ServicesResources;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $services = Services::all();
        $response = ['code' => 200, 'message' => 'successfully retrieved',
        'services' => ServicesResources::collection($services)
    ];
        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $service = Services::create($input);
        $response = [
            'code' => 200,
            'message' => 'Services created successfully!',
            'service' => new ServicesResources($service)
        ];
        return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $service = Services::findOrFail($id);
        $response =[
            'code' => 200,
            'message' => 'services successfully created',
            'service' => new ServicesResources($service)

        ];
        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $service = Services::findOrFail($id);
        $service->update($input);
        $response =[
            'code' => 200,
            'message' => 'services successfully updated',
            'service' => new ServicesResources($service)

        ];
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $service = Services::findOrFail($id);
        $service->delete();
        $response =[
            'code' => 200,
            'message' => 'services successfully deleted',
            'service' => new ServicesResources($service)

        ];
        return $response;
    }
}
