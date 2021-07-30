import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {

    constructor(private readonly teacherService: TeacherService) { }

    @Get()
    getTeachers(): FindTeacherResponseDto[] {
        return this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(@Param('teacherId') teacherId: string): FindTeacherResponseDto {
        return this.teacherService.getTeacherById(teacherId);
    }

    @Get('/:teacherId/student')
    getStudents() {
        return '';
    }

    @Put('/:teacherId/student/:studentId')
    updateStudentTeacher() {
        return 'Update';
    }
}
