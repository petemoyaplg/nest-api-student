import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    getStudents() {
        return 'All Students';
    }

    @Get('/:studentId')
    getStudentById() {
        return 'On Student';
    }

    @Post()
    createStudent() {
        return 'New Student';
    }

    @Put('/:studentId')
    updateStudent() {
        return 'Student Updated';
    }
}