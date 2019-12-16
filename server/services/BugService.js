import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async getById(id) {
    return await _repository.findById(id);
  }
}

const bugService = new BugService();
export default bugService;
