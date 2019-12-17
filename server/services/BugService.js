import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll(skip) {
    return await _repository.find({}).skip(skip * 3).limit(3);
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new Error("Invalid Update Id");
    }
    return data;
  }
  async delete(id) {
    let data = await _repository.findByIdAndUpdate(id, { closed: true });
    if (!data) {
      throw new Error("Invalid Update Id");
    }
  }
}

const bugService = new BugService();
export default bugService;
