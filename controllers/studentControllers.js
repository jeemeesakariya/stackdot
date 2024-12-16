
const User = require("../models/studentModel.js")


const handleInstitute = (req, res) => {
    try {
        res.status(200).json({
            message: "enter your institute",
            "institute": "giveme your institute in hader",
            "example": "playhouse,school,collage,c.e.c",
        })
    } catch (e) {
        res.json({ message: "somthing went wrong" ,e})
    }
}
const handleBoard = (req,res) => {
    try {
        res.status(200).json({
            message: "enter your board",
            institute: "giveme your board in hader",
            example:"CBSE, GSAB",
        })
    } catch (e) {
        res.json({ message: "somthing went wrong" ,e})
    }
}

const handleStudentInput=("/", async (req,res) => {
    const student = await User.create({ name: req.headers.name });
    console.log(student);
    res.send({
        message: "student created",
        updated: student,
        next:"please select the institute like playhouse , collage, c.e.c,school"
    });
})

const handleInstituteInput = async (req, res) => {
    
    try {
        console.log(req.headers.institute)
        const student = await User.findByIdAndUpdate(_id="67603ada9f5914cdc43049cd",{institute:req.headers.institute});
    
        console.log(student);
        res.status(200).send({
            updated: student,
            next:"select board like GSAB, CBSE",
        })
    } catch (e) {
        res.json({ message: "somthing went wrong",e })
    }
}

const handleInstituteInputBoard =async (req, res) => {
    try {
    const student=await User.findByIdAndUpdate(_id="67603ada9f5914cdc43049cd",{board:req.headers.board})
    console.log(student);
    if (req.headers.institute === "playhouse") {
        res.status(200).send({
            message: "updated",
            student: student,
            next: "select the subject ex. hkg, lkg"
        })
        }
    if (req.headers.institute === "school") {
        res.status(200).send({
            message: "updated",
            student: student,
            next: "select the subject ex. math, science"
        })
        }
    if (req.headers.institute === "collage") {
            res.status(200).send({
                message: "updated",
                student: student,
                next: "select the subject ex. toc,dsa,coa"
            })
        }
    if (req.headers.institute === "c.e.c") {
            res.status(200).send({
                message: "updated",
                student: student,
                next: "select the subject ex. pollity,current affirs"
            })
        }
    }catch (e) {
        res.json({ message: "somthing went wrong",e })
    }
}

const handleSubject = async (req,res) => {
    try {
        const student=await User.findByIdAndUpdate(_id="67603ada9f5914cdc43049cd",{board:req.headers.subject})
        console.log(student);
        res.send({
            message: "updated",
            student: student,
            next: "subjected is update"
        });
        }catch (e) {
            res.json({ message: "somthing went wrong",e })
        }
}


module.exports={handleStudentInput,handleBoard,handleInstitute,handleInstituteInput,handleInstituteInputBoard,handleSubject}