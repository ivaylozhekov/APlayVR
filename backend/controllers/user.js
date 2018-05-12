/**
 * Created by korolev on 22.06.2017.
 */

import mongoose from "mongoose";
import {USER_MODEL} from "../models/modelNames";
import {COMMON_ERRORS} from "../../api/dict/errors";

const User = mongoose.model(USER_MODEL);

export default class UserController {

  setReceivingChecksStatus = async (req, res) => {
    const {
      body: {
        userId,
        flag: sendChecksToEmail
      }
    } = req;

    const options = {
      criteria: {userId},
      select: "sendChecksToEmail"
    };

    let result;

    try {
      let user = await User.load(options);

      if (user) {
        user = await user.updateEmailFlag(sendChecksToEmail);
      } else {
        user = new User({userId, sendChecksToEmail});
        user = await user.save();
      }

      return res.send(user);
    } catch (e) {
      console.error(e);
      return res
        .status(COMMON_ERRORS.SERVER_UNAVAILABLE.code)
        .send(COMMON_ERRORS.SERVER_UNAVAILABLE);
    }
  };

  getById = async (req, res) => {
    const {userId} = req.params;
    const options = {
      criteria: {userId}
    };

    try {
      let user = await User.load(options);

      if (!user) {
        user = new User({userId});
        user = await user.save();
      }

      return res.send(user);
    } catch (e) {
      console.error(e);
      return res
        .status(COMMON_ERRORS.SERVER_UNAVAILABLE.code)
        .send(COMMON_ERRORS.SERVER_UNAVAILABLE);
    }
  };
}
