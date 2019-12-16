
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

var note = new Schema({
  content: { type: String, required: true },
  bug: { type: ObjectId, ref: 'Bug', required: true },
  reportedBy: { type: String, required: true }, //The provided name for who made the note
  flagged: { type: String, enum: ["pending", "completed", "rejected"] }
}, { timestamps: true })
export default note;
