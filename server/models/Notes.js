import mongoose from "mongoose";

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        // unique: true
    },
    tag: {
        type: String,
        default: "General"
        // required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const notesInfo = mongoose.model('notes', NotesSchema)
export default notesInfo;