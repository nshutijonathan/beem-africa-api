import models from "../database/models";
import constants from "../helpers/constants";
const {
  OK,
  BAD_REQUEST,
  CREATED,
  FORBIDDEN,
  CONFLICT,
  NOT_FOUND,
} = constants.statusCode;
const { networks } = models;

class NetworksController {
  static async getNetworks(req, res) {
    try {
      const NetWorksList = await networks.findAll({});

      return res.status(OK).json({
        message: "networks fetched successfully",
        status: 200,
        data: NetWorksList,
        total: NetWorksList.length,
      });
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  }
  static async getSingleNetWork(req, res) {
    try {
      const networksFound = await networks.findAll({
        where: {
          mcc: req.params.mcc,
          mnc: req.params.mnc,
        },
      });
      console.log("req.params", req.params);
      if (networksFound) {
        return res.status(OK).json({
          message: `fetched successfully`,
          status: 200,
          data: networksFound,
        });
      }
      return res.status(OK).json({
        message: "Not found",
        status: 404,
      });
    } catch (error) {
      return error.message;
    }
  }
  static async getSingleNetWorkByName(req, res) {
    try {
      const networksFound = await networks.findAll({
        where: {
          mcc: req.params.mcc,
          country: req.params.country,
        },
      });
      console.log("req.params", req.params);
      if (networksFound) {
        return res.status(OK).json({
          message: `fetched successfully`,
          status: 200,
          data: networksFound,
        });
      }
      return res.status(OK).json({
        message: "Not found",
        status: 404,
      });
    } catch (error) {
      return error.message;
    }
  }
}
export default NetworksController;
