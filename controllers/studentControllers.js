const Student = require("../models/student");

async function getAllStudents(req, res) {
    try {
        const users = await Student.findAll();
        return res.json(users);
    } catch (err) {
        console.log(err);
        return res.send("Something went wrong.");
    }
}

async function getStudentById(req, res) {
    try {
        const student = await Student.findByPk(req.params.id);
        return res.json(student);
    } catch (err) {
        console.log(err);
        return res.send("Something went wrong.");
    }
}

async function addStudent(req, res) {
    const { name, email, age } = req.body;
    try {
        await Student.create([name, email, age]);
        return res.send("Created new user successfully");
    } catch (err) {
        console.log(err);
        return res.send("Something went wrong.");
    }
}

async function updateStudent(req, res) {
    try {
        consnt[rowsAffected] = await Student.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (rowsAffected > 0) {
            return res.send("Update the student successfully");
        }
    } catch (err) {
        console.log(err);
        return res.send("Something went wrong");
    }
}

async function deleteStudent(req, res) {
    try {
        const deletedRows = await Student.destroy({
            where: {
                id: req.params.id
            }
        });

        if (deletedRows > 0) return res.send("Deleted student successfully");
    } catch (err) {
        console.log(err);
        return res.send("Something went wrong");
    }
}

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};