import express from "express";
const router = express.Router();
import fetchuser from "../middleware/fetchuser.js"
// import { body, validationResult } from "express-validator"
import Note from "../models/Note.js"
import { body, validationResult } from "express-validator";


router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error")
    }


});
router.post('/addnote', fetchuser, [
    body('title', "Enter a valid title.").isLength({ min: 3 }),
    body('description', "Description must be at least 5").isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error")
    }
})

export default router; 