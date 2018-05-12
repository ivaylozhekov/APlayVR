/**
 * Created by korolev on 13.07.2017.
 */

import mongoose from "mongoose";
import * as _ from "lodash";

import {DELIVERY_OPTION_MODEL, DELIVERY_OPTION_OVERRIDE_MODEL} from "../models/modelNames";

const DeliveryOptionModel = mongoose.model(DELIVERY_OPTION_MODEL);
const DeliveryOptionOverrideModel = mongoose.model(DELIVERY_OPTION_OVERRIDE_MODEL);

export default class DeliveryOptionsController {
  load = async (req, res) => {
    const {
      uid: userId,
      oid: organizationId,
      type: userType
    } = req.query;

    const conditionValues = [userId];

    if (!_.isNil(organizationId)) {
      conditionValues.push(organizationId);
    }

    try {
      const deliveryOptions = await DeliveryOptionModel.find({userType}, "-_id name value");
      const deliveryOptionsOverridesData = await DeliveryOptionOverrideModel.find({userIds: {$in: conditionValues}}, "-_id options");

      const deliveryOptionsOverrides = _.reduce(deliveryOptionsOverridesData,
        (accumulator, section) => ({...accumulator, ...section.options}), {});

      const result = {};

      _.each(deliveryOptions, (option) => {
        result[option.name] = !_.isNil(deliveryOptionsOverrides[option.name]) ?
                              deliveryOptionsOverrides[option.name] : option.value;
      });

      return res.send(result);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
}
