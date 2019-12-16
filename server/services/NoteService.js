import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll(id) {
    return await _repository.find({ bug: id });
  }

}

const noteService = new NoteService();
export default noteService;
