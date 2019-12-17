import express from "express";
import bugService from "../services/BugService";
import noteService from "../services/NoteService";


export default class BugController {


  constructor() {
    this.router = express.Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getBugByBugId)
      .get("/:id/notes", this.getBugNotes)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll(+req.query.page);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getBugByBugId(req, res, next) {
    try {
      let data = await bugService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await bugService.create(req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async edit(req, res, next) {
    try {
      let data = await bugService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      let data = await bugService.delete(req.params.id)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getBugNotes(req, res, next) {
    try {
      let data = await noteService.getAll(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
