<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('join_classrooms', function (Blueprint $table) {
            $table->id();
            $table->string('classroom_code');
            $table->foreign('classroom_code')->references('class_code')->on('classrooms');
            $table->string('student_code');
            $table->foreign('student_code')->references('student_code')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('join_classrooms');
    }
};
