import { HttpException, NestMiddleware } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { students } from "src/db";

@Injectable()
export class ValideStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Ce Middleware est appelé');

        const studentId = req.params.studentId;
        const isStudentExist = students.some(student => student.id === studentId);
        if (!isStudentExist) { throw new HttpException('Etudiant non trouvé', 400) }
        next();
    }
}