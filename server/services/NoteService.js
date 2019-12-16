import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll(id) {
    return await _repository.find({ bug: id });
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async delete(id) {
    let data = await _repository.findByIdAndRemove(id);
    if (!data) {
      throw new Error("Invalid Update Id");
    }
  }

}

const noteService = new NoteService();
export default noteService;
