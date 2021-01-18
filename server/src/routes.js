const express = require("express");
const multer = require("multer");

const MyController = require("./controller/MyController");
const PlanilhasController = require("./controller/SpreadSheetController");

const routes = new express.Router();

const uploadConfig = require("./config/upload");
const multiPart = multer(uploadConfig);

routes.get("/api/list", PlanilhasController.listAll);
routes.post("/api/insert", multiPart.none(), MyController.insertData);
routes.post("/api/insert-image", multiPart.single('source'), PlanilhasController.insert);
routes.put("/api/update", multiPart.none(), MyController.updateData);
routes.delete("/api/delete", multiPart.none(), MyController.deleteData);

module.exports = routes;