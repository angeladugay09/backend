import * as studentController from '../controllers/studentController.js';
import express from "express";

const studentRoute = express.Router();

studentRoute.get('/', studentController.fetchAllStudents);
studentRoute.post('/', studentController.createStudent);
studentRoute.put('/:id', studentController.editStudent);
studentRoute.delete('/:id', studentController.deleteStudent);

export default studentRoute;