import { NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ValideStudentMiddleware } from 'src/common/middlewares/valideStudent.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValideStudentMiddleware).forRoutes({
            path: 'student/:studentId',
            method: RequestMethod.GET
        });
        consumer.apply(ValideStudentMiddleware).forRoutes({
            path: 'student/:studentId',
            method: RequestMethod.PUT
        });
    }
}
