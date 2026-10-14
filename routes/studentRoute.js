import * as studentController from '../controllers/studentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllStudents);

export default studentRoutes;