const {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentControllers.js")

const router = require("express").Router();

router.get("/", (req, res) => getAllStudents(req, res));
router.get("/:id", (req, res) => getStudentById(req, res));
router.post("/", (req, res) => addStudent(req, res));
router.put("/:id", (req, res) => updateStudent(req, res));
router.delete("/:id", (req, res) => deleteStudent(req, res));

module.exports = router;