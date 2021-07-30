import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teacher/:teacherId/student')
export class StudentTeacherController {

    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
        return this.studentService.getStudents();
    }

    @Put('/:teacherId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDto {
        return new StudentResponseDto;
    }
}
