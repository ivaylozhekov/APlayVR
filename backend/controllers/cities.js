/**
 * Created by korolev on 03.08.2017.
 */

import mongoose from "mongoose";
import {CITY_MODEL} from "../models/modelNames";

const City = mongoose.model(CITY_MODEL);

export default class CitiesController {
  static async getList(req, res) {
    try {
      const list = await City.find({}, "-_id").sort({order: 1});

      return res.send(list);
    } catch (e) {
      return res.status(500).send(e);
    }
  }
}
