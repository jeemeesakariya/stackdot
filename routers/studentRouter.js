const express = require("express");
const router = express.Router();
const {
    handleInstitute,
    handleBoard,
    handleInstituteInput,
    handleInstituteInputBoard,
    handleSubject,
    handleStudentInput,
} = require("../controllers/studentControllers.js")

router.get("/institute", handleInstitute);

router.get("/board", handleBoard);

router.post("/",handleStudentInput)

router.post("/institute", handleInstituteInput);

router.post("/board", handleInstituteInputBoard);

router.post("/subject",handleSubject)

module.exports = router
