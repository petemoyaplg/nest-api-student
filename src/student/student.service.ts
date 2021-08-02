import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    students = students;
    getStudents(): FindStudentResponseDto[] {
        return this.students;
    }
    getStudentById(studentId: string): FindStudentResponseDto {
        return this.students.find(student => {
            return student.id === studentId
        });
    }
    getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[] {
        return this.students.filter(student => {
            return student.teacher === teacherId
        });
    }
    createStudent(payload: CreateStudentDto): StudentResponseDto {
        const newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(payload: UpdateStudentDto, studentId: string): StudentResponseDto {
        let updateStudent: StudentResponseDto;
        const updateStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updateStudent = { id: studentId, ...payload };
                return updateStudent;
            } return student;
        });
        this.students = updateStudentList;
        return updateStudent;
    }
    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto {
        let updateStudent: StudentResponseDto;
        const updateStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updateStudent = { ...student, teacher: teacherId };
                return updateStudent;
            } return student;
        });
        this.students = updateStudentList;
        return updateStudent;
    }
}
