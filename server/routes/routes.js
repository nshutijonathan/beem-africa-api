import express from "express";
import NetworksController from "../controllers/networks";
const router = express.Router();
router.get("/networks", NetworksController.getNetworks);
router.get("/networks/:mcc", NetworksController.getSingleNetWork);
router.get("/networks/:mcc/:mnc", NetworksController.getSingleNetWork);
router.get("/network/:mcc/:country", NetworksController.getSingleNetWorkByName);
export default router;
