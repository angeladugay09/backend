import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) =>{
    const students = await studentService.fetchAllStudents();
    res.status(200).json(students);
}

// insert
export const createStudent = async (req, res) =>{
    console.log(req);
    const {name, srcode, program} = req.body;
    const student = {name, srcode, program};
    
    try{
        const studentId = await studentService.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

// update
export const editStudent= async (req, res) =>{
    const {name, srcode, program} = req.body;
    const { id } = req.params;
    const student = {id: parseInt(id), name, srcode, program};
    
    try{
        const updatedStudent = await studentService.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

// delete
export const deleteStudent = async (req, res) =>{
    const { id } = req.params;
    
    try{
        const deletedStudent = await studentService.deleteStudent(parseInt(id));
        res.status(20).json({
            success: true,
            message: deletedStudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}