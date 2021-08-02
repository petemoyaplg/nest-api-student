import { ParseUUIDPipe } from '@nestjs/common';
import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teacher/:teacherId/student')
export class StudentTeacherController {

    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string
    ): FindStudentResponseDto[] {
        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): StudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherId, studentId);
    }
}
