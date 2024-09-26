<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('homes', function (Blueprint $table) {
            $table->id();
            $table->string(column: 'hero')->nullable();
            $table->string(column: 'logo')->nullable();
            $table->string(column: 'sosmed')->nullable();
            $table->string(column: 'link')->nullable();
            $table->string(column: 'email')->nullable();
            $table->string(column: 'no_hp')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('homes');
    }
};
